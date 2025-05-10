import express from "express";
import cors from "cors";
import { generateQuizQuestions } from "./gemini.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/generate-quiz", async (req, res) => {
  try {
    const { topic, numQuestions } = req.body;
    const questions = await generateQuizQuestions(topic, numQuestions);
    res.json({ questions });
  } catch (error) {
    console.error("Error generating quiz:", error);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
