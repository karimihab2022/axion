const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  students: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Student",
  },
});

module.exports = mongoose.model("Classroom", classroomSchema);
