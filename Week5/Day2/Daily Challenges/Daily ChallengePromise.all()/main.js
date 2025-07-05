const form     = document.getElementById("sunForm");
const results  = document.getElementById("results");
const ENDPOINT = "https://api.sunrise-sunset.org/json";

// ---- Helpers -----------------------------------------------------------
const buildUrl = (lat, lon) =>
  `${ENDPOINT}?lat=${lat}&lng=${lon}&formatted=0`;

const toLocalTime = iso =>
  new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// ---- Main flow ---------------------------------------------------------
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  results.textContent = "Loading…";

  // 1. Grab form values
  const { lat1, lon1, lat2, lon2 } = Object.fromEntries(
    new FormData(form).entries()
  );

  try {
    // 2. Launch both fetches concurrently
    const [r1, r2] = await Promise.all([
      fetch(buildUrl(lat1, lon1)),
      fetch(buildUrl(lat2, lon2)),
    ]);

    // 3. Check HTTP status for both
    if (!r1.ok || !r2.ok)
      throw new Error(`Server error (${r1.status}, ${r2.status})`);

    // 4. Parse JSON in parallel
    const [{ results: a }, { results: b }] = await Promise.all([
      r1.json(),
      r2.json(),
    ]);

    // 5. Extract sunrise times and convert to local locale
    const sunrise1 = toLocalTime(a.sunrise);
    const sunrise2 = toLocalTime(b.sunrise);

    results.innerHTML = `
      <p>☀️ City 1 sunrise: <strong>${sunrise1}</strong></p>
      <p>☀️ City 2 sunrise: <strong>${sunrise2}</strong></p>
    `;
  } catch (err) {
    results.innerHTML = `<p class="error">Error: ${err.message}</p>`;
  }
});
