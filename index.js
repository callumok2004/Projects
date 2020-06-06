const app = require("express")(),
    url = require("url"),
    config = require("./config.json"),
    WeatherAPI = require("./WeatherAPI/Index");

class API {
    constructor(config) {
        this.config = config;
        this.weather = new WeatherAPI(this);
        app.listen(config.port);
        app.get("*", (req, res) => this.get(req, res), url.parse(req.url, true).query);
    };
    get(req, res, path, query) {
        
    };
};

const API = new API(config);
module.exports = API;
