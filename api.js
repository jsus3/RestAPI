const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get a list of nijas from the db
router.get('/ninjas', function(req, res){
    res.send({type:'GET'});
});
//add a new ninja to the db
router.get('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);

});
//update a ninja to the db
router.get('/ninjas', function(req, res){
    res.send({type:'PUT'});
});
//delete a ninja from the db
router.get('/ninjas', function(req, res){
    res.send({type:'DELETE'});
});