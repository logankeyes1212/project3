const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

//create player schema
const PlayerSchema = new Schema({
    PlayerID : {type: Number},
    Assists : {type: Number},
    BlockedShots : {type: Number},
    FantasyPoints : {type: Number},
    FantasyPointsDraftKings : {type: Number},
    FantasyPointsFanDuel : {type: Number},
    FantasyPointsFantasyDraft : {type: Number},
    FantasyPointsYahoo : {type: Number},
    TrueShootingPercentage : {type: Number},
    Games : {type: Number},
    Minutes : {type: Number},
    ffensiveRebound : {type: Number},
    Points : {type: Number},
    Rebounds : {type: Number},
    Steals : {type: Number},
    TeamID : {type: Number},
    Team : String,
    Jersey : {type: Number},
    PositionCategory : String,
    Position : String,
    FirstName : String,
    LastName : String,
    Height : Number,
    Weight : Number,
    College : String,
    PhotoUrl : String,
    Experience : Number,
    FanDuelPlayerID : Number,
    DraftKingsPlayerID : Number,
    YahooPlayerID : Number,
    FanDuelName : String,
    DraftKingsName : String,
    YahooName : String,
    FantasyDraftName : String,
    FantasyDraftPlayerID : Number
});

module.exports= Player = mongoose.model('player',PlayerSchema);