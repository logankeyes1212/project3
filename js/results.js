$(document).ready(function () {

    // dummy data
    //==========================
    $("#leagueLeadersDiv").append(
        '<h4>League Div</h4>' +
        '</br></br>' +
        '<p>This area should have a drop down to choose a postition (C, PF, SG, PG, SF) and then generate the top 20 players at the selected postition</p>'
    )
    //===========================
    //leader container
    $("#leagueLeadersClick").on("click", function () {
        $("#leagueLeadersDiv").empty()
        $("#leagueTreadingDiv").empty()
        $("#leagueSleeperDiv").empty()

        $("#leagueLeadersDiv").append(
            '<h4>League Div</h4>' +
            '</br></br>' +
            '<p>This area should have a drop down to choose a postition (C, PF, SG, PG, SF) and then generate the top 20 players at the selected postition</p>'
        )
    })
    // sleeper container
    $("#leagueSleeperClick").on("click", function () {
        $("#leagueSleeperDiv").empty()
        $("#leagueLeadersDiv").empty()
        $("#leagueTreadingDiv").empty()
        $("#leagueSleeperDiv").append(
            '<h4>League Div</h4>' +
            '</br></br>' +
            '<p>(C, PF, SG, PG, SF) and then generate the top 20 players at the selected postition</p>'
        )
    })
    //treading container
    $("#leagueTreadingClick").on("click", function () {
        $("#leagueTreadingDiv").empty()
        $("#leagueLeadersDiv").empty()
        $("#leagueSleeperDiv").empty()
        $("#leagueTreadingDiv").append(
            '<h4>League Div</h4>' +
            '</br></br>' +
            '<p>postition</p>'
        )
    })
})