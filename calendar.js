google.charts.load("current", {packages:["calendar"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var dataTable = new google.visualization.DataTable();
     dataTable.addColumn({ type: 'date', id: 'Date' });
     dataTable.addColumn({ type: 'number', id: 'Log' });
     dataTable.addRows([
        [ new Date(2016, 3, 13), 3 ],
        [ new Date(2016, 3, 14), 2 ],
        [ new Date(2016, 3, 15), 4 ],
        [ new Date(2016, 3, 16), 8 ],
        [ new Date(2016, 3, 17), 9 ],
        [ new Date(2016, 4, 4), 7 ],
        [ new Date(2016, 4, 5), 5 ],
        [ new Date(2016, 4, 10), 3 ]
      ]);

    var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

    var options = {
      title: "Log Test",
      height: 350,
    };

    chart.draw(dataTable, options);
}
