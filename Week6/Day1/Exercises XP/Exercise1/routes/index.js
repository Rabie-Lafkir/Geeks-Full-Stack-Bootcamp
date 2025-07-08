import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send('Welcome to the Home Page');
});

router.get("/about", (req, res) => {
  res.send('Welcome to the About Page');
});

export default router;