import { Component } from 'react';
import { Title, Container } from './Section.styled';
class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    );
  }
}
export default Section;
