var Forecast = require('forecast.io');
var config   = require('../../config/config.json');

var options = {
  APIKey: config.FORECAST_API_KEY
}

var forecast = new Forecast(options);

module.exports = forecast;