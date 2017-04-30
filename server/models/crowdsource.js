const mongoose = require('mongoose');
const config = require('../config/database');

const CrowdsourceSchema = mongoose.Schema({

});

const Crowdsource = module.exports = mongoose.model('Crowdsource', CrowdsourceSchema);

module.exports.getCrowdsourceById = function(id, callback){
    Crowdsource.findById(id, callback);
}

module.exports.addCrowdsource = function(newCrowdsource, callback){
    newCrowdsource.save(callback);
}

module.exports.updateCrowdsource = function(id, updateCrowdsource, callback){
    Crowdsource.update({_id: mongoose.Types.ObjectId(id)}, updateCrowdsource, callback);
}

module.exports.removeCrowdsource = function(id, callback){
    Crowdsource.remove({_id: mongoose.Types.ObjectId(id)}, callback);
}