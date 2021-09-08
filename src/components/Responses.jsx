import React from 'react';
import PropTypes from 'prop-types';

class Responses extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      displayBtn: 'none',
    };
  }

  handleClick() {
    this.setState({ displayBtn: 'block' });
  }

  htmldecode(value) {
    const correct = document.createElement('textarea');
    correct.innerHTML = value;
    return correct.value;
  }

  render() {
    const { correctAnswer, incorrectAnswers } = this.props;
    const { displayBtn } = this.state;
    return (
      <div>
        <div className="game-answers">
          <button
            onClick={ this.handleClick }
            className="game-answer-button"
            type="button"
            data-testid="correct-answer"
          >
            {this.htmldecode(correctAnswer)}
          </button>
          {incorrectAnswers.map((answer, index) => (
            <button
              onClick={ this.handleClick }
              className="game-answer-button"
              key={ index }
              type="button"
              data-testid={ `wrong-answer${index}` }
            >
              {this.htmldecode(answer)}
            </button>
          ))}
        </div>
        <div className="game-next-question">
          <button
            style={ { display: displayBtn } }
            data-testid="btn-next"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

Responses.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.string.isRequired,
};

export default Responses;
