const express = require("express");
const router = express.Router();
const classroomManeger = require("../managers/entities/classroom/Classroom.manager");
router.get(
  "/",
  async (req, res) => await classroomManeger.getClassrooms(req, res)
);
router.get(
  "/:id",
  async (req, res) => await classroomManeger.getClassroom(req, res)
);
router.post(
  "/create",
  async (req, res) => await classroomManeger.createClassroom(req, res)
);
router.put(
  "/update/:id",
  async (req, res) => await classroomManeger.updateClassroom(req, res)
);
router.delete(
  "/:id",
  async (req, res) => await classroomManeger.deleteClassroom(req, res)
);

module.exports = router;
