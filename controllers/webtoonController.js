const Webtoon = require("../models/webtoon.js");
const { webtoonSchema } = require("../utils/validator");
const jwt = require("jsonwebtoken");

// Get all webtoons
exports.getAllWebtoons = async (req, res) => {
  try {
    const webtoons = await Webtoon.find();
    res.json(webtoons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// Add a new webtoon
exports.addWebtoon = async (req, res) => {
  // Validate the request body using Joi schema
  const { error } = webtoonSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  try {
    const { title, description, characters } = req.body;

    const newWebtoon = new Webtoon({
      title,
      description,
      characters,
    });

    await newWebtoon.save();
    res.status(201).json(newWebtoon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// Get webtoon by ID
exports.getWebtoonById = async (req, res) => {
  try {
    const webtoon = await Webtoon.findById(req.params.id);
    if (!webtoon) {
      return res.status(404).json({ msg: "Webtoon not found" });
    }
    res.json(webtoon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// Delete webtoon by ID
exports.deleteWebtoonById = async (req, res) => {
  try {
    const webtoon = await Webtoon.findById(req.params.id);
    if (!webtoon) {
      return res.status(404).json({ msg: "Webtoon not found" });
    }

    await Webtoon.findByIdAndDelete(req.params.id);
    res.json({ msg: "Webtoon removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};
