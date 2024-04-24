const schoolRouter = require("./schoolRoutes");
const classRoomRouter = require("./classRoomRoutes");
const studentRouter = require("./studentRoutes");

module.exports = (app) => {
  app.use("/school", schoolRouter);
  app.use("/classroom", classRoomRouter);
  app.use("/student", studentRouter);
};
