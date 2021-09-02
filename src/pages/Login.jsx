import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      login: '',
      name: '',
      disable: true,
    };
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
            onClick={ console.log('teste') }
          >
            Jogar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
