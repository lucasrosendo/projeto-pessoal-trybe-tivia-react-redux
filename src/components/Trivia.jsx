import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Responses from './Responses';

class Trivia extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <div className="game-container">
        <Question
          category={ question.category }
          question={ question.question }
        />
        <Responses
          correctAnswer={ question.correct_answer }
          incorrectAnswers={ question.incorrect_answers }
        />
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
