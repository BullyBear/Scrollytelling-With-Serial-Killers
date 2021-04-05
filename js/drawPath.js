/////////////////////////////////////////////////////////////////////////  drawPath()




 // // // Active
 // window.addEventListener('focus', drawPath);

 // // // Inactive
 // window.addEventListener('blur', resetVizPath);





const resetVizPath = (direction) => {

    if (direction === "up") {

      console.log('resetVizPath');


      // d3.selectAll("#introSound").remove();
      d3.selectAll("#introSoundTwo").remove();


      //NEW
      d3.selectAll(".s").style("opacity", 0)
      d3.selectAll(".f").style("opacity", 0)
      d3.selectAll(".u").style("opacity", 0)
      d3.selectAll(".c").style("opacity", 0)
      d3.selectAll(".o").style("opacity", 0)
      d3.selectAll(".i").style("opacity", 0)
      d3.selectAll(".l").style("opacity", 0)
      d3.selectAll(".oh").style("opacity", 0)
      d3.selectAll(".mi").style("opacity", 0)
      d3.selectAll(".sf").style("opacity", 0)
      d3.selectAll(".la").style("opacity", 0)
      d3.selectAll(".mal").style("opacity", 0)
      d3.selectAll(".fish").style("opacity", 0)
      d3.selectAll(".ridge").style("opacity", 0)
      d3.selectAll(".gein").style("opacity", 0)
      d3.selectAll(".gacy").style("opacity", 0)
      d3.selectAll(".holmes").style("opacity", 0)
      d3.selectAll(".zodiacOne").style("opacity", 0)
      d3.selectAll(".zodiacTwo").style("opacity", 0)
      d3.selectAll(".zodiacThree").style("opacity", 0)
      d3.selectAll(".sTwo").style("opacity", 0)
      d3.selectAll(".fTwo").style("opacity", 0)
      d3.selectAll(".uTwo").style("opacity", 0)
      d3.selectAll(".cTwo").style("opacity", 0)
      d3.selectAll(".oTwo").style("opacity", 0)
      d3.selectAll(".iTwo").style("opacity", 0)
      d3.selectAll(".lTwo").style("opacity", 0)
      d3.selectAll(".ohTwo").style("opacity", 0)
      d3.selectAll(".miTwo").style("opacity", 0)
      d3.selectAll(".sfTwo").style("opacity", 0)
      d3.selectAll(".laTwo").style("opacity", 0)
      d3.selectAll(".malTwo").style("opacity", 0)
      d3.selectAll(".fishTwo").style("opacity", 0)
      d3.selectAll(".ridgeTwo").style("opacity", 0)
      d3.selectAll(".geinTwo").style("opacity", 0)
      d3.selectAll(".gacyTwo").style("opacity", 0)
      d3.selectAll(".holmesTwo").style("opacity", 0)
      d3.selectAll(".zodiacOneTwo").style("opacity", 0)
      d3.selectAll(".zodiacTwoTwo").style("opacity", 0)
      d3.selectAll(".zodiacThreeTwo").style("opacity", 0)
      d3.selectAll("#bubble").style("opacity", 0)
      d3.selectAll(".bubbleRes").style("opacity", 0)
      d3.selectAll("#bubbleBarChart").style("opacity", 0)
      d3.selectAll(".barBubbleRes").style("opacity", 0)
      d3.selectAll("#bubbleTwo").style("opacity", 0)
      d3.selectAll(".bubbleResTwo").style("opacity", 0)
      d3.selectAll("#bubbleBarChartTwo").style("opacity", 0)
      d3.selectAll(".barBubbleResTwo").style("opacity", 0)

    

    // $("lineTwo").remove();
    // $("pathTwo").remove();
    // $("totalLength").remove();

    d3.selectAll(".mapRes").remove();
    d3.selectAll("#pathClip").remove();


    // d3.selectAll(".mapResThree").remove();
    // d3.selectAll("#pathClipThree").remove();

    // d3.selectAll(".mapRes").style("opacity", 0)
    // d3.selectAll("#pathClip").style("opacity", 0)
    // d3.selectAll(".mapResTwo").style("opacity", 0)
    // d3.selectAll("#pathClipTwo").style("opacity", 0)

    drawPathTwo();

}

}



