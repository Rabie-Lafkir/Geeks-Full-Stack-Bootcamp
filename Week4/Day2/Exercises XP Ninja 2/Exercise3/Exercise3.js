const searchWord = (sentence, word) => {
  const pattern = new RegExp(`\\b${word}\\b`, 'gi');
  const count = (sentence.match(pattern) || []).length;
  return `'${word}' was found ${count} ${count === 1 ? 'time' : 'times'}.`;
};

console.log(searchWord('The quick brown fox', 'fox'));
