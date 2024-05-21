const express = require('express')
// to import router from EXPRESS JS
const router = express.Router()

//Then call back controller from taskcontroller

const {createTask,getTasks,getSingleTask,updateTask,delTask} = require("../controller/taskController");

// passing the argument from controller to route by POST method

router.post('/',createTask);
router.get('/',getTasks);
router.get('/:id',getSingleTask);
router.patch('/:id',updateTask);
router.delete('/:id',delTask);

//exporting module from routes

module.exports = router;