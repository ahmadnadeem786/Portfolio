const express = require("express");
const contact = require("../models/contact");
const router = express.Router();


// POST route to save contact form data
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message saved!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

module.exports = router;
