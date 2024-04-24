const School = require("./school.mongoModel.js");

class schoolManager {
  constructor() {}
  async createSchool(req, res) {
    try {
      const school = new School({
        name: req.body.name,
      });

      const savedSchool = await school.save();
      res.json(savedSchool).status(200);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async getSchools(req, res) {
    try {
      const schools = await School.find();
      res.json(schools);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async getSchool(req, res) {
    const id = req.params.id;
    try {
      const school = await School.findById(id);
      if (!school) {
        return res.status(404).json({ message: "School not found" });
      }
      res.json(school);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async updateSchool(req, res) {
    const id = req.params.id;
    const updates = req.body;
    try {
      const updatedSchool = await School.findByIdAndUpdate(id, updates, {
        new: true,
      });
      if (!updatedSchool) {
        return res.status(404).json({ message: "School not found" });
      }
      res.json(updatedSchool);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async deleteSchool(req, res) {
    const id = req.params.id;
    try {
      const deletedSchool = await School.findByIdAndDelete(id);
      if (!deletedSchool) {
        return res.status(404).json({ message: "School not found" });
      }
      res.json({ message: "School deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new schoolManager();
