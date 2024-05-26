export const getWords = async () => {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=25&lang=en&length=5"
  );
  return response.json();
};
