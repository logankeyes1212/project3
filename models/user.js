const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
 user: { type: String, required: true },
 password: { type: String, required: true },
 email: { type: String, required: true },
 myteamarray: Array,
});

const User = mongoose.model("User", userSchema);

module.exports = User;