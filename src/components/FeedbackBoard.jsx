import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class FeedbackBoard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    // history.push('/');
    console.log(history);
  }

  handleResponse() {
    const getStorage = JSON.parse(localStorage.getItem('state'));
    const assert = getStorage.player.assertions;
    const couldBetter = 3;
    const testid = 'feedback-text';

    if (assert < couldBetter) return <h1 data-testid={ testid }>Podia ser melhor...</h1>;
    if (assert >= couldBetter) return <h1 data-testid={ testid }>Mandou bem!</h1>;
  }

  render() {
    const getStorage = JSON.parse(localStorage.getItem('state'));
    const assert = getStorage.player.assertions;
    const finalScore = getStorage.player.score;
    console.log(assert);
    return (
      <div>
        {this.handleResponse()}
        <h3>A quantidade de questões que você acertou foi:</h3>
        <h3 data-testid="feedback-total-question">
          { assert }
        </h3>
        <h3>Parabéns o seu placar final é:</h3>
        <h4 data-testid="feedback-total-score">
          { finalScore }
        </h4>
        <Link
          className="login-form-btn"
          to="/"
          data-testid="btn-play-again"
        >
          Jogar novamente
        </Link>
        <Link
          className="login-form-btn"
          to="/ranking"
          data-testid="btn-ranking"
        >
          Ver Ranking
        </Link>
      </div>
    );
  }
}

FeedbackBoard.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default FeedbackBoard;
