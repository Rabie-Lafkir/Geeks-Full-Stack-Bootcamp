function timeUntilNewYear() {
  const now   = new Date();
  const next  = new Date(now.getFullYear() + 1, 0, 1); // Jan-01 of next year
  const diff  = next - now;                            // ms difference

  const t     = {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000)    % 60,
    seconds: Math.floor(diff / 1_000)     % 60,
  };

  return `The 1st January is in ${t.days} days ` +
         `${t.hours}:${String(t.minutes).padStart(2, '0')}:` +
         `${String(t.seconds).padStart(2, '0')} hours`;
}

module.exports = timeUntilNewYear;
