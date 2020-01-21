var express = require('express');
var router = express.Router();
var People = require('./modal');

router.post('/postPeople', function(req, res, next) {

    var people = new People(req.body)
    
    people.save((err,data) => {
        if(err){
            res.send(err);
        } else {
            res.send({'asset' : data});
        }
    })
    });


router.get('/getPeople', function(req, res,){ 

    People.find({},function (err,data){    
        if (err) {
            res.json({err});
            }
            else{
            res.json(data);   
            }
        });
    });

module.exports = router;
