$(document).ready(function(){
$(function() {
    var params = {
        // Request parameters
    };
  
    $.ajax({
        url: "https://api.fantasydata.net/v3/nba/stats/JSON/AllStars/2019?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","141f00c93a10470a82ecbf9697110904");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        alert("success");
    })
    .fail(function() {
        alert("error");
    });
});
})