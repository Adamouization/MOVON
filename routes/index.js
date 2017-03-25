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

/* GET login page */
router.get('/login', function(req, res, next) {
    res.render('user/login', { title: 'Login' });
});

/* GET register page */
router.get('/register', function(req, res, next) {
    res.render('user/register', { title: 'Register' });
});

module.exports = router;
