const request = require("request");

const url =
  "https://api.darksky.net/forecast/549f8a11e8b3ec14ac2bb6accf2f6f34/37.8267,-122.4233/?units=si";

request({ url: url, json: true }, (err, res) => {
  console.log(res.body.currently.temperature)
});


const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY29zbW9oZ2FtZXIiLCJhIjoiY2p1NGpjc2c5MHluczQ1cDhkMG9iaWc1ZiJ9.Ta0B5_5dACVYLMYsZdUAig";

request({ url: geocodeURL, json: true }, (err, res) => {
    const lat = res.body.features[0].center[1]
    const long = res.body.features[0].center[0]
})