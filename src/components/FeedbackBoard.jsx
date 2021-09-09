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
    return (
      <div>
        {this.handleResponse()}
      </div>
    );
  }
}

export default FeedbackBoard;
