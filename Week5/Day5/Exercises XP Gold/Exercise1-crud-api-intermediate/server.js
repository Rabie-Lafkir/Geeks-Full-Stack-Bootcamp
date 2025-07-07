import express from "express";
import axios   from "axios";

const app  = express();
const URL  = "https://jsonplaceholder.typicode.com/posts";
app.use(express.json());

/* ---------- READ ---------- */
app.get("/api/posts", async (_, res) => {
  try {
    const { data } = await axios.get(URL);
    res.json(data);
  } catch (err) {
    res.status(502).json({ error: "Failed to fetch posts" });
  }
});

app.get("/api/posts/:id", async (req, res) => {
  try {
    const { data } = await axios.get(`${URL}/${req.params.id}`);
    res.json(data);
  } catch {
    res.status(404).json({ error: "Post not found" });
  }
});

/* ---------- CREATE ---------- */
app.post("/api/posts", async (req, res) => {
  try {
    const { data } = await axios.post(URL, req.body);
    res.status(201).json(data);
  } catch {
    res.status(400).json({ error: "Could not create post" });
  }
});

/* ---------- UPDATE ---------- */
app.put("/api/posts/:id", async (req, res) => {
  try {
    const { data } = await axios.put(`${URL}/${req.params.id}`, req.body);
    res.json(data);
  } catch {
    res.status(400).json({ error: "Update failed" });
  }
});

/* ---------- DELETE ---------- */
app.delete("/api/posts/:id", async (req, res) => {
  try {
    await axios.delete(`${URL}/${req.params.id}`);
    res.sendStatus(204);
  } catch {
    res.status(404).json({ error: "Delete failed" });
  }
});

app.listen(5000, () =>
  console.log("CRUD proxy API running on http://localhost:5000")
);
