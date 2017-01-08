var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

app.listen(port,function(){
    console.info(`Server running on http://localhost:${port} [${env}]`);
})