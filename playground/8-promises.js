// Callback example
const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, [23,54,12])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})

// Promise example
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([12,34,56])
        reject("Anh sai roi")
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})