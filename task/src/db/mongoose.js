const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        }
    },
    age: {
        type: Number
    }
})

//instance of an User model
const me = new User({
    name: 'John',
    email: 'jackcon@maxei.com'
})

me.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: Boolean
// })

// const laundry = new Task({
//     description: 'Thursday laundry',
//     completed: true
// })

// laundry.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })