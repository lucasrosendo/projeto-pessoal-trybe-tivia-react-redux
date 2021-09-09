import React from 'react';
import Header from '../components/Header';
import FeedbackBoard from '../components/FeedbackBoard';

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="feedback-text">Feedback</h1>
        <Header testid="header-score" />
        <FeedbackBoard />
      </div>
    );
  }
}

export default Feedback;
