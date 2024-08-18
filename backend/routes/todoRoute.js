const express = require('express');
const { createTask, getAllTask , deleteTask } = require('../controller/taskController');

const router = express.Router();

router.post("/create", createTask);
router.get('/getAllTask', getAllTask)
router.delete('/deleteTask/:id',deleteTask)

module.exports = router;
