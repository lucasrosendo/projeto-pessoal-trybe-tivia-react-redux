import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  htmldecode(value) {
    const correct = document.createElement('textarea');
    correct.innerHTML = value;
    return correct.value;
  }

  render() {
    const { category, question } = this.props;
    return (
      <div>
        <h4
          className="game-category"
          data-testid="question-category"
        >
          {this.htmldecode(category)}
        </h4>
        <h2
          className="game-question"
          data-testid="question-text"
        >
          {this.htmldecode(question)}
        </h2>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Question;
