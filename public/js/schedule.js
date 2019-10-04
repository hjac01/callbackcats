$(document).ready(function() {
    // var team = 
    // var team_bnt = $("mr-3");
    // $(document).on("click", getSchedule);

    $('.mr-3').each(function(team) {
        var team = $()
    });

    console.log("clicked");

    function getSchedule() {
    $.get("/api/schedule/id:", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createScheduleRow(data[i]));
        }
        renderScheduleList(rowsToAdd);
      });
    }
    function renderScheduleList(rows) {
        if (rows.length) {
            scheduleList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }
});