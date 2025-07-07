const nextHoliday = {
  name: 'Christmas',
  date(year) { return new Date(year, 11, 25, 0, 0, 0); }   // 25-Dec @ 00:00
};

function timeUntilHoliday() {
  const now   = new Date();
  let holiday = nextHoliday.date(now.getFullYear());

  // if holiday already passed this year, use next year
  if (holiday <= now) holiday = nextHoliday.date(now.getFullYear() + 1);

  const diff  = holiday - now;

  const t = {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000)    % 60,
    seconds: Math.floor(diff / 1_000)     % 60,
  };

  const today = now.toLocaleDateString('en-GB', { year:'numeric', month:'long', day:'numeric' });

  return `Today is ${today}\n` +
         `The next holiday (${nextHoliday.name}) is in ` +
         `${t.days} days and ${t.hours}:${String(t.minutes).padStart(2,'0')}:` +
         `${String(t.seconds).padStart(2,'0')} hours`;
}

module.exports = timeUntilHoliday;

/*  BONUS
    Look into the npm package "date-holidays" for automatic holiday data.
    Example:
      const Holidays = require('date-holidays');
      const hd = new Holidays('US');
      const next = hd.isHoliday(new Date()) || hd.nextHoliday();
*/
