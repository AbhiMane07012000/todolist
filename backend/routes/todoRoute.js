const express = require('express');
const { createTask, getAllTask , deleteTask, updateTask } = require('../controller/taskController');

const router = express.Router();

router.post("/create", createTask);
router.get('/getAllTask', getAllTask)
router.delete('/deleteTask/:id',deleteTask)
router.put('/updateTask/:id', updateTask)

module.exports = router;
