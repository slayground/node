require('../db/mongoose')
const User = require('../models/user');

// User.findByIdAndUpdate('5cc61b94128b83a8c90dfd55', { age: 1 }).then((updatedUser) => {
//     console.log(updatedUser)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5cc61b94128b83a8c90dfd55', 48).then(count => {
    console.log("Count is " + count)
}).catch(err => {
    console.log(err)
})