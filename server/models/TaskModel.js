const mongoose = require('mongoose');

//import schema from mongoose

const Schema =  mongoose.Schema;

const Task_schema = new Schema({
        title: {
            type: String,
            require:true //This is enable (*) mandatory field
        },
        description:{
            type:String,
            require:true
        }
    }, //if we add timestamp we want to give out of schema
    {
        timestamps:true //this show current date & time after creating or updating
    }
);

//After creating " SCHEMA " we want to create the model for that....

module.exports = mongoose.model("Tasks" , Task_schema);