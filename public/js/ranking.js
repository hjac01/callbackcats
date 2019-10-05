$(document).ready(function () {
    var rankings = ["Virginia", "Gonzaga", "Duke", "North Carolina", "Tennesse", "Kentucky", "Michigan State", "Houston", "Michigan", "Texas Tech", "Florida State", "Virginia State", "LSU", "Purdue", "Buffalo", "Auburn", "Nevada", "Wofford", "Wisconsin", "Kansas", "Kansas State", "Iowa State", "Maryland", "Villanova", "Marquette", "Louisville", "Cincinnati", "Mississippi State", "Utah State", "Washington", "Syracuse", "Seton Hall", "Iowa", "Oregon", "Florida", "Oklahoma", "UCF", "VCU", "Belmont", "Baylor", "Murray State", "New Mexico State", "St. Johns", "Ohio State", "Ole Miss", "Minnesota", "Arizona State", "Temple", "Saint Marys", "Liberty", "Vermont", "Northeastern", "UC Irvine", "Yale", "Northern Kentucky", "Old Dominion", "Georgia State", "Saint Louis", "Colgate", "Montana", "Abilene Chr.", "Bradley", "G-Webb", "Iona", "Prairie View", "F. Dickinson", "North Dakota State", "NC Central"]

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
        newth.text(rank + ". " + element)
        var thename = element.replace(/\s/g, '')
        thename.toLowerCase()
        var logo = $("<span></span>")
        var logoB = $("<img>")
        var realLogo = "/images/" + thename + "logo.png"

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