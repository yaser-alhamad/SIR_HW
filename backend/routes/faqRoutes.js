const express = require("express");
const Faq = require("../models/Faq");
const { booleanSearch } = require("../algorithms/BooleanModel");
const { extendedBooleanSearch } = require("../algorithms/ExtendedBooleanModel");
const { vectorSpaceSearch } = require("../algorithms/VectorModel");

const router = express.Router();

// Add FAQ
router.post("/add", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new Faq({ question, answer });
    await faq.save();
    res.json({ message: "FAQ added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search FAQs
router.get("/search", async (req, res) => {
  try {
    const { q, model } = req.query;
    const faqs = await Faq.find();
    let results = [];

    if (model === "boolean") {
      results = booleanSearch(q, faqs);
    } else if (model === "extended_boolean") {
      results = extendedBooleanSearch(q, faqs);
    } else if (model === "vector") {
      results = vectorSpaceSearch(q, faqs);
    }

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message);
  }
});

module.exports = router;
