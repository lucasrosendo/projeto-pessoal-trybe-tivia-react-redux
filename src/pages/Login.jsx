import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionToStore, actionGetTokenWithThunk } from '../actions';
import './style/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      login: '',
      name: '',
      disable: true,
    };
  }

  handleClick({ target }) {
    const { getToken, history, getStateToStore } = this.props;
    getToken().then((data) => {
      const { payload: { token } } = data;
      const tokenStore = token;
      const toStorage = JSON.stringify(tokenStore);
      localStorage.setItem('token', toStorage);
    });

    getStateToStore(this.state);
    history.push(`/${target.name}`);
  }

  handleChange({ target }) {
    const { id, value } = target;
    const { login, name } = this.state;

    if ((name.length >= 1) && (login.length > 1)) {
      this.setState({ disable: false });
    }
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { login, name, disable } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <main className="login-main">
        <form className="login-form-container">
          <label htmlFor="email">
            Email do Gravatar:
            <input
              value={ login }
              onChange={ handleChange }
              id="login"
              type="email"
              data-testid="input-gravatar-email"
            />
          </label>
          <label htmlFor="name">
            Nome do Jogador:
            <input
              value={ name }
              onChange={ handleChange }
              id="name"
              type="text"
              data-testid="input-player-name"
            />
          </label>
          <button
            className="login-form-btn"
            data-testid="btn-play"
            type="button"
            disabled={ disable }
            onClick={ handleClick }
            name="game"
          >
            Jogar
          </button>
          <button
            className="login-form-btn"
            data-testid="btn-settings"
            type="button"
            onClick={ handleClick }
            name="settings"
          >
            Configurações
          </button>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  getToken: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired,
  getStateToStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(actionGetTokenWithThunk()),
  getStateToStore: (test) => dispatch(actionToStore(test)),
});

export default connect(null, mapDispatchToProps)(Login);
