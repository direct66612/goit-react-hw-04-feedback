import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notifications from './Notifications/Notifications';
const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const onLeaveFeedback = option => {
    setState(prev => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };
  function countTotalFeedback() {
    return Object.values(state).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
  }
  function countPositiveFeedbackPercentage() {
    return Math.round((state.good / countTotalFeedback()) * 100);
  }
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notifications message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
export default App;
