const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log("Please provide an address");
    return
}

geocode(address, (err, geocodeData) => {
    if (err) {
        return console.log(err)
    }
    forecast(geocodeData.lat, geocodeData.long, (err, forecastData) => {
        if (err) {
            return console.log(err)
        }

        console.log(geocodeData.location)
        console.log(forecastData)
    })
});

// Weather

// const url =
//     'https://api.darksky.net/forecast/549f8a11e8b3ec14ac2bb6accf2f6f34/37.8267,-122.4233/?units=si';

// request({ url: url, json: true }, (err, res) => {
//     if (err) {
//         console.log('Unable to connect to server.');
//     } else if (res.body.error) {
//         console.log(res.body.error);
//     } else {
//         console.log(res.body.currently.temperature);
//     }
// });

// Geocoding

// const geocodeURL =
//     'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY29zbW9oZ2FtZXIiLCJhIjoiY2p1NGpjc2c5MHluczQ1cDhkMG9iaWc1ZiJ9.Ta0B5_5dACVYLMYsZdUAig';

// request({ url: geocodeURL, json: true }, (err, res) => {
//     if (err) {
//         console.log(err);
//     } else if (res.body.features.length === 0) {
//         console.log("No location found.");
//     } else {
//         const lat = res.body.features[0].center[1];
//         const long = res.body.features[0].center[0];
//         console.log(lat, long)
//     }
// });
