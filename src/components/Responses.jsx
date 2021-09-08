import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';

class Responses extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.nextClick = this.nextClick.bind(this);

    this.state = {
      displayBtn: 'none',
      correctAnswerStyle: null,
      incorrectAnswerStyle: null,
      statusBtn: false,
    };
  }

  handleClick() {
    this.setState({
      displayBtn: 'block',
      correctAnswerStyle: 'correct',
      incorrectAnswerStyle: 'incorrect',
      statusBtn: true,
    });
  }

  nextClick() {
    this.setState({
      displayBtn: 'none',
      correctAnswerStyle: null,
      incorrectAnswerStyle: null,
      statusBtn: false,
    });
  }

  htmldecode(value) {
    const correct = document.createElement('textarea');
    correct.innerHTML = value;
    return correct.value;
  }

  render() {
    const { correctAnswer, incorrectAnswers } = this.props;
    const { displayBtn, correctAnswerStyle, incorrectAnswerStyle, statusBtn,
    } = this.state;
    const TIMER = 30000;
    return (
      <div>
        <div className="game-answers">
          <button
            onClick={ this.handleClick }
            className={ correctAnswerStyle }
            type="button"
            data-testid="correct-answer"
            disabled={ statusBtn }
          >
            {this.htmldecode(correctAnswer)}
          </button>
          {incorrectAnswers.map((answer, index) => (
            <button
              onClick={ this.handleClick }
              className={ incorrectAnswerStyle }
              key={ index }
              type="button"
              data-testid={ `wrong-answer${index}` }
              disabled={ statusBtn }
            >
              {this.htmldecode(answer)}
            </button>
          ))}
        </div>
        <div className="game-next-question">
          <button
            onClick={ this.nextClick }
            style={ { display: displayBtn } }
            data-testid="btn-next"
            type="button"
          >
            Next
          </button>
        </div>
        <h4><Countdown date={ Date.now() + TIMER } onComplete={ this.handleClick } /></h4>
      </div>
    );
  }
}

Responses.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Responses;
