$(document).ready(function () {
    var rankings = ["Virginia", "Villanova", "Kansas", "Xavier", "North Carolina", "Duke", "Purdue", "Cincinnati", "Michigan State", "Tennessee", "Michigan", "Texas Tech", "Auburn", "Wichita State", "Gonzaga", "Arizona", "Kentucky", "West Virginia", "Clemson", "Ohio State", "Florida", "Miami", "Houston", "TCU", "Texas A&M", "Arkansas", "Nevada", "Rhode Island", "Seton Hall", "Creighton", "Virginia Tech", "Missouri", "Butler", "Kansas State", "Providence", "Alabama", "NC State", "Florida State", "Texas", "Oklahoma", "UCLA", "St. Bonaventure", "Arizona State", "Syracuse", "San Diego State", "Loyola Chicago", "New Mexico State", "Davidson", "South Dakota State", "Murray State", "Buffalo", "UNCG", "Charleston", "Marshall", "Bucknell", "Montana", "Wright State", "Stephen F. Austin", "Lipscomb", "Georgia State", "Cal State Fullerton", "Iona", "UMBC", "Penn", "Radford", "LIU Brooklyn", "NC Central", "Texas Southern"]

    // <tr>
    //                     <th scope="row">1 Duke <span><img class="teamImg" src="../public/images/dukelogo.png"></span></th>
    //                     <th scope="row">0-0</th>
    //                     <th scope="row">0-0</th>
    //                     <th scope="row">0-0</th>
    //                     <th scope="row">N/A</th>
    //                 </tr>

    rankings.forEach(function (element) {
        var newtr = $("<tr></tr>")
        var newth = $("<th></th>")
        var rank = rankings.indexOf(element)
        rank += 1
        newth.attr("scope", "row")
        newth.text(rank + " " + element)

        var logo = $("<span></span>")
        var logoB = $("<img>")
        var realLogo = "../public/images/" + element + "logo.png"
        logoB.attr("class", "teamImg")
        logoB.attr("src", realLogo)
        logo.append(logoB)
        newth.append(logo)
        newtr.append(newth)
        for (i = 0; i < 3; i++) {
            var th = $("<th></th>")
            th.attr("scope", "row")
            th.text("0-0")
            newtr.append(th)
        }
        var na = $("<th></th>")
        na.attr("scope", "row")
        na.text("N/A")
        newtr.append(na)
        $("#rankTable").append(newtr)
    })
})