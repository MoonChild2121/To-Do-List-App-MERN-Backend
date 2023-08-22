const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TaskModel = require('./models/TaskModel')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/todolist")

app.post('/addtask', (req,res)=> {
    TaskModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/', (req,res) => {
    TaskModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deletetask/:id', (req, res)=> {
    const id = req.params.id;
    TaskModel.findByIdAndDelete(id)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/gettask/:id', (req,res)=> {
    const id = req.params.id;
    TaskModel.findById(id)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updatetask/:id', (req, res)=> {
    const id = req.params.id;
    TaskModel.findByIdAndUpdate(id, 
        {text: req.body.text}
        )
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, ()=> {
    console.log("Server is running")
})