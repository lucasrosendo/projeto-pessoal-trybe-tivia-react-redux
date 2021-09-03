import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionToStore, actionGetTokenWithThunk } from '../actions';

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

  handleClick() {
    const { getToken, history, getStateToStore } = this.props;
    getToken().then((data) => {
      const { payload: { token } } = data;
      const tokenStore = token;
      const toStorage = JSON.stringify(tokenStore);
      localStorage.setItem('token', toStorage);
    });
    getStateToStore(this.state);
    history.push('/game');
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
    const { handleChange } = this;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Login:
            <input
              value={ login }
              onChange={ handleChange }
              id="login"
              type="email"
              data-testid="input-gravatar-email"
            />
          </label>
          <label htmlFor="name">
            Nome:
            <input
              value={ name }
              onChange={ handleChange }
              id="name"
              type="text"
              data-testid="input-player-name"
            />
          </label>
          <button
            type="button"
            data-testid="btn-play"
            disabled={ disable }
            onClick={ this.handleClick }
          >
            Jogar
          </button>
          <div>
            <Link
              to="/settings"
            >
              <button
                data-testid="btn-settings"
                type="button"
              >
                Configurações
              </button>
            </Link>
          </div>
        </form>
      </div>
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
