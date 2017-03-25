var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MOVON' });
});

/* GET sports gallery page. */
router.get('/sports', function(req, res, next) {
    res.render('sports', { title: 'Sports selection' });
});

/* GET sports gallery page. */
router.get('/terms-privacy', function(req, res, next) {
    res.render('misc/terms-privacy', { title: 'Terms & Privacy' });
});

module.exports = router;
