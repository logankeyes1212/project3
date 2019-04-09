const express = require('express');
const router = express.Router();

//player model
const Player = require('../../models/Nbaplayercombined');

// define the api routs here

// @route GET api/players
// @route GeT All players
// @access public

router.get('/',(req,res) => {
    
    Player.find();
    // .sort({FantasyPointsYahoo: -1})
    // .then(nbaplayercombined => res.json(nbaplayercombined));
    console.log(res);
});

// @route POST api/players
// @route Create an Player
// @access public

router.post('/',(req,res) => {
    const newPlayer =  new Player({
        name:req.body.name
    });
    newPlayer.save().then(player => res.json(player));
});

// @route DELETE api/players
// @route Delete an Player
// @access public

router.delete('/:id',(req,res) => {
    Player.findById(req.params.id)
    .then(Player => player.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});
module.exports= router;