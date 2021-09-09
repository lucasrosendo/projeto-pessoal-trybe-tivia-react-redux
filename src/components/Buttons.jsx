import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <>
        <button
          className="login-form-btn"
          data-testid="btn-play"
          type="button"
          disabled={ disabled }
          onClick={ onClick }
          name="game"
        >
          Jogar
        </button>
        <button
          className="login-form-btn"
          data-testid="btn-settings"
          type="button"
          onClick={ onClick }
          name="settings"
        >
          Configurações
        </button>
      </>
    );
  }
}

Buttons.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
