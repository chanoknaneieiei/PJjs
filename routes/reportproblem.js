/*var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const monk = require('monk')("localhost:27017/Dormitory");

router.get('/', function(req, res, next) {
    res.render("reportproblem");
});

router.get('/success', function(req, res, next) {
    res.render("reportproblem");
});

router.post('/success', [
    check("problem" , "กรุณาป้อนปัญหา").not().isEmpty(),
    check("stdid" , "กรุณาป้อนรหัสนักศึกษา").not().isEmpty(),
    check("name" , "กรุณาป้อนชื่อ-นามสกุล").not().isEmpty(),
    check("pnum" , "กรุณาป้อนเบอร์โทร").not().isEmpty(),
    check("room" , "กรุณาป้อนเลขห้อง").not().isEmpty()
],function(req, res, next) {
    const result = validationResult(req);
    var errors = result.errors;
    if (!result.isEmpty()) {
        res.render('reportproblem' , {errors : errors});
    }
    else{
        //insert data to DB
        var collection = monk.get('problem');
        collection.insert({
            stid:req.body.stdid,
            name:req.body.name,
            pnum:req.body.pnum,
            room:req.body.room,
            problem:req.body.problem

        } , function(err , data){
            console.log(data)
            if(err){
                res.send(err);
            }
            else{
                console.log("save");
                res.location('/roomStudent');
                res.redirect('/roomStudent');

            }
        });
    }
});

module.exports = router;*/