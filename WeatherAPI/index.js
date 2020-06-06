const WAPI = require("weather-js"), fetch = require("node-fetch");

module.exports = class WeatherAPI {
    getInfo(location, DT) {
        WAPI.find({ search: location, degreeType: DT}, (err, res) => {
            if(err) return err;
            else return {};
        });
    };
};