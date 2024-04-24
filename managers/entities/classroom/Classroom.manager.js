const Classroom = require("./classroom.mongoModel.js");

class ClassroomManager {
  constructor() {}
  async createClassroom(req, res) {
    try {
      const classroom = new Classroom({
        name: req.body.name,
        schoolId: req.body.schoolId,
      });

      const savedClassroom = await classroom.save();

      res.json(savedClassroom).status(200);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async getClassrooms(req, res) {
    try {
      const classrooms = await Classroom.find();
      res.json(classrooms);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async getClassroom(req, res) {
    const id = req.params.id;
    try {
      const classroom = await Classroom.findById(id);
      if (!classroom) {
        return res.status(404).json({ message: "classroom not found" });
      }
      res.json(classroom);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async updateClassroom(req, res) {
    const id = req.params.id;
    const updates = req.body;
    try {
      const updatedClassroom = await Classroom.findByIdAndUpdate(id, updates, {
        new: true,
      });
      if (!updatedClassroom) {
        return res.status(404).json({ message: "Classroom not found" });
      }
      res.json(updatedClassroom);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async deleteClassroom(req, res) {
    const id = req.params.id;
    try {
      const deletedClassroom = await Classroom.findByIdAndDelete(id);
      if (!deletedClassroom) {
        return res.status(404).json({ message: "Classroom not found" });
      }
      res.json({ message: "Classroom deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new ClassroomManager();
