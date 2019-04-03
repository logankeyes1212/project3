const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  // title: { type: String, required: true },
  // author: { type: String, required: true },
  // synopsis: String,
  // date: { type: Date, default: Date.now }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
