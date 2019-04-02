// require('dotenv').config()
// let keys = require("./keys.js");

// console.log(keys);
$("#find-movie").on("click", function (event) {

    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
    var params = {
        // format: JSON,
        // season: 2019,
    };
    // let keys = new data({
    //     secret: keys.data.secret
    // })
    // console.log(keys);
    // Here we grab the text from the input box
    var movie = $("#movie-input").val();

    // Here we construct our URL
    var queryURL = "https://api.fantasydata.net/v3/nba/stats/JSON/Players/SF" + $.param(params);

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view

    // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE

    // =================================================================
    console.log("Searching for: ", queryURL);
    // CODE GOES HERE
    $.ajax({
        url: queryURL,
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "141f00c93a10470a82ecbf9697110904");
        },
        method: "GET",
        data: "{body}",
        
    })      
        .done(function (data) {
            console.log(data)
        })
        .fail(function () {
            console.log("error");
        });
    // =================================================================
});