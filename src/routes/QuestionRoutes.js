const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.post("/add-question", async (req, res) => {
  try {
    const { question, category } = req.body;
    const newQuestion = new Question({ question, category });
    await newQuestion.save();
    res.status(200).json({ success: true, message: "Question added!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
