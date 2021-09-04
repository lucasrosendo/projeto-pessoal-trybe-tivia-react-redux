const getApiTrivia = (tokenTrivia) => (
  fetch(`https://opentdb.com/api.php?amount=5&token=${tokenTrivia}`)
    .then((response) => (
      response
        .json()
        .then((data) => data.results)
    ))
);

export default getApiTrivia;
