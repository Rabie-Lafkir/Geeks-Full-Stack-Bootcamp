import express  from "express";
import { v4 as uuid } from "uuid";

const app   = express();
const PORT  = 5000;
const todos = [];                    // { id, title, completed }

app.use(express.json());

/* ---------- CREATE ---------- */
app.post("/api/todos", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const todo = { id: uuid(), title, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
});

/* ---------- READ ---------- */
app.get("/api/todos",    (_, res)      => res.json(todos));
app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  todo ? res.json(todo) : res.status(404).json({ error: "Not found" });
});

/* ---------- UPDATE ---------- */
app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ error: "Not found" });

  const { title, completed } = req.body;
  if (title !== undefined)     todo.title     = title;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});

/* ---------- DELETE ---------- */
app.delete("/api/todos/:id", (req, res) => {
  const idx = todos.findIndex((t) => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });

  todos.splice(idx, 1);
  res.sendStatus(204);
});

app.listen(PORT, () =>
  console.log(`Todo API running on http://localhost:${PORT}`)
);
