const express = require('express');
require('./db/mongoose')
const User = require('./models/user');
const Task = require('./models/task')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

app.post("/users", async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

    // Old way with promise and arrow syntax
    // user.save().then(() => {
    //     res.status(201)
    //     res.send(user)
    // }).catch((err) => {
    //     res.status(400)
    //     res.send(err)
    // })
})

app.get("/users", (req, res) => {
    User.find({}).then((users) => {
        res.status(200)
        res.send(users)
    }).catch((err) => {
        res.status(500)
        res.send(err)
    })
})

app.get("/users/:id", (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.status(200)
        res.send(user)
    }).catch((err) => {
        res.status(500)
        res.send(err)
    })
})

app.post("/tasks", (req, res) => {
    const task = new Task(req.body)
    
    task.save().then(() => {
        res.status(201)
        res.send(task)
    }).catch((err) => {
        res.status(400)
        res.send(err)
    })
})

app.get("/tasks", (req, res) => {
    Task.find({}).then((tasks) => {
        res.status(200)
        res.send(tasks)
    }).catch((err) => {
        res.status(500)
        res.send(err)
    })
})

app.get("/tasks/:id", (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.status(200)
        res.send(task)
    }).catch((err) => {
        res.status(500)
        res.send(err)
    })
})

app.listen(port, () => {
    console.log("Server up on " + port)
})