import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <>
        <h1
          data-testid="ranking-title"
        >
          Ranking
        </h1>
        <Link
          to="/"
          data-testid="btn-go-home"
          className="login-form-btn"
        >
          Retorna ao início
        </Link>
      </>
    );
  }
}

export default Ranking;
