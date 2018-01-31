var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).render('home');
    res.status(400,404,500).render('error');
});

router.get('/main', function(req, res, next) {
    res.status(200).render('main');
    res.status(400,404,500).render('error');
});

router.get('/generic', function(req, res, next) {
    res.status(200).render('generic');
    res.status(400,404,500).render('error');
});

router.get('/thailand', function(req, res, next) {
    res.status(200).render('main-thailand');
    res.status(400,404,500).render('error');
});

router.get('/gallery-thailand', function(req, res, next) {
    res.status(200).render('gallery-thailand');
    res.status(400,404,500).render('error');
});

module.exports = router;
