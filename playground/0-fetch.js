// CANT FETCH INSIDE BACKEND NODE

console.log('Client side js fetching')

fetch('http://puzzle.mead.io/puzzle').then((res) => {
    res.json().then((data) => {
        console.log(data)
    })
})