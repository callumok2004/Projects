const app = require("express")(),
    url = require("url"),
    chalk = require("chalk"),
    config = require("./config.json"),
    WeatherAPI = require("./WeatherAPI/");

class API {
    constructor(config) {
        this.config = config;
        this.weather = new WeatherAPI(this, app);
        app.listen(config.port, () => console.log(`API Started on port ${config.port}`));
    };
};

module.exports = new API(config);
