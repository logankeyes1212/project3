const express = require('express');
const router = express.Router();

// const playersController = require("../../controllers/playersController");

// // Matches with "/api/books"
// router.route("/")
//   .get(playersController.findAll);
//   // .post(playersController.create);

// // Matches with "/api/books/:id"
// // router
// //   .route("/:YahooName")
// //   .get(playersController.findByYahooName)
// //   .put(playersController.update)
// //   .delete(playersController.remove);




/* THE COMMENTED CODE BELOW WORKS BEFORE implementing CONTROLLER */

//player model
const Player = require('../../models/Player');

// define the api routs here
console.log('this one');
// @route GET api/players
// @route GeT All players
// @access public

router.get('/',(req,res) => {
    Player.find()
    .sort({FantasyPointsYahoo: -1})
    .then(players => res.json(players));
});

// search using a key
router.get('/:YahooName',(req,res) => {
    console.log(req);
    Player.find({YahooName:req.params.YahooName})
    .sort({FantasyPointsYahoo: -1})
    .then(players => res.json(players));
});



// @route POST api/players
// @route Create an Player
// @access public

router.post('/',(req,res) => {
    const newPlayer =  new Player({
        PlayerID: req.body.PlayerID,
        Assists: req.body.Assists,
        BlockedShots: req.body.BlockedShots,
        FantasyPoints: req.body.FantasyPoints,
        FantasyPointsDraftKigngs: req.body.FantasyPointsDraftKigngs,
        FantasyPointsFanDuel:req.body.FantasyPointsFanDuel,
        FantasyPointsFantasyDraft: req.body.FantasyPointsFantasyDraft,
        FantasyPointsYahoo: req.body.FantasyPointsYahoo,
        TrueShootingPercentage: req.body.TrueShootingPercentage,
        Minutes: req.body.Minutes,
        OffensiveRebounds: req.body.OffensiveRebounds,
        Points: req.body.Points,
        Rebounds: req.body.Rebounds,
        Steals: req.body.Steals,
        TeamID: req.body.TeamID,
        Team: req.body.Team,
        Jersey: req.body.Jersey,
        PositionCategory: req.body.PositionCategory,
        Position: req.body.Position,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Height: req.body.Height,
        Weight: req.body.Weight,
        College: req.body.College,
        PhotoUrl: req.body.PhotoUrl,
        Experience: req.body.Experience,
        FanDuelPlayerID: req.body.FanDuelPlayerID,
        DraftKingsPlayerID: req.body.DraftKingsPlayerID,
        YahooPlayerID: req.body.YahooPlayerID,
        FanDuelName: req.body.FanDuelName,
        DraftKingsName: req.body.DraftKingsName,
        YahooName: req.body.YahooName,
        FantasyDraftName: req.body.FantasyDraftName,
        FantasyDraftPlayerID: req.body.FantasyDraftPlayerID
    });
    newPlayer.save().then(player => res.json(player));
});

//search for top players 
router.get('/',(req,res) => {
    Player.find()
    .sort({FantasyPointsYahoo: -1})
    .then(players => res.json(players));
});


// @route DELETE api/players
// @route Delete an Player
// @access public

router.delete('/:id',(req,res) => {
    Player.findOne(req.params.id)
    .then(player => player.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});





module.exports= router;