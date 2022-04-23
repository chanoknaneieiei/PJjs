var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('monk')("localhost:27017/Dormitory");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', [
  check("firstlastname", "กรุณาใส่ชื่อ").not().isEmpty(),
  check("stid", "กรุณาใส่รหัสนักศึกษา").not().isEmpty(),
  check("pid", "กรุณาใส่เลขบัตรประชาชน").not().isEmpty(),
  check("pnum", "กรุณาใส่เบอร์โทร").not().isEmpty()
], function(req, res, next) {
  const result = validationResult(req);
  var errors = result.errors;
    if (!result.isEmpty()) {
      res.render('register',{errors:errors});
    }else{
      var ct = db.get('members');
      ct.findOne({user:req.body.stid}, 'user').then((doc) => {
        console.log(doc)
        if(doc == null){
          console.log("Not Find");
          ct.insert({
            name:req.body.firstlastname,
            user:req.body.stid,
            pwd:req.body.pid,
            pnum:req.body.pnum
        });
          res.location('/');
          res.redirect('/');
      } else if((req.body.stid == doc.user)){
          console.log("Find");
          res.location('/register');
          res.redirect('/register');
        }
      });
    }
});

module.exports = router;