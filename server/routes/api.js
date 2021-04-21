const express = require("express");

const {
  createUser,
  readUser,
  readOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/user_controller");

const {
  createProject,
  readProject,
  readOneProject,
  updateProject,
  deleteProject,
} = require("../controllers/project_controller");

const router = express.Router();

router
  .post("/user/", createUser)
  .get("/user/", readUser)
  .get("/user/:id", readOneUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser)

  .post("/project/", createProject)
  .get("/project/", readProject)
  .get("/project/:id", readOneProject)
  .put("/project/:id", updateProject)
  .delete("/project/:id", deleteProject);

module.exports = router;
