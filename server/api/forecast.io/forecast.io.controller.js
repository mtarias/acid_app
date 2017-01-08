var request = require('request');
var forecast = require('./forecast.io.config');
var config = require('../../config/config.json');

exports.get_weather_city_info = function(req,res){

    var latitude = req.body.latitude;
    var longitude = req.body.longitude;

    // var options = {
    //     exclude: 'minutely,flags,alerts',
    //     units: 'si'
    // };
    
    // forecast.get(latitude, longitude, options, function (err, result, data) {
    //     if (err){
    //         res.status(500).send(err);
    //     }
    //     console.log('res: ' + result);
    //     res.status(200).send(result);
    // });

    var options = '?units=si&exclude=minutely';
    var forecast_key = config.FORECAST_API_KEY;

    var forecast_api_url = 'https://api.darksky.net/forecast/';
    var request_call = forecast_api_url + forecast_key + '/' +
                latitude.toString() + ',' + longitude.toString() + options;

    console.log(request_call)

    request({
        uri: request_call,
        method: "GET"
    }, function(error, response, body) {
        console.log(body)
        if(body!=null){
            var data = JSON.parse(body);
            res.status(200).json(data)
        }
        else{
            res.status(500).send(error);
        }
    });
}