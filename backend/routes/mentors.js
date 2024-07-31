const express = require("express");
const Mentor = require("../models/mentor");
const Student = require("../models/student");

const router = express.Router();

router.post("/", async (req, res) => {
  const mentor = new Mentor(req.body);
  await mentor.save();
  res.status(201).send(mentor);
});

router.post("/:mentorId/students", async (req, res) => {
  const mentor = await Mentor.findById(req.params.mentorId);
  const students = await Student.find({ _id: { $in: req.body.studentIds } });
  students.forEach((student) => {
    student.mentor = mentor._id;
    student.save();
  });
  mentor.students = mentor.students.concat(req.body.studentIds);
  await mentor.save();
  res.status(200).send(mentor);
});

router.get("/", async (req, res) => {
  const mentors = await Mentor.find().populate("students");
  res.status(200).send(mentors);
});

router.get("/:mentorId", async (req, res) => {
  const mentor = await Mentor.findById(req.params.mentorId).populate(
    "students"
  );
  res.status(200).send(mentor);
});

module.exports = router;
