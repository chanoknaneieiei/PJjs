var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('roomAD');
});

router.get('/floor1', function(req, res, next) {
  res.render('f1Admin',{title: 'ห้องพักสำหรับผู้จัดการหอพัก'});
});

router.get('/floor2', function(req, res, next) {
  res.render('f2Admin',{title: 'ห้องพักสำหรับผู้จัดการหอพัก'});
});

router.get('/floor3', function(req, res, next) {
  res.render('f3Admin',{title: 'ห้องพักสำหรับผู้จัดการหอพัก'});
});

router.get('/floor4', function(req, res, next) {
  res.render('f4Admin',{title: 'ห้องพักสำหรับผู้จัดการหอพัก'});
});

router.get('/floor5', function(req, res, next) {
  res.render('f5Admin',{title: 'ห้องพักสำหรับผู้จัดการหอพัก'});
});

module.exports = router;