var express = require('express');
var router = express.Router();

var date = new Date();

var day = date.getDay();
var dayNumber = date.getDate();
var monthNumber = date.getMonth();

var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var object = {
    weekdays: []
}
var days = [];

for(var i=0; i<5; i++){
    days[i] = dayArray[day] + ', ' + dayNumber + ' of ' + monthArray[monthNumber];
    day++;
    dayNumber++;
}
/* GET home page. */
router.get('/basketball', function(req, res) {
    res.render('booking-basketball', { sport: req.params.sport});

});

router.get('/football', function(req, res) {
    res.render('booking-football', { sport: req.params.sport});

});

router.get('/tennis', function(req, res) {
    res.render('booking-tennis', { sport: req.params.sport});
});

router.get('/badmington', function(req, res) {
    res.render('booking-badmington', { sport: req.params.sport});

});
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Launchpad!' });
});

module.exports = router;
