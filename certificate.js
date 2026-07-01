const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  certificateId: { type: String, required: true, unique: true },
  issuedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Certificate", certificateSchema);