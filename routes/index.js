var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
    res.render('main', { title: 'Express' });
});

router.get('/generic', function(req, res, next) {
    res.render('generic', { title: 'Express' });
});

router.get('/thailand', function(req, res, next) {
    res.render('main-thailand', { title: 'Express' });
});

router.get('/thailand-gallery', function(req, res, next) {
    res.render('thailand-gallery', { title: 'Express' });
});


module.exports = router;
