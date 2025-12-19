const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, description, image } = req.body || {};
    if (!name || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const project = await Project.create({ name, description, image });
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
