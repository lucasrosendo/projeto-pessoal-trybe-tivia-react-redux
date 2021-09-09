function shuffleAnswers(answer) {
  for (let index = answer.length - 1; index > 0; index -= 1) {
    const counter = Math.floor(Math.random() * (index + 1));
    [answer[index], answer[counter]] = [answer[counter], answer[index]];
  }
  return answer;
}

export default shuffleAnswers;
