const express = require('express');
const router = express.Router();

const { getAllTasks, updateTask, getTask, createTask, deleteTask } = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// router.get("/", getAllTasks);

module.exports = router;