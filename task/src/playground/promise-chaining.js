require('../db/mongoose')
const User = require('../models/user');

User.findByIdAndUpdate('5cc61b94128b83a8c90dfd55', { name: "jack"}).then((updatedUser) => {
    console.log(updatedUser)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})

