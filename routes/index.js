var express = require('express');
var router = express.Router();
require('dotenv').config();
const { check, validationResult } = require('express-validator');
const db = require('monk')(process.env.mongo_url || "localhost:27017/admin");

/* login page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', [
  check("user", "Please input your user").not().isEmpty(),
  check("pwd", "Please input your password").not().isEmpty(),
], function(req, res, next) {
  const result = validationResult(req);
  var errors = result.errors;
  if (!result.isEmpty()) {
    res.render('index',{errors:errors});
  }else{
    var ct = db.get('members');
    ct.find({$and:[{user:req.body.user}, {pwd:req.body.pwd}]}).then((doc) => {
      //console.log(doc1.length)
      if((req.body.user == "admin")&&(req.body.pwd == "admin")){
        console.log("Admin")
        res.location('/roomAdmin');
        res.redirect('/roomAdmin');
      }
      else if(doc.length == 0){
        console.log("Not Find")
        res.location('/');
        res.redirect('/');
      }else{
        console.log("Find")
        res.location('/roomStudent');
        res.redirect('/roomStudent');
      }
    });
  }
});

module.exports = router;
