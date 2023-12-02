import { Container, Text } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <Text>Good:{good}</Text>
      <Text>Neutral:{neutral}</Text>
      <Text>Bad:{bad}</Text>
      <Text>Total:{total}</Text>
      <Text>Positive Feedback:{positivePercentage}%</Text>
    </Container>
  );
};
export default Statistics;
