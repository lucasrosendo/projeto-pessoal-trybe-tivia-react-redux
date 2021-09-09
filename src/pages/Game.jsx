import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Trivia from '../components/Trivia';
import { actionGetTriviaWithThunk, actionShuffleQuestions } from '../actions';

import './style/Game.css';

class Game extends React.Component {
  componentDidMount() {
    const { fetchQuestions, token, name, email } = this.props;
    fetchQuestions(token);

    localStorage.setItem('state', JSON
      .stringify({ player: { name, assertions: 0, score: 0, gravatarEmail: email } }));
  }

  render() {
    const { questions, isLoading, index, sendShuffleQuestions } = this.props;

    if (!questions[index]) return <h1>CARREGANDO GAME...</h1>;
    const test = questions[index].correct_answer;
    const test1 = questions[index].incorrect_answers;
    const array = [...test1, test];
    sendShuffleQuestions(array);

    if (isLoading === true) return <h1>CARREGANDO GAME...</h1>;
    return (
      <div className="main">
        <Header testid="header-score" />
        <Trivia question={ questions[index] } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.login.token,
  questions: state.trivia.allQuestions,
  isLoading: state.trivia.isLoading,
  name: state.login.name,
  email: state.login.login,
  index: state.trivia.indexQuestion,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: (payload) => dispatch(actionGetTriviaWithThunk(payload)),
  sendShuffleQuestions: (array) => dispatch(actionShuffleQuestions(array)),
});

Game.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  index: PropTypes.bool.isRequired,
  sendShuffleQuestions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
