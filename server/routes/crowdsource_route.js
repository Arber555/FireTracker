const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Crowdsource = require('../models/crowdsource');

router.post('/create', function(req, res, next){
    Crowdsource.addCrowdsource(newCrowdsource, function(err, crowdsource){
        if(err){
            res.json({success: false, msg:'Failed to create a new crowdsource!'});
        }
        else{
            res.json({success:true, msg: 'crowdsource create'});
        }
    });
});

//get crowdsource
router.get('/:id', function(req, res, next){
    Crowdsource.getCrowdsourceById(req.params.id, function(err, crowdsource){
        if(err){ throw err; }
        res.json(crowdsource);
    });
});

module.exports = router;