// Promise -- pending
// resolve(abc) - fulfilled
// reject(xyz) - denied

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
        reject("Em sai roi")
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log("Routed to .then")
    console.log(result)
}).catch((error) => {
    console.log("Routed to .catch")
    console.log(error)
})

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}


// Callback hell
// add(4, 5).then((sum) => {
//     console.log(sum)

//     add(sum, 3).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

// Promise chaining
add(2, 4).then((sum) => {
    console.log(sum)
    return add(sum, 1)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})