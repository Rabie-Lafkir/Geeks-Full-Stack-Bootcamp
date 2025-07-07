// exercise2/date.js
// Hard-coded birthday: 1990-06-15 08:30 local time
const birthday = new Date(1990, 5, 15, 8, 30);          // month is 0-based

function minutesLived() {
  const diffMs = Date.now() - birthday.getTime();
  const minutes = Math.floor(diffMs / 60_000);
  return `You have lived approximately ${minutes.toLocaleString()} minutes.`;
}

module.exports = minutesLived;

/*  BONUS
    If you’d like to prompt the user instead of hard-coding:
    1) npm install prompt-sync
    2) const prompt = require('prompt-sync')();
       const input  = prompt('Enter your birthdate (YYYY-MM-DD): ');
       const birthday = new Date(input);
*/
