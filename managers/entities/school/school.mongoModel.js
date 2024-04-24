const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  classrooms: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Classroom",
  },
});

module.exports = mongoose.model("School", schoolSchema);
