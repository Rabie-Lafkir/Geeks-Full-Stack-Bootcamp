const sentence = "The movie is not that bad, I like it";

const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  const toReplace = sentence.substring(wordNot, wordBad + 3);
  const result = sentence.replace(toReplace, "good");
  console.log(result);
} else {
  console.log(sentence);
}
