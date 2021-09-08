import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import { connect } from 'react-redux';

class Responses extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handlePoints = this.handlePoints.bind(this);

    this.state = {
      displayBtn: 'none',
      correctAnswerStyle: null,
      incorrectAnswerStyle: null,
      statusBtn: false,
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

  handleClick({ target: { value } }) {
    const { correctAnswer } = this.props;
    const correct = this.htmldecode(correctAnswer);
    const magicNumber = 10;

    const timer = this.handleTimer();
    const points = this.handlePoints();

    if (value === correct) {
      const sum = (magicNumber + (timer * points));
      const testando = JSON.parse(localStorage.getItem('player'));
      console.log(testando);
      JSON.stringify((testando.score) = sum);
      localStorage.setItem('player', JSON.stringify(testando));
    }

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
            onClick={ (event) => this.handleClick(event) }
            className={ correctAnswerStyle }
            value={ this.htmldecode(correctAnswer) }
            type="button"
            data-testid="correct-answer"
            disabled={ statusBtn }
          >
            {this.htmldecode(correctAnswer)}
          </button>
          {incorrectAnswers.map((answer, index) => (
            <button
              onClick={ (event) => this.handleClick(event) }
              className={ incorrectAnswerStyle }
              key={ index }
              value={ this.htmldecode(answer) }
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
          <Countdown date={ Date.now() + TIMER } onComplete={ this.handleClick } />
        </h4>
      </div>
    );
  }
}

Responses.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  myQuestion: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  myQuestion: state.trivia.allQuestions,
});

export default connect(mapStateToProps)(Responses);
