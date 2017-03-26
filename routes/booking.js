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
/* GET sport page. */
router.get('/:sport', function(req, res) {
    res.render('booking/booking-basketball', { sport: req.params.sport});

});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Launchpad!' });
});

module.exports = router;
