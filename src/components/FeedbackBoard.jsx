import React from 'react';

class FeedbackBoard extends React.Component {
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
      </div>
    );
  }
}

export default FeedbackBoard;
