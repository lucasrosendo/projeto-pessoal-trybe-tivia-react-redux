import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Trivia from '../components/Trivia';
import { actionGetTriviaWithThunk } from '../actions';

import './style/Game.css';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    const { fetchQuestions, token } = this.props;
    fetchQuestions(token);
  }

  render() {
    const { questions, isLoading } = this.props;
    const { index } = this.state;
    if (isLoading === true) return <h1>CARREGANDO GAME...</h1>;
    return (
      <div className="main">
        <Header />
        <Trivia question={ questions[index] } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.login.token,
  questions: state.trivia.allQuestions,
  isLoading: state.trivia.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: (payload) => dispatch(actionGetTriviaWithThunk(payload)),
});

Game.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
