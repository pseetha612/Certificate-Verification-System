const express = require("express");
const mongoose = require("mongoose");

const certificateRoutes = require("./routes/certificateRoutes");

const app = express();

app.use(express.json());

// Routes
app.use("/api/certificates", certificateRoutes);

// MongoDB connect
mongoose
  .connect("mongodb://127.0.0.1:27017/certificateDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});