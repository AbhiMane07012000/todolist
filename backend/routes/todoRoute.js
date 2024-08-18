const express = require('express');
const { createTask, getAllTask } = require('../controller/taskController');

const router = express.Router();

router.post("/create", createTask);
router.get('/getAllTask', getAllTask)

module.exports = router;
