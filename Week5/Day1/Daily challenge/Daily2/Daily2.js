const morseJson = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseObj = JSON.parse(morseJson);
      if (Object.keys(morseObj).length === 0) {
        return reject('Morse object is empty');
      }
      resolve(morseObj);
    } catch (err) {
      reject('Failed to parse Morse JSON');
    }
  });
}

/**
 * toMorse expects an input string.
 * Pass the user input as second argument for easy testing.
 */
function toMorse(morseJS, input = '') {
  return new Promise((resolve, reject) => {
    if (typeof input !== 'string' || input.trim() === '') {
      return reject('No input provided');
    }
    const lower = input.toLowerCase();
    const translation = [];

    for (const ch of lower) {
      if (ch === ' ') {
        translation.push('/'); // word separator
        continue;
      }
      const morseChar = morseJS[ch];
      if (!morseChar) {
        return reject(`Character "{ch}" not in Morse table`);
      }
      translation.push(morseChar);
    }
    resolve(translation);
  });
}

function joinWords(morseTranslation) {
  const joined = morseTranslation.join('\n');
  console.log(joined);
  return joined;
}

// Testing examples
toJs()
  .then(morseJS => toMorse(morseJS, 'Hello'))
  .then(joinWords);

toJs()
  .then(morseJS => toMorse(morseJS, '¡Hola!'))
  .then(joinWords)
  .catch(err => console.log('Rejected →', err));

