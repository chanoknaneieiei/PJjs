var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const monk = require('monk')("localhost:27017/ProjectJS");

router.get('/', function(req, res, next) {
    res.render("reportproblem");
});

router.get('/success', function(req, res, next) {
    res.render("reportproblem");
});

router.post('/success', [
    check("problem" , "กรุณาป้อนปัญหา").not().isEmpty()
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
            problem:req.body.problem
        } , function(err , data){
            if(err){
                res.send(err);
            }
            else{
                res.location('/');
                res.redirect('/');

            }
        });
    }
});

module.exports = router;