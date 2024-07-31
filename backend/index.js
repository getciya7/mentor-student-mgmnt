const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const mentorRoutes = require("./routes/mentors");
const studentRoutes = require("./routes/students");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/mentors", mentorRoutes);
app.use("/api/students", studentRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
