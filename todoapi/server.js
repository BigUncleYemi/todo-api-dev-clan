var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./todo_model/todo_model'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./todo_routes/todo_routes');
routes(app);

app.use(function (req, res) {
    res.status(404).send({url: req.orginalUrl + ' not found'})
});

app.listen(port);

console.log('todo api server started on: ' + port);

module.exports = app;
    