require('../db/mongoose');
const Task = require('../models/task');

// Task.findByIdAndRemove('5cc622b291f134aa7cb5d9a1').then((task) => {
//     console.log(`Removed ${task}`)
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((err) => {
//     console.log(err.message)
// })

const removeTaskAndCount = async (id) => {
    const removedTask = await Task.findByIdAndRemove(id)

    if (removedTask === null) {
        throw new Error("id not found in database system")
    }

    const count = await Task.countDocuments({ completed: false })
    return [removedTask, count]
}

removeTaskAndCount('5cc61c38c3793ea8dd079fb4').then((result) => {
    console.log(result)
}).catch((err) => {
    console.log("Houston, we have a problem")
    console.log(err)
})