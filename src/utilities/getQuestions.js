const getQuestions = async (tokenTrivia) => {
  const data = await fetch(`https://opentdb.com/api.php?amount=5&token=${tokenTrivia}`);
  if (!data.ok) throw new Error('Tente novamente');
  return data.json();
};

export default getQuestions;
