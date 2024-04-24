const Student = require("./student.mongoModel.js");

class studentManager {
  constructor() {}
  async createStudent(req, res) {
    try {
      const student = new Student({
        name: req.body.name,
        classroomId: req.body.classroomId,
      });

      const savedStudent = await student.save();
      res.json(savedStudent).status(200);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async getStudents(req, res) {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async getStudent(req, res) {
    const id = req.params.id;
    try {
      const student = await Student.findById(id);
      if (!student) {
        return res.status(404).json({ message: "student not found" });
      }
      res.json(student);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async updateStudent(req, res) {
    const id = req.params.id;
    const updates = req.body;
    try {
      const updatedStudent = await Student.findByIdAndUpdate(id, updates, {
        new: true,
      });
      if (!updatedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json(updatedStudent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async deleteStudent(req, res) {
    const id = req.params.id;
    try {
      const deletedStudent = await Student.findByIdAndDelete(id);
      if (!deletedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json({ message: "Student deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new studentManager();
