/////////////////////////////////////////////////////////////////////////    drawChoropleth()



const resetVizChoropleth = (direction) => {

    if (direction === "up") {


    //NEW
    d3.selectAll('#radarChart').style("opacity", 0)
    d3.selectAll('.radarRes').style("opacity", 0)
    d3.selectAll('#radarChartTwo').style("opacity", 0)
    d3.selectAll('.radarResTwo').style("opacity", 0)


    d3.selectAll('.choroplethRes').remove();

    drawChoroplethTwo();

}

}



const resetVizChoroplethBottom = (direction) => {

    if (direction === "up") {


    //NEW
    d3.selectAll('#radarChart').style("opacity", 0)
    d3.selectAll('.radarRes').style("opacity", 0)
    d3.selectAll('#radarChartTwo').style("opacity", 0)
    d3.selectAll('.radarResTwo').style("opacity", 0)



    d3.selectAll('#radarChartThree').style("opacity", 0)
    d3.selectAll('.radarResThree').style("opacity", 0)

    d3.selectAll('#choroplethThree').style("opacity", 1)
    d3.selectAll('.choroplethResThree').style("opacity", 1)

    drawChoroplethThree();

}

}





function drawChoropleth() {



    var w = 750;
    var h = 500;

    var margin = {
          top: 60,
          bottom: 40,
          left: 70,
          right: 40
        };

      var width = w - margin.left - margin.right;
      var height = h - margin.top - margin.bottom;
      // var width = w;
      // var height = h;

     

      var projection = d3
        .geo.albersUsa()
        .translate([w / 2, h / 2])
        .scale([1000]);

      var path = d3
        .geo.path()
        .projection(projection);


      // var svgChoropleth = d3.select("#map")
      var svgChoropleth = d3.select("#choropleth")
        .append("svg")
        .attr("class", "choroplethRes")
        // .attr("viewBox", `0 0 1395 1000`)
        .attr("viewBox", `0 0 1575 1575`)
        .append("g") 
        .attr("transform", "translate(" + 340+ "," + 0 + ")");
        // .attr("transform", "translate(" + 330+ "," + 0 + ")");
        // .attr("width", w)
        // .attr("height", h)
        // .attr("id", "mapChoropleth")

        // .append("g")
        // .attr("tranform", "translate(0" + margin.left + "," + margin.top + ")");


      //var color = d3.scaleQuantile()
      var color = d3.scale.quantile()
          .range(["rgb(204,255,255)", "rgb(102,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(0, 0, 204)", "rgb(0, 0, 102)"]);



      d3.csv("../static/data/serial_killers_final/assets/data/choroplethMap.csv", function(data){

      color.domain([ d3.min(data, function(d){ return d.value; }),
          d3.max(data, function(d){ return d.value; })
          ]);


      d3.json("../static/data/serial_killers_final/assets/data/choroplethmap.json", function(json){

        //Merge the agriculture and GeoJSON data
        //Loop through once for each agriculture data value
        for(var i = 0; i < data.length; i++){
          // grab state name
          var dataState = data[i].state;

          //grab data value, and convert from string to float
          var dataValue = parseFloat(data[i].value);

          //find the corresponding state inside the GeoJSON
          for(var n = 0; n < json.features.length; n++){

            // properties name gets the states name
            var jsonState = json.features[n].properties.name;
            // if statment to merge by name of state
            if(dataState == jsonState){
              //Copy the data value into the JSON
              // basically creating a new value column in JSON data
              json.features[n].properties.value = dataValue;

              //stop looking through the JSON
              break;
            }
          }
        }

        svgChoropleth.selectAll("path")
          .data(json.features)
          .enter()
          .append("path")
          .attr("d", path)
          .style("fill", function(d){
            //get the data value
            var value = d.properties.value;

            if(value){
              //If value exists
              return color(value);
            }

            else {
              // If value is undefined
              //we do this because alaska and hawaii are not in dataset we are using but still in projections
              return "#ccc"
            }

          });


      });

})



svgChoropleth.append("rect")
              .attr("id", "rectOne")
              .attr("fill", "rgb(0, 0, 102)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 200)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)

svgChoropleth.append("rect")
              .attr("id", "rectTwo")
              .attr("fill", "rgb(51,153,255)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 180)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)

svgChoropleth.append("rect")
              .attr("id", "rectThree")
              .attr("fill", "rgb(102,255,255)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 160)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)

svgChoropleth.append("rect")
              .attr("id", "rectFour")
              .attr("fill", "rgb(204,255,255)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 140)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)


svgChoropleth.append("text")
          .attr("id", "choroplethTextTitle")
          .attr("y", 405)
          .attr("x", 70)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          //.style("fill", "rgb(17, 255, 0)")
          .text("Serial Killer Victims By State");


svgChoropleth.append("text")
          .attr("id", "choroplethTextOne")
          .attr("y", 445)
          .attr("x", 220)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("opacity", 1)
          //.style("fill", "rgb(255,0,0)")
          .style("fill", "rgb(255,255,255)")
          .text(">600");

svgChoropleth.append("text")
          .attr("id", "choroplethTextTwo")
          .attr("y", 445)
          .attr("x", 190)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          .text(">300");


svgChoropleth.append("text")
          .attr("id", "choroplethTextThree")
          .attr("y", 445)
          .attr("x", 150)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          .text(">160");


svgChoropleth.append("text")
          .attr("id", "choroplethTextFour")
          .attr("y", 445)
          .attr("x", 120)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          .text(">0");

}





function drawChoroplethTwo() {


    var w = 750;
    var h = 500;

    var margin = {
          top: 60,
          bottom: 40,
          left: 70,
          right: 40
        };

      var width = w - margin.left - margin.right;
      var height = h - margin.top - margin.bottom;
      // var width = w;
      // var height = h;

     

      var projection = d3
        .geo.albersUsa()
        .translate([w / 2, h / 2])
        .scale([1000]);

      var path = d3
        .geo.path()
        .projection(projection);


      // var svgChoropleth = d3.select("#map")
      var svgChoropleth = d3.select("#choroplethTwo")
        .append("svg")
        .attr("class", "choroplethResTwo")
        // .attr("viewBox", `0 0 1395 1000`)
        .attr("viewBox", `0 0 1575 1575`)
        .append("g") 
        .attr("transform", "translate(" + 340+ "," + 0 + ")");
        // .attr("transform", "translate(" + 330+ "," + 0 + ")");
        // .attr("width", w)
        // .attr("height", h)
        // .attr("id", "mapChoropleth")

        // .append("g")
        // .attr("tranform", "translate(0" + margin.left + "," + margin.top + ")");


      //var color = d3.scaleQuantile()
      var color = d3.scale.quantile()
          .range(["rgb(204,255,255)", "rgb(102,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(0, 0, 204)", "rgb(0, 0, 102)"]);



      d3.csv("../static/data/serial_killers_final/assets/data/choroplethMap.csv", function(data){

      color.domain([ d3.min(data, function(d){ return d.value; }),
          d3.max(data, function(d){ return d.value; })
          ]);


      d3.json("../static/data/serial_killers_final/assets/data/choroplethmap.json", function(json){

        //Merge the agriculture and GeoJSON data
        //Loop through once for each agriculture data value
        for(var i = 0; i < data.length; i++){
          // grab state name
          var dataState = data[i].state;

          //grab data value, and convert from string to float
          var dataValue = parseFloat(data[i].value);

          //find the corresponding state inside the GeoJSON
          for(var n = 0; n < json.features.length; n++){

            // properties name gets the states name
            var jsonState = json.features[n].properties.name;
            // if statment to merge by name of state
            if(dataState == jsonState){
              //Copy the data value into the JSON
              // basically creating a new value column in JSON data
              json.features[n].properties.value = dataValue;

              //stop looking through the JSON
              break;
            }
          }
        }

        svgChoropleth.selectAll("path")
          .data(json.features)
          .enter()
          .append("path")
          .attr("d", path)
          .style("fill", function(d){
            //get the data value
            var value = d.properties.value;

            if(value){
              //If value exists
              return color(value);
            }

            else {
              // If value is undefined
              //we do this because alaska and hawaii are not in dataset we are using but still in projections
              return "#ccc"
            }

          });


      });

})



svgChoropleth.append("rect")
              .attr("id", "rectOne")
              .attr("fill", "rgb(0, 0, 102)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 200)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)

svgChoropleth.append("rect")
              .attr("id", "rectTwo")
              .attr("fill", "rgb(51,153,255)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 180)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)

svgChoropleth.append("rect")
              .attr("id", "rectThree")
              .attr("fill", "rgb(102,255,255)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 160)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)

svgChoropleth.append("rect")
              .attr("id", "rectFour")
              .attr("fill", "rgb(204,255,255)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 140)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)


svgChoropleth.append("text")
          .attr("id", "choroplethTextTitle")
          .attr("y", 405)
          .attr("x", 70)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          //.style("fill", "rgb(17, 255, 0)")
          .text("Serial Killer Victims By State");


svgChoropleth.append("text")
          .attr("id", "choroplethTextOne")
          .attr("y", 445)
          .attr("x", 220)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("opacity", 1)
          //.style("fill", "rgb(255,0,0)")
          .style("fill", "rgb(255,255,255)")
          .text(">600");

svgChoropleth.append("text")
          .attr("id", "choroplethTextTwo")
          .attr("y", 445)
          .attr("x", 190)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          .text(">300");


svgChoropleth.append("text")
          .attr("id", "choroplethTextThree")
          .attr("y", 445)
          .attr("x", 150)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          .text(">160");


svgChoropleth.append("text")
          .attr("id", "choroplethTextFour")
          .attr("y", 445)
          .attr("x", 120)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          .text(">0");



}





function drawChoroplethThree() {


    var w = 750;
    var h = 500;

    var margin = {
          top: 60,
          bottom: 40,
          left: 70,
          right: 40
        };

      var width = w - margin.left - margin.right;
      var height = h - margin.top - margin.bottom;
      // var width = w;
      // var height = h;

     

      var projection = d3
        .geo.albersUsa()
        .translate([w / 2, h / 2])
        .scale([1000]);

      var path = d3
        .geo.path()
        .projection(projection);


      // var svgChoropleth = d3.select("#map")
      var svgChoropleth = d3.select("#choroplethThree")
        .append("svg")
        .attr("class", "choroplethResThree")
        // .attr("viewBox", `0 0 1395 1000`)
        .attr("viewBox", `0 0 1575 1575`)
        .append("g") 
        .attr("transform", "translate(" + 340+ "," + 0 + ")");
        // .attr("transform", "translate(" + 330+ "," + 0 + ")");
        // .attr("width", w)
        // .attr("height", h)
        // .attr("id", "mapChoropleth")

        // .append("g")
        // .attr("tranform", "translate(0" + margin.left + "," + margin.top + ")");


      //var color = d3.scaleQuantile()
      var color = d3.scale.quantile()
          .range(["rgb(204,255,255)", "rgb(102,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(0, 0, 204)", "rgb(0, 0, 102)"]);



      d3.csv("../static/data/serial_killers_final/assets/data/choroplethMap.csv", function(data){

      color.domain([ d3.min(data, function(d){ return d.value; }),
          d3.max(data, function(d){ return d.value; })
          ]);


      d3.json("../static/data/serial_killers_final/assets/data/choroplethmap.json", function(json){

        //Merge the agriculture and GeoJSON data
        //Loop through once for each agriculture data value
        for(var i = 0; i < data.length; i++){
          // grab state name
          var dataState = data[i].state;

          //grab data value, and convert from string to float
          var dataValue = parseFloat(data[i].value);

          //find the corresponding state inside the GeoJSON
          for(var n = 0; n < json.features.length; n++){

            // properties name gets the states name
            var jsonState = json.features[n].properties.name;
            // if statment to merge by name of state
            if(dataState == jsonState){
              //Copy the data value into the JSON
              // basically creating a new value column in JSON data
              json.features[n].properties.value = dataValue;

              //stop looking through the JSON
              break;
            }
          }
        }

        svgChoropleth.selectAll("path")
          .data(json.features)
          .enter()
          .append("path")
          .attr("d", path)
          .style("fill", function(d){
            //get the data value
            var value = d.properties.value;

            if(value){
              //If value exists
              return color(value);
            }

            else {
              // If value is undefined
              //we do this because alaska and hawaii are not in dataset we are using but still in projections
              return "#ccc"
            }

          });


      });

})



svgChoropleth.append("rect")
              .attr("id", "rectOne")
              .attr("fill", "rgb(0, 0, 102)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 200)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)

svgChoropleth.append("rect")
              .attr("id", "rectTwo")
              .attr("fill", "rgb(51,153,255)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 180)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)

svgChoropleth.append("rect")
              .attr("id", "rectThree")
              .attr("fill", "rgb(102,255,255)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 160)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)

svgChoropleth.append("rect")
              .attr("id", "rectFour")
              .attr("fill", "rgb(204,255,255)")
              .style("opacity", 1)
              .attr("width", 20)
              .attr("height", 10)
              .attr("x", 140)
              .attr("y", 425)
              //.attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)


svgChoropleth.append("text")
          .attr("id", "choroplethTextTitle")
          .attr("y", 405)
          .attr("x", 70)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          //.style("fill", "rgb(17, 255, 0)")
          .text("Serial Killer Victims By State");


svgChoropleth.append("text")
          .attr("id", "choroplethTextOne")
          .attr("y", 445)
          .attr("x", 220)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("opacity", 1)
          //.style("fill", "rgb(255,0,0)")
          .style("fill", "rgb(255,255,255)")
          .text(">600");

svgChoropleth.append("text")
          .attr("id", "choroplethTextTwo")
          .attr("y", 445)
          .attr("x", 190)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          .text(">300");


svgChoropleth.append("text")
          .attr("id", "choroplethTextThree")
          .attr("y", 445)
          .attr("x", 150)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          .text(">160");


svgChoropleth.append("text")
          .attr("id", "choroplethTextFour")
          .attr("y", 445)
          .attr("x", 120)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("opacity", 1)
          .style("fill", "rgb(255,255,255)")
          .text(">0");



}
