const express = require("express");
const Mentor = require("../models/mentor");
const Student = require("../models/student");

const router = express.Router();

router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).send(student);
});

router.put("/:studentId/mentor", async (req, res) => {
  const student = await Student.findById(req.params.studentId);
  const oldMentor = await Mentor.findById(student.mentor);
  const newMentor = await Mentor.findById(req.body.mentorId);

  if (oldMentor) {
    oldMentor.students = oldMentor.students.filter(
      (s) => s.toString() !== student._id.toString()
    );
    await oldMentor.save();
  }

  newMentor.students.push(student._id);
  await newMentor.save();

  student.mentor = req.body.mentorId;
  await student.save();

  res.status(200).send(student);
});

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.status(200).send(students);
});

module.exports = router;
