const db  = require('../models/Player');

module.exports = {
    findAll: function(req,res){
        db.Player
        .find(req.query)
        .sort({FantasyPointsYahoo: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByYahooName: function(req,res){
        db.Player
        .find({YahooName:req.params.YahooName})
        .sort({FantasyPointsYahoo: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }


}