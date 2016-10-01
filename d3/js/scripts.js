// set of data
var data = [4, 8, 15, 16, 23, 42];

// var chart = d3.select(".chart");
// var bar = chart.selectAll("div");
// var barUpdate = bar.data(data);
// var barEnter = barUpdate.enter().append("div");


d3.select(".chart").selectAll("div")
    .data(data).enter().append("div")
    .style("width", function(d) {
        return d * 10 + "px";
    }).text(function(d) {
        return d;
    });
