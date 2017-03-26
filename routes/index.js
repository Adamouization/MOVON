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

/* GET terms & privacy. */
router.get('/terms-privacy', function(req, res, next) {
    res.render('misc/terms-privacy', { title: 'Terms & Privacy' });
});

/* GET team page. */
router.get('/team', function(req, res, next) {
    res.render('misc/team', { title: 'MOVON Team' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('misc/contact', { title: 'Contact' });
});

module.exports = router;
