const WAPI = require("weather-js"), fetch = require("node-fetch"), url = require("url");

module.exports = class WeatherAPI {
    constructor(app) {
        app.get("/weather/:location", (req, res) => {
            const query = url.parse(req.url, true).query;
            this.getInfo(req.params.location, res, query.degreeType)
        })
    }
    getInfo(location, res, DT) {
        WAPI.find({ search: location, degreeType: DT || "F"}, (err, result) => {
            if(err) return res.send(err);
            fetch(`https://api.darksky.net/forecast/1229d3bb19b634fc84fd7d273c66c606/${result[0].location.lat},${result[0].location.long}`)
            .then(res => res.json())
            .then(json => {
                result[0].advanced = json;
                res.json(result);
            });
        });
    };
};