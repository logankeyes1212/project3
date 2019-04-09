import axios from "axios";

export default {
  // Gets all players
  getPlayers: function() {
    return axios.get("/api/players");
  },
  // Gets the player with the given YahooName
  getPlayer: function(YahooName) {
    return axios.get("/api/players/" + YahooName);
  },
  // Deletes the book with the given YahooName
  deletePlayer: function(YahooName) {
    return axios.delete("/api/players/" + YahooName);
  },
  // Saves a Player to the database
  savePlayer: function(playerData) {
    return axios.post("/api/players", playerData);
  }
};
