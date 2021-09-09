import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Answers extends React.Component {
  htmldecode(value) {
    const correct = document.createElement('textarea');
    correct.innerHTML = value;
    return correct.value;
  }

  render() {
    const {
      shuffleQuestion,
      onClick,
      className,
      disabled,
      incorrectClass,
      correctAnswer,
    } = this.props;
    return (
      shuffleQuestion.map((question, index) => {
        if (question === correctAnswer) {
          return (
            <button
              onClick={ onClick }
              className={ className }
              name="correct"
              type="button"
              data-testid="correct-answer"
              disabled={ disabled }
            >
              {this.htmldecode(question)}
            </button>);
        }
        return (
          <button
            onClick={ onClick }
            className={ incorrectClass }
            key={ index }
            name="incorrect"
            type="button"
            data-testid={ `wrong-answer${index}` }
            disabled={ disabled }
          >
            {this.htmldecode(question)}
          </button>);
      })
    );
  }
}

const mapStateToProps = (state) => ({
  shuffleQuestion: state.trivia.shuffleQuestions,
});

Answers.propTypes = {
  shuffleQuestion: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  incorrectClass: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Answers);
