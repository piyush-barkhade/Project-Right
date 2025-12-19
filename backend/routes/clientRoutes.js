const express = require("express");
const Client = require("../models/Client");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, designation, description, image } = req.body || {};
    if (!name || !designation || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await Client.create({
      name,
      designation,
      description,
      image,
    });
    res.status(201).json(client);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
