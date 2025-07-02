const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const story = epic.reduce((sentence, word) => `${sentence} ${word}`);
console.log(story.trim());
