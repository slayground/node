const request = require('request');

// vitamin is a callback function that
// CAN be named anything as long as consistent
// a.k.a anonymous function

const forecast = (long, lat, vitamin) => {
    const url =
        'https://api.darksky.net/forecast/549f8a11e8b3ec14ac2bb6accf2f6f34/' + long + ',' + lat + '/?units=si';

    request({ url: url, json: true }, (err, res) => {
        if (err) {
            vitamin('No connection', undefined);
        } else if (res.body.err) {
            vitamin('Wrong data', undefined);
        } else {
            const temp = res.body.currently.temperature;
            vitamin(undefined, temp);
        }
    });
};

module.exports = forecast;
