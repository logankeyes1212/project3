$(document).ready(function () {
    

    $("#leagueLeadersClick").on("click", function () {
        $.getJSON("/leaders", function (data) {

            // Get top 15-20 fantasy points leader .... [ Draft Kings/Fantasy Draft || Fan Duel/Yahoo ]
            // db.getCollection('nbaplayercombined').find({}).sort({FantasyPointsYahoo: -1}) <== This get all players in 
            // order from highest to lowest yahoo fantasy points

        })

    })

    $("#leagueSleeperClick").on("click", function () {
        $.getJSON("/sleeper", function (data) {

            // Get the top 15-20 players with the highest fantasy points increase over the past 5 games.... 
            // **** 'game 1'- 8.76 points ... 'game' 5 - 24.8 points ******
            // Need stats per game before this can be built

        })

    })

    $("#leagueTrendingClick").on("click", function () {
        $.getJSON("/trending", function (data) {

            // Get the top 15-20 players who show up the most in users "My Team" arrays
            // When User table is set we will make some dummy teams to populate this div

        })

    })













    animals.forEach(function(animal) {
    $.getJSON("/all", function(data) {
        // Call our function to generate a table body
        displayResults(data);
      });
// const dropDown = 
// $('.dropdown-trigger').dropdown();
//     switch(dropDown){
//         case leaderPG():
//         break;
//         case leaderSF():
//         break;
//         case leaderSG():
//         break;
//         case leaderPF():
//         break;
//         case leaderC():
//         break;

// }


    function leaderPG() {

        // db.getCollection('nbaplayercombined').find({"Position": "PG"}) <== This pulls just PG on Robo 3T
        // for loop to make each table row for PG


        $("#leadersPG").append(
            "<tr>" +
            "<td>" + "<p>"+ "twoPoints.val()" + "</p>"  + "</td>" +
            "<td>" + "threePoints.val()" + "</td>" +
            "<td>" + blocks.val()      + "</td>" +
            "<td>" + assist.val()      + "</td>" +
            "<td>" + rebounds.val()    + "</td>" +
            "<td>" + steals.val()      + "</td>" +
            // 2 more rows for the different fantasy scores [ Draft Kings/Fantasy Draft || Fan Duel/Yahoo ]
            "</tr>"
        )
    }
    function leaderSF() {

        // db.getCollection('nbaplayercombined').find({"Position": "SF"}) <== This pulls just SF on Robo 3T
        // for loop to make each table row for SF


        $("#leadersSF").append(
            "<tr>" +
            "<td>" + twoPoints.val()   + "</td>" +
            "<td>" + threePoints.val() + "</td>" +
            "<td>" + blocks.val()      + "</td>" +
            "<td>" + assist.val()      + "</td>" +
            "<td>" + rebounds.val()    + "</td>" +
            "<td>" + steals.val()      + "</td>" +
            // 2 more rows for the different fantasy scores [ Draft Kings/Fantasy Draft || Fan Duel/Yahoo ]
            "</tr>"
        )
    }
    function leaderSG() {

        // db.getCollection('nbaplayercombined').find({"Position": "SG"}) <== This pulls just SG on Robo 3T
        // for loop to make each table row for SG

        $("#leadersSG").append(
            "<tr>" +
            "<td>" + twoPoints.val() + "</td>" +
            "<td>" + threePoints.val() + "</td>" +
            "<td>" + blocks.val() + "</td>" +
            "<td>" + assist.val() + "</td>" +
            "<td>" + rebounds.val() + "</td>" +
            "<td>" + steals.val() + "</td>" +
            // 2 more rows for the different fantasy scores [ Draft Kings/Fantasy Draft || Fan Duel/Yahoo ]
            "</tr>"
        )
    }
    function leaderPF() {

        // db.getCollection('nbaplayercombined').find({"Position": "PF"}) <== This pulls just PF on Robo 3T
        // for loop to make each table row for PF

        $("#leadersPF").append(
            "<tr>" +
            "<td>" + twoPoints.val() + "</td>" +
            "<td>" + threePoints.val() + "</td>" +
            "<td>" + blocks.val() + "</td>" +
            "<td>" + assist.val() + "</td>" +
            "<td>" + rebounds.val() + "</td>" +
            "<td>" + steals.val() + "</td>" +
            // 2 more rows for the different fantasy scores [ Draft Kings/Fantasy Draft || Fan Duel/Yahoo ]
            "</tr>"
        )
    }
    
    function leaderC() {

        // db.getCollection('nbaplayercombined').find({"Position": "C"}) <== This pulls just C on Robo 3T
        // for loop to make each table row for C

        $("#leadersC").append(
            "<tr>" +
            "<td>" + twoPoints.val() + "</td>" +
            "<td>" + threePoints.val() + "</td>" +
            "<td>" + blocks.val() + "</td>" +
            "<td>" + assist.val() + "</td>" +
            "<td>" + rebounds.val() + "</td>" +
            "<td>" + steals.val() + "</td>" +
            // 2 more rows for the different fantasy scores [ Draft Kings/Fantasy Draft || Fan Duel/Yahoo ]
            "</tr>"
        )
    }
    })
})
