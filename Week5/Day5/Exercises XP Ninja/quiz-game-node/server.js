import express from "express";
import path    from "path";
import cors    from "cors";
import { fileURLToPath } from "url";

const app  = express();
const PORT = 5000;

// ——— static frontend ———
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// ——— in-memory questions ———
const questions = [
  {
    id: 1,
    text: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correctIndex: 1
  },
  {
    id: 2,
    text: "What does HTTP stand for?",
    answers: [
      "HyperText Transfer Protocol",
      "Home Tool Transfer Protocol",
      "Hyper Transfer Text Program",
      "Hyperloop Transfer Protocol"
    ],
    correctIndex: 0
  },
  {
    id: 3,
    text: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correctIndex: 3
  }
];

// ——— API route ———
app.get("/api/questions", (_, res) => res.json(questions));

// ——— SPA fallback (optional) ———
app.get("*", (_, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, () =>
  console.log(`Quiz game running on http://localhost:${PORT}`)
);
