const express = require("express");
const router = express.Router();
const schoolManeger = require("../managers/entities/school/School.manager");

router.get("/", async (req, res) => await schoolManeger.getSchools(req, res));

router.get("/:id", async (req, res) => await schoolManeger.getSchool(req, res));

router.post(
  "/create",
  async (req, res) => await schoolManeger.createSchool(req, res)
);
router.put(
  "/update/:id",
  async (req, res) => await schoolManeger.updateSchool(req, res)
);
router.delete(
  "/:id",
  async (req, res) => await schoolManeger.deleteSchool(req, res)
);

module.exports = router;
