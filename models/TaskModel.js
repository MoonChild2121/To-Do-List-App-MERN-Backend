const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    text: String
})

const TaskModel = mongoose.model("list", TaskSchema) //list is name of collection
module.exports = TaskModel