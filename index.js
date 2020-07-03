const app = require("express")(),
    config = require("./config.json"),
    WeatherAPI = require("./WeatherAPI/");

class API {
    constructor(config) {
        this.config = config;
        this.weather = new WeatherAPI(app);
        app.
        listen(config.port, () => console.log(`API Started on port ${config.port}`));
    };
};

module.exports = new API(config);

//GITHUB+DISCORD AUTO RESET THIS TOKEN THANKS // NTQ4MTkzODYxMDk3MjI2MjQz.Xm5-Mg.XaLwVCrV__-TD2qFQTdum9-Dm-4
