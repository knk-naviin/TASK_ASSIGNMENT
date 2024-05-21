const { default: mongoose } = require("mongoose");
const taskModel = require("../models/TaskModel");

//To create and write to Schema model where in mongo DB.... POST

const createTask = async (req, res) => {
  const { title, description } = req.body; //This is get the value as titles and desc from ui (Frontend)...

  try {
    const task = await taskModel.create({ title, description }); //This pass two arguments such as title and desc.
    res.status(200).json(task); //sucess code:200
  } catch (e) {
    res.status(400).json({ error: e.message }); //failure code:400
  }
};

//to GET all ddata from database

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({}); //this get all data from database
    res.status(200).json(tasks);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//to GET single task using (_Id)

const getSingleTask = async (req, res) => {
  const { id } = req.params; //to take _id from data set
  if (!mongoose.Types.ObjectId.isValid(id)) {
    //to check the id is vaild or not !
    res.status(404).json({ error: "Task not FOUND!" }); //creating custom error message
  }
  try {
    const singleTask = await taskModel.findById(id); //same as get data by id where we have passed
    res.status(200).json(singleTask);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//PATCH - update data by id

const updateTask = async (req, res) => {
  const { id } = req.params; //to take _id from data set
  if (!mongoose.Types.ObjectId.isValid(id)) {
    //to check the id is vaild or not !
    res.status(404).json({ error: "Task not FOUND!" }); //creating custom error message
  }
  try {
    const task = await taskModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
      }
    );
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//DELETE the Data by id

const delTask = async (req, res) => {
  const { id } = req.params; //to take _id from data set
  if (!mongoose.Types.ObjectId.isValid(id)) {
    //to check the id is vaild or not !
    res.status(404).json({ error: "Task not FOUND!" }); //creating custom error message
  }

  try {
    const task = await taskModel.findByIdAndDelete(id);
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//export these task

module.exports = { createTask, getTasks, getSingleTask, updateTask, delTask };
