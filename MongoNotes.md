table 1
active players

playerID                    (this is an INT that is a unique ID)
playerNameYahoo             (what yahoo has the players name as STRING)
playerNameFanduel           (what fan duel has the players name as STRING)
playerNameDraftKing         (what draft king has the players name as STRING)
Team                        (name of the team abriviated STRING)
JerseyNumber                (player jersey number INT)
ImageURL                    (image of player as URL STRING)
Experience                  (how many years they have played INT)
Position                    (position player plays as STRING)


table 2
active player stats by year


2019                        (all relavant stats for player in 2019)
2018                        (all relavant stats for player in 2018)
2017                        (all relavant stats for player in 2017)



        inside each year (2019 as example)

        FantasyPointsYahoo      (points earned for Yahoo fantasy INT)
        FantasyPointsFanduel    (points earned for FanDuel fantasy INT)
        FantasyPointsDraftKing  (points earned for Draft Kings fantasy INT)
        Points                  (points earned INT)
        Rebounds                (rebounds earned INT)
        Block                   (blocks earned INT)
        Steals                  (steals earned INT)
        Assists                 (assists earned INT)
        Gametime                (Gametime played INT)

table 3
user info tablee

UserName
UserPass
UserID
User team (an array of playerID)
