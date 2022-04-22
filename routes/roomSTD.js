var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('roomSTD');
});

router.get('/floor1', function(req, res, next) {
  res.render('f1Std');
});

router.get('/floor2', function(req, res, next) {
  res.render('f2Std');
});

router.get('/floor3', function(req, res, next) {
  res.render('f3Std');
});

router.get('/floor4', function(req, res, next) {
  res.render('f4Std',);
});

router.get('/floor5', function(req, res, next) {
  res.render('f5Std');
});


module.exports = router;