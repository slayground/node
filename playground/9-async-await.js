const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject("Number must be positive")
            }

            resolve(a+b)
        }, 1500)
    })
}

const doWork = async () => {
    const sum = await add(3, 4)
    const sum2 = await add(sum, 8)
    const sum3 = await add(sum2, 10)
    return sum3
}

doWork().then(result => {
    console.log(result)
}).catch(e => {
    console.log(e)
})