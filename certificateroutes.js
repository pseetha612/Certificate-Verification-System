const express = require("express");
const router = express.Router();

const Certificate = require("../models/certificate");


// CREATE
router.post("/", async (req, res) => {
  try {
    const cert = new Certificate(req.body);
    const saved = await cert.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// READ ALL
router.get("/", async (req, res) => {
  try {
    const data = await Certificate.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// VERIFY (by certificateId)
router.get("/:certificateId", async (req, res) => {
  try {
    const cert = await Certificate.findOne({
      certificateId: req.params.certificateId
    });

    if (!cert) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.json(cert);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Certificate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Certificate.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;