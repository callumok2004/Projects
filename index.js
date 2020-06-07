const app = require("express")(),
    config = require("./config.json"),
    WeatherAPI = require("./WeatherAPI/");

class API {
    constructor(config) {
        this.config = config;
        this.weather = new WeatherAPI(app);
        app.listen(config.port, () => console.log(`API Started on port ${config.port}`));
    };
};

module.exports = new API(config);
