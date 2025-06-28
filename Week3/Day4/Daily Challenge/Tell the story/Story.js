const libForm = document.getElementById("libform");
const shuffleButton = document.getElementById("shuffle");
const storySpan = document.getElementById("story");

let currentWords = {};

const storyTemplates = [
  (w) => `${w.person} went to the ${w.place} to ${w.verb} with a ${w.adjective} ${w.noun}.`,
  (w) => `In the ${w.place}, ${w.person} found a ${w.adjective} ${w.noun} and decided to ${w.verb}.`,
  (w) => `${w.person} was ${w.verb}ing with a ${w.noun} at the ${w.place}, feeling very ${w.adjective}.`
];

/**
 * capitalizeFirst
 * @param {*} sentence 
 * @returns 
 */
function capitalizeFirst(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

libForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill out all fields!");
    return;
  }

  currentWords = { noun, adjective, person, verb, place };
  const story = storyTemplates[0](currentWords);

  storySpan.textContent = capitalizeFirst(story);
});

shuffleButton.addEventListener("click", function () {
  if (
    !currentWords.noun ||
    !currentWords.adjective ||
    !currentWords.person ||
    !currentWords.verb ||
    !currentWords.place
  ) {
    alert("Please generate a story first!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  const newStory = storyTemplates[randomIndex](currentWords);
  storySpan.textContent = capitalizeFirst(newStory);
});
