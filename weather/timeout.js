// synch: one line runs after another

console.log('Starting')

setTimeout(() => {
    console.log('1 Timeout')
}, 1000)

setTimeout(() => {
    console.log('2 Timeout')
}, 2000)

setTimeout(() => {
    console.log("0 timeout")
}, 0)

console.log('Stopping')