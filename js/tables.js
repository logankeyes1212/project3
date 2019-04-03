$(document).ready(function () {
    // leaderPG()

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


    // function leaderPG() {
        $("#leadersPG").append(
            "<tr>" +
            "<td>" + "<p>"+ "twoPoints.val()" + "</p>"  + "</td>" +
            "<td>" + "threePoints.val()" + "</td>" +
            "<td>" + blocks.val()      + "</td>" +
            "<td>" + assist.val()      + "</td>" +
            "<td>" + rebounds.val()    + "</td>" +
            "<td>" + steals.val()      + "</td>" +
            "</tr>"
        )
    // }
    function leaderSF() {
        $("#leadersSF").append(
            "<tr>" +
            "<td>" + twoPoints.val()   + "</td>" +
            "<td>" + threePoints.val() + "</td>" +
            "<td>" + blocks.val()      + "</td>" +
            "<td>" + assist.val()      + "</td>" +
            "<td>" + rebounds.val()    + "</td>" +
            "<td>" + steals.val()      + "</td>" +
            "</tr>"
        )
    }
    function leaderSG() {
        $("#leadersSG").append(
            "<tr>" +
            "<td>" + twoPoints.val() + "</td>" +
            "<td>" + threePoints.val() + "</td>" +
            "<td>" + blocks.val() + "</td>" +
            "<td>" + assist.val() + "</td>" +
            "<td>" + rebounds.val() + "</td>" +
            "<td>" + steals.val() + "</td>" +
            "</tr>"
        )
    }
    function leaderPF() {
        $("#leadersPF").append(
            "<tr>" +
            "<td>" + twoPoints.val() + "</td>" +
            "<td>" + threePoints.val() + "</td>" +
            "<td>" + blocks.val() + "</td>" +
            "<td>" + assist.val() + "</td>" +
            "<td>" + rebounds.val() + "</td>" +
            "<td>" + steals.val() + "</td>" +
            "</tr>"
        )
    }
    
    function leaderC() {
        $("#leadersC").append(
            "<tr>" +
            "<td>" + twoPoints.val() + "</td>" +
            "<td>" + threePoints.val() + "</td>" +
            "<td>" + blocks.val() + "</td>" +
            "<td>" + assist.val() + "</td>" +
            "<td>" + rebounds.val() + "</td>" +
            "<td>" + steals.val() + "</td>" +
            "</tr>"
        )
    }
})
