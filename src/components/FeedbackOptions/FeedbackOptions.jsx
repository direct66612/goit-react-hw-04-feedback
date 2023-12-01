import { Component } from 'react';
import { Button, Container } from './FeedbackOptions.styled';
class FeedbackOptions extends Component {
  render() {
    return (
      <Container>
        {this.props.options.map(option => (
          <Button
            key={option}
            className="feedBack__btn"
            onClick={() => this.props.onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </Container>
    );
  }
}
export default FeedbackOptions;
