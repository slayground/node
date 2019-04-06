const geocode = (address, callback) => {
    const geocodeURL =
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY29zbW9oZ2FtZXIiLCJhIjoiY2p1NGpjc2c5MHluczQ1cDhkMG9iaWc1ZiJ9.Ta0B5_5dACVYLMYsZdUAig';

    request({ url: geocodeURL, json: true }, (err, res) => {
        if (err) {
            callback('No connection', undefined);
        } else if (res.body.features.length === 0) {
            callback('No location', undefined);
        } else {
            const lat = res.body.features[0].center[1];
            const long = res.body.features[0].center[0];
            callback(undefined, {lat, long});
        }
    });
};

geocode('Dallas', (err, data) => {
    console.log('Error: ' + err);
    console.log('Data: ' + JSON.stringify(data));
});