const resetVizPathBottom = (direction) => {

    if (direction === "up") {

      console.log('resetVizPathBottom');

      pauseAudioTwo();

      //NEW
      d3.selectAll(".s").style("opacity", 0)
      d3.selectAll(".f").style("opacity", 0)
      d3.selectAll(".u").style("opacity", 0)
      d3.selectAll(".c").style("opacity", 0)
      d3.selectAll(".o").style("opacity", 0)
      d3.selectAll(".i").style("opacity", 0)
      d3.selectAll(".l").style("opacity", 0)
      d3.selectAll(".oh").style("opacity", 0)
      d3.selectAll(".mi").style("opacity", 0)
      d3.selectAll(".sf").style("opacity", 0)
      d3.selectAll(".la").style("opacity", 0)
      d3.selectAll(".mal").style("opacity", 0)
      d3.selectAll(".fish").style("opacity", 0)
      d3.selectAll(".ridge").style("opacity", 0)
      d3.selectAll(".gein").style("opacity", 0)
      d3.selectAll(".gacy").style("opacity", 0)
      d3.selectAll(".holmes").style("opacity", 0)
      d3.selectAll(".zodiacOne").style("opacity", 0)
      d3.selectAll(".zodiacTwo").style("opacity", 0)
      d3.selectAll(".zodiacThree").style("opacity", 0)
      d3.selectAll(".sTwo").style("opacity", 0)
      d3.selectAll(".fTwo").style("opacity", 0)
      d3.selectAll(".uTwo").style("opacity", 0)
      d3.selectAll(".cTwo").style("opacity", 0)
      d3.selectAll(".oTwo").style("opacity", 0)
      d3.selectAll(".iTwo").style("opacity", 0)
      d3.selectAll(".lTwo").style("opacity", 0)
      d3.selectAll(".ohTwo").style("opacity", 0)
      d3.selectAll(".miTwo").style("opacity", 0)
      d3.selectAll(".sfTwo").style("opacity", 0)
      d3.selectAll(".laTwo").style("opacity", 0)
      d3.selectAll(".malTwo").style("opacity", 0)
      d3.selectAll(".fishTwo").style("opacity", 0)
      d3.selectAll(".ridgeTwo").style("opacity", 0)
      d3.selectAll(".geinTwo").style("opacity", 0)
      d3.selectAll(".gacyTwo").style("opacity", 0)
      d3.selectAll(".holmesTwo").style("opacity", 0)
      d3.selectAll(".zodiacOneTwo").style("opacity", 0)
      d3.selectAll(".zodiacTwoTwo").style("opacity", 0)
      d3.selectAll(".zodiacThreeTwo").style("opacity", 0)
      d3.selectAll("#bubble").style("opacity", 0)
      d3.selectAll(".bubbleRes").style("opacity", 0)
      d3.selectAll("#bubbleBarChart").style("opacity", 0)
      d3.selectAll(".barBubbleRes").style("opacity", 0)
      d3.selectAll("#bubbleTwo").style("opacity", 0)
      d3.selectAll(".bubbleResTwo").style("opacity", 0)
      d3.selectAll("#bubbleBarChartTwo").style("opacity", 0)
      d3.selectAll(".barBubbleResTwo").style("opacity", 0)




      d3.selectAll(".sThree").style("opacity", 0)
      d3.selectAll(".fThree").style("opacity", 0)
      d3.selectAll(".uThree").style("opacity", 0)
      d3.selectAll(".cThree").style("opacity", 0)
      d3.selectAll(".oThree").style("opacity", 0)
      d3.selectAll(".iThree").style("opacity", 0)
      d3.selectAll(".lThree").style("opacity", 0)
      d3.selectAll(".ohThree").style("opacity", 0)
      d3.selectAll(".miThree").style("opacity", 0)
      d3.selectAll(".sfThree").style("opacity", 0)
      d3.selectAll(".laThree").style("opacity", 0)
      d3.selectAll(".malThree").style("opacity", 0)
      d3.selectAll(".fishThree").style("opacity", 0)
      d3.selectAll(".ridgeThree").style("opacity", 0)
      d3.selectAll(".geinThree").style("opacity", 0)
      d3.selectAll(".gacyThree").style("opacity", 0)
      d3.selectAll(".holmesThree").style("opacity", 0)
      d3.selectAll(".zodiacOneThree").style("opacity", 0)
      d3.selectAll(".zodiacTwoThree").style("opacity", 0)
      d3.selectAll(".zodiacThreeThree").style("opacity", 0)

      d3.selectAll("#bubbleThree").style("opacity", 0)
      d3.selectAll(".bubbleResThree").style("opacity", 0)

      d3.selectAll("#bubbleBarChartThree").style("opacity", 0)
      d3.selectAll(".barBubbleResThree").style("opacity", 0)

      // d3.selectAll(".mapResThree").style("opacity", 1)
      // d3.selectAll("#pathClipThree").style("opacity", 1)

      d3.selectAll(".mapResThree").style("opacity", 0)
      d3.selectAll("#pathClipThree").style("opacity", 0)



      // drawPathThree(); /////////////////////////////////////////////          ADD THIS BACK IN ????? 

}

}



