import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionGetIndexQuestion } from '../actions';

class Responses extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handlePoints = this.handlePoints.bind(this);
    this.handleCountdown = this.handleCountdown.bind(this);

    this.state = {
      displayBtn: 'none',
      correctAnswerStyle: null,
      incorrectAnswerStyle: null,
      statusBtn: false,
      timer: 30000,
      redirect: false,
    };
  }

  handleTimer() {
    const clock = document.getElementById('test-clock');
    const magicNumber = -2;

    return (parseFloat(((clock.firstChild).textContent).substr(magicNumber)));
  }

  handlePoints() {
    const { myQuestion } = this.props;
    const actualQuestion = myQuestion[0];
    const actualDifficulty = actualQuestion.difficulty;
    const magicNumber = 3;

    let testing = 0;

    if (actualDifficulty === 'easy') testing = 1;
    if (actualDifficulty === 'medium') testing = 2;
    if (actualDifficulty === 'hard') testing = magicNumber;

    return testing;
  }

  handleCountdown() {
    this.setState({
      displayBtn: 'block',
      correctAnswerStyle: 'correct',
      incorrectAnswerStyle: 'incorrect',
      statusBtn: true,
      timer: 0,
    });
  }

  handleClick({ target: { name } }) {
    // const { correctAnswer } = this.props;
    // const correct = this.htmldecode(correctAnswer);
    const magicNumber = 10;

    const timer = this.handleTimer();
    const points = this.handlePoints();

    if (name === 'correct') {
      const sum = (magicNumber + (timer * points));
      const testando = (JSON.parse(localStorage.getItem('state')));
      let number = testando.player.score;
      number += sum;
      JSON.stringify((testando.player.score) = number);
      localStorage.setItem('state', JSON.stringify(testando));
    }
    this.handleCountdown();
  }

  nextClick() {
    const { nextQuestion, index } = this.props;
    const number = 4;
    this.setState({
      displayBtn: 'none',
      correctAnswerStyle: null,
      incorrectAnswerStyle: null,
      statusBtn: false,
      timer: 30000,
    });
    if (index < number) nextQuestion();

    if (index === number) {
      this.setState({
        redirect: true,
      });
    }
  }

  htmldecode(value) {
    const correct = document.createElement('textarea');
    correct.innerHTML = value;
    return correct.value;
  }

  render() {
    const { correctAnswer, incorrectAnswers } = this.props;
    const { displayBtn, correctAnswerStyle, incorrectAnswerStyle, statusBtn, timer,
      redirect,
    } = this.state;
    return (
      <div>
        <div className="game-answers">
          <button
            onClick={ this.handleClick }
            className={ correctAnswerStyle }
            name="correct"
            // value={ this.htmldecode(correctAnswer) }
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
              name="incorrect"
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
        <h4 id="test-clock">
          <Countdown date={ Date.now() + timer } onComplete={ this.handleCountdown } />
        </h4>
        { redirect && <Redirect to="/feedback" /> }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  nextQuestion: () => dispatch(actionGetIndexQuestion()),
});

Responses.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  myQuestion: PropTypes.arrayOf(Object).isRequired,
  nextQuestion: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  index: state.trivia.indexQuestion,
  myQuestion: state.trivia.allQuestions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Responses);
