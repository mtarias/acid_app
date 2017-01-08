module.exports= function(app) { 

    // GET request to the root URL

    app.use('/api/forecast.io', require('./api/forecast.io'));
    app.use('/api/redis', require('./api/redis'));
    app.get('/',function(req, res){
    	res.send('You are connected to Acid Labs\'s Weather Api');
    });

};