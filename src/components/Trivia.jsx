import React from 'react';
import PropTypes from 'prop-types';

class Trivia extends React.Component {
  htmldecode(str) {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  }

  render() {
    const { question } = this.props;
    return (
      <div>
        <p data-testid="question-category">{question.category}</p>
        <p data-testid="question-text">{question.question}</p>
        <button
          data-testid="correct-answer"
          type="button"
        >
          {this.htmldecode(question.correct_answer)}
        </button>
        {question.incorrect_answers.map((answer, index) => (
          <button
            data-testid={ `wrong-answer-${index}` }
            type="button"
            key={ index }
          >
            {answer}
          </button>
        ))}
      </div>
    );
  }
}

Trivia.propTypes = {
  question: PropTypes.shape({
    category: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Trivia;
