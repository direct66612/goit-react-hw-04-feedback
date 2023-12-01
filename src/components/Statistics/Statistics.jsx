import { Component } from 'react';
import { Container, Text } from './Statistics.styled';
class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <Container>
        <Text>Good:{good}</Text>
        <Text>Neutral:{neutral}</Text>
        <Text>Bad:{bad}</Text>
        <Text>Total:{total}</Text>
        <Text>Positive Feedback:{positivePercentage}%</Text>
      </Container>
    );
  }
}
export default Statistics;
