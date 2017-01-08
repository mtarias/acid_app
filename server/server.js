var express = require("express");
var path = require("path");
var	cookieParser = require('cookie-parser');
var	bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"../app/dist")));

app.all(function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

require('./routes')(app);

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

app.listen(port,function(){
    console.info(`Server running on http://localhost:${port} [${env}]`);
})