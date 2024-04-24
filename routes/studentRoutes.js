const express = require("express");
const router = express.Router();
const studentManeger = require("../managers/entities/student/Student.manager");
router.get("/", async (req, res) => await studentManeger.getStudents(req, res));
router.get(
  "/:id",
  async (req, res) => await studentManeger.getStudent(req, res)
);
router.post(
  "/create",
  async (req, res) => await studentManeger.createStudent(req, res)
);
router.put(
  "/update/:id",
  async (req, res) => await studentManeger.updateStudent(req, res)
);
router.delete(
  "/:id",
  async (req, res) => await studentManeger.deleteStudent(req, res)
);

module.exports = router;