// // // Maybe Here? 
// window.addEventListener('blur', resetVizPath);


// window.onload = function() {
//   drawPaths();
// }







// function drawPaths() {

//   drawPath();
//   drawPathTwo();
//   drawPathThree();

// }






function drawPath() {



var mapWidth = 750;
var mapHeight = 500;

var projection = d3
  .geo.albersUsa()
  .translate([mapWidth / 2, mapHeight / 2])
  .scale([1000]);

var path = d3
  .geo.path()
  .projection(projection);

var line = d3
  .svg
  .line()
  .interpolate("linear")
  .x(function(d) { return projection(d.geometry.coordinates)[0] })
  .y(function(d) { return projection(d.geometry.coordinates)[1] });

var svg = d3.select("#map")
  .append("svg")
  .attr("class", "mapRes")
  // .attr("viewBox", `0 0 1575 1575`)
  .attr("viewBox", `0 0 800 800`)
  .append("g") 
  // .attr("transform", "translate(" + 330+ "," + 0 + ")");
  // .attr("width", mapWidth)
  // .attr("height", mapHeight);



d3.json("../static/data/serial_killers_final/assets/data/choroplethmap.json", function(usStates) {
  svg
    // Ensure map is always inserted below path
    // .insert("g", ":first-child")
    .attr("id", "countries")
    .selectAll("path")
    // .select("path")
    .data(usStates.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "steelblue")
    .attr("id", function(country) {
      return "state-" + country.properties.GEO_ID;
    });
});






    var w = 750;
    var h = 500;

    var svgTwo = d3.select("#map")
    // var svgTwo = d3.select("#line")
      // .append("svg")
      .attr("id", "pathClip")
      // .attr("viewBox", `0 0 1575 1575`)
      // .attr("viewBox", `0 0 750 500`)
      // .attr("viewBox", `0 0 675 425`)
      .append("g")
      .attr("transform", "translate(" + 0+ "," + 0 + ")");
      // .attr("transform", "translate(" + 330+ "," + 0 + ")");
      // .attr("width", w)
      // .attr("height", h)

    // var svgTwo = d3.select("#map")
    //               .append("div")
    //                .classed("svg-container", true) 
    //                .append("svg")
    //                .attr("preserveAspectRatio", "xMinYMin meet")
    //                // .attr("viewBox", "0 0 750 500")
    //                 .attr("viewBox", "0 0 1200 800")
    //                .classed("svg-content-responsive", true)


    svgTwo=svg.append('svg'); 


    // var data = [ { "x": 50, "y": 300},  { "x": 10, "y": 210}, { "x": 60, "y": 50}, { "x": 450, "y": 150}, { "x": 470, "y": 170}, { "x": 475, "y": 190}, { "x": 575, "y": 250}, { "x": 657, "y": 175}  ];



    var data = [ { "x": 65, "y": 300},  { "x": 27, "y": 210}, { "x": 73, "y": 50}, { "x": 460, "y": 150}, { "x": 480, "y": 170}, { "x": 490, "y": 190}, { "x": 575, "y": 250}, { "x": 670, "y": 175}  ];


   
    // var x = d3.scale.linear().domain([0, 10]).range([0, 600]);
    // var y = d3.scale.linear().domain([0, 10]).range([0, 500]);
   
    var lineTwo = d3.svg.line()
      .interpolate("linear")
      //.interpolate("cardinal")
      //.interpolate("basis")
      .x(function(d) { return d.x; })
      .y(function(d) { return d.y; })
      // .x(function(d) { return d.latitude; })
      // .y(function(d) { return d.longitude; })

    var pathTwo = svgTwo.append("path")
      .attr("d", lineTwo(data))
      .attr("stroke", "red")
      .attr("stroke-width", "2")
      .attr("fill", "none");



    // var totalLength = pathTwo.node().getTotalLength();  THIS LINE REPLACES NEXT 4 LINE BLOCK

    var totalLength = 0;
    if (pathTwo.node()) {
      totalLength = pathTwo.node().getTotalLength();
    }



    pathTwo
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
        .duration(10000)
        .ease("linear")
        .attr("stroke-dashoffset", 0)



svgTwo.append("circle")
          .attr("id", "circleLA")
          .attr("cx", 65)
          .attr("cy", 300)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().duration(2000)
          .style("fill", "red")
          .style("opacity", 1);



svgTwo.append("text")
          .attr("id", "textLA")
          .attr("y", 300)
          .attr("x", 72)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Los Angeles");


svgTwo.append("circle")
          .attr("id", "circleSF")
          .attr("cx", 27)
          .attr("cy", 210)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(1000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textSF")
          .attr("y", 215)
          .attr("x", 32)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(1000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("San Francisco");

svgTwo.append("circle")
          .attr("id", "circleSeattle")
          .attr("cx", 73)
          .attr("cy", 50)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(2500).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textSeattle")
          .attr("y", 70)
          .attr("x", 70)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(2500).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Seattle");


svgTwo.append("circle")
          .attr("id", "circlePlainfield")
          .attr("cx", 460)
          .attr("cy", 150)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(7000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textPlainfield")
          .attr("y", 130)
          .attr("x", 422)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(7000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Plainfield");

svgTwo.append("circle")
          .attr("id", "circleMilwaukee")
          .attr("cx", 480)
          .attr("cy", 170)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(7500).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textMilwaukee")
          .attr("y", 172)
          .attr("x", 407)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(7500).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Milwaukee");


svgTwo.append("circle")
          .attr("id", "circleChicago")
          .attr("cx", 490)
          .attr("cy", 190)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(8000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textChicaco")
          .attr("y", 205)
          .attr("x", 447)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(8000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Chicago");



svgTwo.append("circle")
          .attr("id", "circleBrooklyn")
          // .attr("cx", 655)
          // .attr("cy", 173)
          .attr("cx", 670)
          .attr("cy", 175)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(10000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textBrooklyn")
          .attr("y", 155)
          .attr("x", 605)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(10000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Brooklyn");


}








function drawPathTwo() {



var mapWidth = 750;
var mapHeight = 500;

var projection = d3
  .geo.albersUsa()
  .translate([mapWidth / 2, mapHeight / 2])
  .scale([1000]);

var path = d3
  .geo.path()
  .projection(projection);

var line = d3
  .svg
  .line()
  .interpolate("linear")
  .x(function(d) { return projection(d.geometry.coordinates)[0] })
  .y(function(d) { return projection(d.geometry.coordinates)[1] });

var svg = d3.select("#mapTwo")
  .append("svg")
  .attr("class", "mapResTwo")
  // .attr("viewBox", `0 0 1575 1575`)
  .attr("viewBox", `0 0 800 800`)
  .append("g") 
  // .attr("transform", "translate(" + 330+ "," + 0 + ")");
  // .attr("width", mapWidth)
  // .attr("height", mapHeight);



d3.json("../static/data/serial_killers_final/assets/data/choroplethmap.json", function(usStates) {
  svg
    // Ensure map is always inserted below path
    // .insert("g", ":first-child")
    .attr("id", "countries")
    .selectAll("path")
    .data(usStates.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "steelblue")
    .attr("id", function(country) {
      return "state-" + country.properties.GEO_ID;
    });
});






    var w = 750;
    var h = 500;

    var svgTwo = d3.select("#mapTwo")
    // var svgTwo = d3.select("#line")
      // .append("svg")
      .attr("id", "pathClipTwo")
      // .attr("viewBox", `0 0 1575 1575`)
      // .attr("viewBox", `0 0 750 500`)
      // .attr("viewBox", `0 0 675 425`)
      .append("g")
      .attr("transform", "translate(" + 0+ "," + 0 + ")");
      // .attr("transform", "translate(" + 330+ "," + 0 + ")");
      // .attr("width", w)
      // .attr("height", h)

    // var svgTwo = d3.select("#map")
    //               .append("div")
    //                .classed("svg-container", true) 
    //                .append("svg")
    //                .attr("preserveAspectRatio", "xMinYMin meet")
    //                // .attr("viewBox", "0 0 750 500")
    //                 .attr("viewBox", "0 0 1200 800")
    //                .classed("svg-content-responsive", true)


    svgTwo=svg.append('svg'); 


    // var data = [ { "x": 50, "y": 300},  { "x": 10, "y": 210}, { "x": 60, "y": 50}, { "x": 450, "y": 150}, { "x": 470, "y": 170}, { "x": 475, "y": 190}, { "x": 575, "y": 250}, { "x": 657, "y": 175}  ];



    var data = [ { "x": 65, "y": 300},  { "x": 27, "y": 210}, { "x": 73, "y": 50}, { "x": 460, "y": 150}, { "x": 480, "y": 170}, { "x": 490, "y": 190}, { "x": 575, "y": 250}, { "x": 670, "y": 175}  ];


   
    // var x = d3.scale.linear().domain([0, 10]).range([0, 600]);
    // var y = d3.scale.linear().domain([0, 10]).range([0, 500]);
   
    var lineTwo = d3.svg.line()
      .interpolate("linear")
      //.interpolate("cardinal")
      //.interpolate("basis")
      .x(function(d) { return d.x; })
      .y(function(d) { return d.y; })
      // .x(function(d) { return d.latitude; })
      // .y(function(d) { return d.longitude; })

    var pathTwo = svgTwo.append("path")
      .attr("d", lineTwo(data))
      .attr("stroke", "red")
      .attr("stroke-width", "2")
      .attr("fill", "none");


    // var totalLength = pathTwo.node().getTotalLength();  THIS LINE REPLACES NEXT 4 LINE BLOCK


    var totalLength = 0;
    if (pathTwo.node()) {
      totalLength = pathTwo.node().getTotalLength();
    }


    pathTwo
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
        .duration(10000)
        .ease("linear")
        .attr("stroke-dashoffset", 0)



svgTwo.append("circle")
          .attr("id", "circleLA")
          .attr("cx", 65)
          .attr("cy", 300)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().duration(2000)
          .style("fill", "red")
          .style("opacity", 1);



svgTwo.append("text")
          .attr("id", "textLA")
          .attr("y", 300)
          .attr("x", 72)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Los Angeles");


svgTwo.append("circle")
          .attr("id", "circleSF")
          .attr("cx", 27)
          .attr("cy", 210)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(1000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textSF")
          .attr("y", 215)
          .attr("x", 32)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(1000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("San Francisco");

svgTwo.append("circle")
          .attr("id", "circleSeattle")
          .attr("cx", 73)
          .attr("cy", 50)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(2500).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textSeattle")
          .attr("y", 70)
          .attr("x", 70)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(2500).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Seattle");


svgTwo.append("circle")
          .attr("id", "circlePlainfield")
          .attr("cx", 460)
          .attr("cy", 150)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(7000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textPlainfield")
          .attr("y", 130)
          .attr("x", 422)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(7000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Plainfield");

svgTwo.append("circle")
          .attr("id", "circleMilwaukee")
          .attr("cx", 480)
          .attr("cy", 170)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(7500).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textMilwaukee")
          .attr("y", 172)
          .attr("x", 407)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(7500).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Milwaukee");


svgTwo.append("circle")
          .attr("id", "circleChicago")
          .attr("cx", 490)
          .attr("cy", 190)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(8000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textChicaco")
          .attr("y", 205)
          .attr("x", 447)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(8000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Chicago");



svgTwo.append("circle")
          .attr("id", "circleBrooklyn")
          // .attr("cx", 655)
          // .attr("cy", 173)
          .attr("cx", 670)
          .attr("cy", 175)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(10000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textBrooklyn")
          .attr("y", 155)
          .attr("x", 605)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(10000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Brooklyn");


}




function drawPathThree() {


d3.selectAll(".mapResThree").style("opacity", 0);
d3.selectAll("#pathClipThree").style("opacity", 0);


var mapWidth = 750;
var mapHeight = 500;

var projection = d3
  .geo.albersUsa()
  .translate([mapWidth / 2, mapHeight / 2])
  .scale([1000]);

var path = d3
  .geo.path()
  .projection(projection);

var line = d3
  .svg
  .line()
  .interpolate("linear")
  .x(function(d) { return projection(d.geometry.coordinates)[0] })
  .y(function(d) { return projection(d.geometry.coordinates)[1] });

var svg = d3.select("#mapThree")
  .append("svg")
  .attr("class", "mapResThree")
  // .attr("viewBox", `0 0 1575 1575`)
  .attr("viewBox", `0 0 800 800`)
  .append("g") 
  // .attr("transform", "translate(" + 330+ "," + 0 + ")");
  // .attr("width", mapWidth)
  // .attr("height", mapHeight);



d3.json("../static/data/serial_killers_final/assets/data/choroplethmap.json", function(usStates) {
  svg
    // Ensure map is always inserted below path
    // .insert("g", ":first-child")
    .attr("id", "countries")
    .selectAll("path")
    .data(usStates.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "steelblue")
    .attr("id", function(country) {
      return "state-" + country.properties.GEO_ID;
    });
});






    var w = 750;
    var h = 500;

    var svgTwo = d3.select("#mapThree")
    // var svgTwo = d3.select("#line")
      // .append("svg")
      .attr("id", "pathClipThree")
      // .attr("viewBox", `0 0 1575 1575`)
      // .attr("viewBox", `0 0 750 500`)
      // .attr("viewBox", `0 0 675 425`)
      .append("g")
      .attr("transform", "translate(" + 0+ "," + 0 + ")");
      // .attr("transform", "translate(" + 330+ "," + 0 + ")");
      // .attr("width", w)
      // .attr("height", h)

    // var svgTwo = d3.select("#map")
    //               .append("div")
    //                .classed("svg-container", true) 
    //                .append("svg")
    //                .attr("preserveAspectRatio", "xMinYMin meet")
    //                // .attr("viewBox", "0 0 750 500")
    //                 .attr("viewBox", "0 0 1200 800")
    //                .classed("svg-content-responsive", true)


    svgTwo=svg.append('svg'); 


    // var data = [ { "x": 50, "y": 300},  { "x": 10, "y": 210}, { "x": 60, "y": 50}, { "x": 450, "y": 150}, { "x": 470, "y": 170}, { "x": 475, "y": 190}, { "x": 575, "y": 250}, { "x": 657, "y": 175}  ];



    var data = [ { "x": 65, "y": 300},  { "x": 27, "y": 210}, { "x": 73, "y": 50}, { "x": 460, "y": 150}, { "x": 480, "y": 170}, { "x": 490, "y": 190}, { "x": 575, "y": 250}, { "x": 670, "y": 175}  ];


   
    // var x = d3.scale.linear().domain([0, 10]).range([0, 600]);
    // var y = d3.scale.linear().domain([0, 10]).range([0, 500]);
   
    var lineTwo = d3.svg.line()
      .interpolate("linear")
      //.interpolate("cardinal")
      //.interpolate("basis")
      .x(function(d) { return d.x; })
      .y(function(d) { return d.y; })
      // .x(function(d) { return d.latitude; })
      // .y(function(d) { return d.longitude; })

    var pathTwo = svgTwo.append("path")
      .attr("d", lineTwo(data))
      .attr("stroke", "red")
      .attr("stroke-width", "2")
      .attr("fill", "none");


    // var totalLength = pathTwo.node().getTotalLength();  THIS LINE REPLACES NEXT 4 LINE BLOCK

    var totalLength = 0;
    if (pathTwo.node()) {
      totalLength = pathTwo.node().getTotalLength();
    }


    pathTwo
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
        .duration(10000)
        .ease("linear")
        .attr("stroke-dashoffset", 0)



svgTwo.append("circle")
          .attr("id", "circleLA")
          .attr("cx", 65)
          .attr("cy", 300)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().duration(2000)
          .style("fill", "red")
          .style("opacity", 1);



svgTwo.append("text")
          .attr("id", "textLA")
          .attr("y", 300)
          .attr("x", 72)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Los Angeles");


svgTwo.append("circle")
          .attr("id", "circleSF")
          .attr("cx", 27)
          .attr("cy", 210)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(1000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textSF")
          .attr("y", 215)
          .attr("x", 32)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(1000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("San Francisco");

svgTwo.append("circle")
          .attr("id", "circleSeattle")
          .attr("cx", 73)
          .attr("cy", 50)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(2500).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textSeattle")
          .attr("y", 70)
          .attr("x", 70)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(2500).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Seattle");


svgTwo.append("circle")
          .attr("id", "circlePlainfield")
          .attr("cx", 460)
          .attr("cy", 150)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(7000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textPlainfield")
          .attr("y", 130)
          .attr("x", 422)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(7000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Plainfield");

svgTwo.append("circle")
          .attr("id", "circleMilwaukee")
          .attr("cx", 480)
          .attr("cy", 170)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(7500).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textMilwaukee")
          .attr("y", 172)
          .attr("x", 407)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(7500).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Milwaukee");


svgTwo.append("circle")
          .attr("id", "circleChicago")
          .attr("cx", 490)
          .attr("cy", 190)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(8000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textChicaco")
          .attr("y", 205)
          .attr("x", 447)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(8000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Chicago");



svgTwo.append("circle")
          .attr("id", "circleBrooklyn")
          // .attr("cx", 655)
          // .attr("cy", 173)
          .attr("cx", 670)
          .attr("cy", 175)
          .attr("r", 3)
          .style("fill", "none")
          .style("opacity", 0)
          .transition().delay(10000).duration(2000)
          .style("fill", "red")
          .style("opacity", 1);


svgTwo.append("text")
          .attr("id", "textBrooklyn")
          .attr("y", 155)
          .attr("x", 605)
          .attr("dy", ".35em")
          .style("opacity", 0)
          .transition().delay(10000).duration(2000)
          .style("font-size", "14px")
          .style("fill", "rgb(17, 255, 0)")
          .style("opacity", 1)
          .text("Brooklyn");


}
