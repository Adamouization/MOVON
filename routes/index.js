var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Launchpad!' });
});

/* GET sports gallery page. */
router.get('/sports', function(req, res, next) {
    res.render('sports', { title: 'Sports selection' });
});

module.exports = router;
