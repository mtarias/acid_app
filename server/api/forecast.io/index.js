var express        = require('express');
var	router         = express.Router();

var	forecast_controller = require('./forecast.io.controller');

// Get weather info by forecast io
router.post ('/get_weather_city_info', forecast_controller.get_weather_city_info);

module.exports = router;