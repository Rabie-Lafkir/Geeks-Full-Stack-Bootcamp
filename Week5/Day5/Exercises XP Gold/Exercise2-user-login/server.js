import express     from "express";
import bcrypt      from "bcrypt";
import jwt         from "jsonwebtoken";

const app   = express();
const PORT  = 5000;
const users = [];                 // { id, username, hash, role }
const JWT_SECRET = "02ad78f943f72597275ea877ba13c47b" // it should be in .env, but I put it here because it's just an exercise
app.use(express.json());

/* ---------- HELPERS ---------- */
const genToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    req.user    = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
};

/* ---------- ROUTES ---------- */
app.post("/api/register", async (req, res) => {
  const { username, password, role = "user" } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Username & password required" });

  const exists = users.find((u) => u.username === username);
  if (exists) return res.status(409).json({ error: "User already exists" });

  const hash = await bcrypt.hash(password, 12);
  users.push({ id: users.length + 1, username, hash, role });
  res.status(201).json({ message: "Registered successfully" });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.hash);
  if (!ok)  return res.status(400).json({ error: "Invalid credentials" });

  const token = genToken({ id: user.id, role: user.role });
  res.json({ token });
});

app.get("/api/profile", auth, (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  res.json({ id: user.id, username: user.username, role: user.role });
});

/* ---------- BONUS: role-guard ---------- */
const adminOnly = (req, res, next) =>
  req.user.role === "admin" ? next() : res.sendStatus(403);

/* Example protected admin route */
app.get("/api/admin/dashboard", auth, adminOnly, (_, res) =>
  res.json({ secret: "only admins see this" })
);

app.listen(PORT, () =>
  console.log(`User-login API running on http://localhost:${PORT}`)
);
