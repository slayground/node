const request = require('request');

const geocode = (address, callback) => {
    const geocodeURL =
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) +
        '.json?access_token=pk.eyJ1IjoiY29zbW9oZ2FtZXIiLCJhIjoiY2p1NGpjc2c5MHluczQ1cDhkMG9iaWc1ZiJ9.Ta0B5_5dACVYLMYsZdUAig';

    request({ url: geocodeURL, json: true }, (err, res) => {
        if (err) {
            callback('No connection', undefined);
        } else if (res.body.features.length === 0) {
            callback('No location', undefined);
        } else {
            const latitude = res.body.features[0].center[1];
            const longitude = res.body.features[0].center[0];
            const location = res.body.features[0].place_name
            callback(undefined, { latitude, longitude, location });
        }
    });
};

module.exports = geocode;
