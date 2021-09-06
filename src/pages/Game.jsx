import React from 'react';
import Header from '../components/Header';
import BoardQuestions from '../components/BoardQuestions';

import './style/Game.css';

class Game extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <BoardQuestions />
      </div>
    );
  }
}

export default Game;
