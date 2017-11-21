var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/main', function(req, res, next) {
    res.render('main');
});

router.get('/generic', function(req, res, next) {
    res.render('generic');
});

router.get('/thailand', function(req, res, next) {
    res.render('main-thailand');
});

router.get('/thailand-gallery', function(req, res, next) {
    res.render('thailand-gallery');
});

module.exports = router;
