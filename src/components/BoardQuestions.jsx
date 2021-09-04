import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionGetApiTriviaWithThunk } from '../actions';

class BoardQuestions extends React.Component {
  constructor(props) {
    super(props);

    this.fetchApiAndState = this.fetchApiAndState.bind(this);
    this.set = this.set.bind(this);

    this.state = {
      isLoading: true,
      questions: null,
    };
  }

  componentDidMount() {
    this.fetchApiAndState();
  }

  async fetchApiAndState() {
    const { fetchAPI } = this.props;
    await fetchAPI();
    await this.set();
  }

  set() {
    const { allQuestions } = this.props;
    this.setState({ questions: allQuestions, isLoading: false });
  }

  render() {
    const { isLoading, questions } = this.state;
    if (isLoading) return <h1>Estamos procurando perguntas para você</h1>;
    console.log(questions);
    return (
      <div />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(actionGetApiTriviaWithThunk()),
});

const mapStateToProps = (state) => ({
  allQuestions: state.game.allQuestions,
});

BoardQuestions.propTypes = {
  fetchAPI: PropTypes.func,
  allQuestions: PropTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(BoardQuestions);
