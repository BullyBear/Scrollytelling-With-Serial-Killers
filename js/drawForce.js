/////////////////////////////////////////////////////////////////////////    animateValue()


    function animateValue(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start ? 4 : -4;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);

    }

    function animateValueReset(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start ? 4 : -4;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);

    }

    function animateValueTwo(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start ? 13 : -13;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);

    }

    function animateValueTwoReset(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start ? 13 : -13;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);

    }


    function animateValueThree(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start ? 10 : -10;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);

    }


    function animateValueThreeReset(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start ? 10 : -10;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);

    }


    function counterClock(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start ? 10 : -10;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);

    }


    function counterClockTwo(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start ? 10 : -10;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);

    }


/////////////////////////////////////////////////////////////////////////    initiateTransition()





const resetVizInitiateTransition = (direction) => {

    if (direction === "up") {

  //NEW
  d3.selectAll("#forceTransition").style("opacity", 0)
  d3.selectAll(".forceTransitionRes").style("opacity", 0)
  d3.selectAll("#forceTransitionTwo").style("opacity", 0)
  d3.selectAll(".forceTransitionResTwo").style("opacity", 0)
  d3.selectAll("#valueThree").style("opacity", 0)
  d3.selectAll("#valueThreeTwo").style("opacity", 0)




    d3.selectAll("#forceInitiation").remove()
    d3.selectAll(".forceInitiationRes").remove()
    d3.selectAll("#value").remove()
    d3.selectAll("#valueTwo").remove()
    d3.selectAll("#counterClock").remove()

    // counterClock("counterClock", 1900, 2010, 210000);
    // animateValue("value", 0, 3092, 56000);
    // animateValueTwo("valueTwo", 0, 1157, 275000);

    // counterClockTwo("counterClockTwo", 1900, 2010, 210000);
    // animateValueReset("valueReset", 0, 3092, 56000);
    // animateValueTwoReset("valueTwoReset", 0, 1157, 275000);

    initiateTransitionTwo();

}

}



const resetVizInitiateTransitionBottom = (direction) => {

    if (direction === "up") {


  //NEW
  d3.selectAll("#forceTransition").style("opacity", 0)
  d3.selectAll(".forceTransitionRes").style("opacity", 0)
  d3.selectAll("#forceTransitionTwo").style("opacity", 0)
  d3.selectAll(".forceTransitionResTwo").style("opacity", 0)
  d3.selectAll("#valueThree").style("opacity", 0)
  d3.selectAll("#valueThreeTwo").style("opacity", 0)


  d3.selectAll("#valueThreeThree").style("opacity", 0)

  d3.selectAll("#forceTransitionThree").style("opacity", 0)
  d3.selectAll(".forceTransitionResThree").style("opacity", 0)

  d3.selectAll("#forceInitiationThree").style("opacity", 1)
  d3.selectAll(".forceInitiationResThree").style("opacity", 1)


    // counterClockTwo("counterClockTwo", 1900, 2010, 210000);
    // animateValueReset("valueReset", 0, 3092, 56000);
    // animateValueTwoReset("valueTwoReset", 0, 1157, 275000);

  initiateTransitionThree();

}

}





function initiateTransition() {

  var width = 1000,
      height = 1000,
      padding = 1, // separation between same-color nodes  1
      clusterPadding = 1, // separation between different-color nodes
      maxRadius = 2;

    var n = 2, // total number of nodes     
      m = 2; // number of distinct clusters

    var color = d3.scale.category10()
      .domain(d3.range(m));

// The largest node for each cluster.
    var clusters = new Array(m);
    clusters = [{cluster: 0, radius: 2},
                {cluster: 1, radius: 2}]
    var index = 0;
    var nodes = d3.range(n).map(function() {
      var  i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,   
/*           r = 2,   */
        i = index;
        r = 2;
        index += 1;
        d = {cluster: i, radius: 2};
      if (!clusters[i] || (r >= clusters[i].radius)) clusters[i] = d;
      return d;
    });


//    Use the pack layout to initialize node positions.
      var pack = d3.layout.pack()
      .sort(null)
      .size([width, height])
      .children(function(d) { return d.values; })
      .value(function(d) { return d.radius * d.radius; })
      .nodes({values: d3.nest()
        .key(function(d) { return d.cluster; })
        .entries(nodes)});

    var force = d3.layout.force()
      .nodes(nodes)
      .size([width, height])
      .gravity(1)
      .charge(function(d) {
        if(d.radius == clusters[d.cluster].radius) {
          return(-10 * d.radius);
        }
        else {
          return(0);
        }
      })
      .on("tick", tick)
      .start();

    d3.select("#value")
        .style("visibility", "visible")

    d3.select("#valueTwo")
        .style("visibility", "visible")

    var svg = d3.select("#forceInitiation")
      .append("svg")
      .attr("class", "forceInitiationRes")
      .attr("viewBox", '0 0  1000 1000')
      .append("g")
      .attr("transform", "translate(" + -50+ "," + -150 + ")");
      //.attr("width", width)
      //.attr("height", height);


    svg.append("line")
          .attr("id", "lineDomestic")
          // .attr("x1", 880)
          .attr("x1", 900)
          //.attr("y1", 500)
          .attr("y1", 540)
          // .attr("x2", 880)
          .attr("x2", 900)
          //.attr("y2", 740)
          .attr("y2", 940)
          .attr("stroke-width", 1)
          // .style("fill", "rgb(255, 255, 255)")
          .attr("stroke", "white");


    svg.append("line")
          .attr("id", "lineInternational")
          // .attr("x1", 70)
          // .attr("y1", 510)
          // .attr("x2", 70)
          // .attr("y2", 750)
          .attr("x1", 100)
          .attr("y1", 555)
          .attr("x2", 100)
          .attr("y2", 945)
          .attr("stroke-width", 1)
          // .style("fill", "white")
          .attr("stroke", "white"); 

    svg.append("text")
          .attr("id", "labelDomestic")
          // .attr("y", 755)
          // .attr("x", 840)
          .attr("y", 970)
          .attr("x", 865)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("fill", "rgb(255, 255, 255)")
          .text("United States");

    svg.append("text")
          .attr("id", "labelInternational")
          // .attr("y", 760)
          // .attr("x", 30)
          .attr("y", 970)
          .attr("x", 60)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("fill", "rgb(255, 255, 255)")
          .text("International");


    var node = svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .style("fill", function(d) { return color(Math.abs(1 - d.cluster)); })
      .call(force.drag);

    node.transition()
      .duration(100)
/*       .delay(function(d, i) { return i * 5; }) */
      .attrTween("r", function(d) {
        var i = d3.interpolate(0, d.radius);
        return function(t) { return d.radius = i(t); };
      });


    //TOTAL 4479; US 3092; INTERNATIONAL 1387;

    //Real Numbers
    var USValues = [49, 52, 62, 55, 55, 72, 217, 605, 768, 669, 371, 117];
    
    var internationalValues = [23, 23, 41, 31, 45, 41, 76, 160, 217, 322, 295, 113];

    //Half Numbers 
    // var USValues = [25, 26, 31, 28, 28, 36, 109, 303, 384, 335, 186, 59];
    
    // var internationalValues = [12, 12, 21, 16, 23, 21, 38, 80, 109, 161, 148, 57];

    //Quarter Numbers
    // var USValues = [12, 13, 15, 14, 14, 18, 55, 151, 192, 168, 93, 30];
    
    // var internationalValues = [6, 6, 11, 8, 12, 11, 19, 40, 55, 80, 74, 29];


     //setTimeout(() => {
     var iteration = 0;
     var latestUSValue = 0;
     var latestInternationalValue = 0;
     var refreshInterval = setInterval(function() {
    
      /*var i = (iteration  + 1) * 200; 
      var i = Math.floor(Math.random() * m),
           r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,   
    //r = 2,
        d = {cluster: i, radius: r, depth: 2};
      if(d.radius < clusters[d.cluster].radius ) {
        nodes.push(d);
      } */
      if (iteration >= USValues.length) {
          clearInterval(refreshInterval);
          return;
      }
      var USValue = USValues[iteration];
      var newValues = USValue - latestUSValue;
      var internationalValue = internationalValues[iteration];
      iteration += 1;
      var newInternationalValues = internationalValue - latestInternationalValue;
      latestUSValue = USValue;
      latestInternationalValue = internationalValue;

      var temp = 0;
      while (temp < newValues) {
        d = {cluster: 0, radius: 2, depth: 2};
        nodes.push(d);
        temp += 1;
      }
      temp = 0;
      while (temp < newInternationalValues) {
        d = {cluster: 1, radius: 2, depth: 2};
        nodes.push(d);
        temp += 1;
      }

      node = node.data(nodes);
      node.enter().append("circle")
        .style("fill", function(d) { return color(Math.abs(1 - d.cluster)); })
        .attr({r: function(d) { return(d.radius); },
          cx: function(d) { return(d.x); },
          cy: function(d) { return(d.y); },
        })
        .call(force.drag);
      force.start();
    
   }, 2000);
    //}, 10)


  


    function tick(e) {
      node
              //.each(cluster(.01))  
        .each(cluster(e.alpha * .1)) 
        .each(collide(e.alpha * 2))
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    }

// Move d to be adjacent to the cluster node.
    function cluster(alpha) {
      return function(d) {
        var cluster = clusters[d.cluster];
        if (cluster === d) return;
        var x = d.x - cluster.x,
          y = d.y - cluster.y,
          l = Math.sqrt(x * x + y * y),
          r = d.radius + cluster.radius + 10;
        if (l != r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          cluster.x += x;
          cluster.y += y;
        }
      };
    }

// Resolves collisions between d and all other circles.
    function collide(alpha) {
      var quadtree = d3.geom.quadtree(nodes);
      return function(d) {
         var r = d.radius + maxRadius + Math.max(padding, clusterPadding), 
/*                 var r = 2, */
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
            if (l < r) {
              l = (l - r) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
    }

}





function initiateTransitionTwo() {


  counterClockTwo("counterClockTwo", 1900, 2010, 210000);
  animateValueReset("valueA", 0, 3092, 56000);
  animateValueTwoReset("valueTwoA", 0, 1157, 275000);


  var width = 1000,
      height = 1000,
      padding = 1, // separation between same-color nodes  1
      clusterPadding = 1, // separation between different-color nodes
      maxRadius = 2;

    var n = 2, // total number of nodes     
      m = 2; // number of distinct clusters

    var color = d3.scale.category10()
      .domain(d3.range(m));

// The largest node for each cluster.
    var clusters = new Array(m);
    clusters = [{cluster: 0, radius: 2},
                {cluster: 1, radius: 2}]
    var index = 0;
    var nodes = d3.range(n).map(function() {
      var  i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,   
/*           r = 2,   */
        i = index;
        r = 2;
        index += 1;
        d = {cluster: i, radius: 2};
      if (!clusters[i] || (r >= clusters[i].radius)) clusters[i] = d;
      return d;
    });


//    Use the pack layout to initialize node positions.
      var pack = d3.layout.pack()
      .sort(null)
      .size([width, height])
      .children(function(d) { return d.values; })
      .value(function(d) { return d.radius * d.radius; })
      .nodes({values: d3.nest()
        .key(function(d) { return d.cluster; })
        .entries(nodes)});

    var force = d3.layout.force()
      .nodes(nodes)
      .size([width, height])
      .gravity(1)
      .charge(function(d) {
        if(d.radius == clusters[d.cluster].radius) {
          return(-10 * d.radius);
        }
        else {
          return(0);
        }
      })
      .on("tick", tick)
      .start();

    d3.select("#valueA")
        .style("visibility", "visible")

    d3.select("#valueTwoA")
        .style("visibility", "visible")

    var svg = d3.select("#forceInitiationTwo")
      .append("svg")
      .attr("class", "forceInitiationResTwo")
      .attr("viewBox", '0 0  1000 1000')
      .append("g")
      .attr("transform", "translate(" + -50+ "," + -150 + ")");
      //.attr("width", width)
      //.attr("height", height);


    svg.append("line")
          .attr("id", "lineDomestic")
          // .attr("x1", 880)
          .attr("x1", 900)
          //.attr("y1", 500)
          .attr("y1", 540)
          // .attr("x2", 880)
          .attr("x2", 900)
          //.attr("y2", 740)
          .attr("y2", 940)
          .attr("stroke-width", 1)
          // .style("fill", "rgb(255, 255, 255)")
          .attr("stroke", "white");


    svg.append("line")
          .attr("id", "lineInternational")
          // .attr("x1", 70)
          // .attr("y1", 510)
          // .attr("x2", 70)
          // .attr("y2", 750)
          .attr("x1", 100)
          .attr("y1", 555)
          .attr("x2", 100)
          .attr("y2", 945)
          .attr("stroke-width", 1)
          // .style("fill", "white")
          .attr("stroke", "white"); 

    svg.append("text")
          .attr("id", "labelDomestic")
          // .attr("y", 755)
          // .attr("x", 840)
          .attr("y", 970)
          .attr("x", 865)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("fill", "rgb(255, 255, 255)")
          .text("United States");

    svg.append("text")
          .attr("id", "labelInternational")
          // .attr("y", 760)
          // .attr("x", 30)
          .attr("y", 970)
          .attr("x", 60)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("fill", "rgb(255, 255, 255)")
          .text("International");


    var node = svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .style("fill", function(d) { return color(Math.abs(1 - d.cluster)); })
      .call(force.drag);

    node.transition()
      .duration(100)
/*       .delay(function(d, i) { return i * 5; }) */
      .attrTween("r", function(d) {
        var i = d3.interpolate(0, d.radius);
        return function(t) { return d.radius = i(t); };
      });


    //TOTAL 4479; US 3092; INTERNATIONAL 1387;

    //Real Numbers
    var USValues = [49, 52, 62, 55, 55, 72, 217, 605, 768, 669, 371, 117];
    
    var internationalValues = [23, 23, 41, 31, 45, 41, 76, 160, 217, 322, 295, 113];

    //Half Numbers 
    // var USValues = [25, 26, 31, 28, 28, 36, 109, 303, 384, 335, 186, 59];
    
    // var internationalValues = [12, 12, 21, 16, 23, 21, 38, 80, 109, 161, 148, 57];

    //Quarter Numbers
    // var USValues = [12, 13, 15, 14, 14, 18, 55, 151, 192, 168, 93, 30];
    
    // var internationalValues = [6, 6, 11, 8, 12, 11, 19, 40, 55, 80, 74, 29];


     //setTimeout(() => {
     var iteration = 0;
     var latestUSValue = 0;
     var latestInternationalValue = 0;
     var refreshInterval = setInterval(function() {
    
      /*var i = (iteration  + 1) * 200; 
      var i = Math.floor(Math.random() * m),
           r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,   
    //r = 2,
        d = {cluster: i, radius: r, depth: 2};
      if(d.radius < clusters[d.cluster].radius ) {
        nodes.push(d);
      } */
      if (iteration >= USValues.length) {
          clearInterval(refreshInterval);
          return;
      }
      var USValue = USValues[iteration];
      var newValues = USValue - latestUSValue;
      var internationalValue = internationalValues[iteration];
      iteration += 1;
      var newInternationalValues = internationalValue - latestInternationalValue;
      latestUSValue = USValue;
      latestInternationalValue = internationalValue;

      var temp = 0;
      while (temp < newValues) {
        d = {cluster: 0, radius: 2, depth: 2};
        nodes.push(d);
        temp += 1;
      }
      temp = 0;
      while (temp < newInternationalValues) {
        d = {cluster: 1, radius: 2, depth: 2};
        nodes.push(d);
        temp += 1;
      }

      node = node.data(nodes);
      node.enter().append("circle")
        .style("fill", function(d) { return color(Math.abs(1 - d.cluster)); })
        .attr({r: function(d) { return(d.radius); },
          cx: function(d) { return(d.x); },
          cy: function(d) { return(d.y); },
        })
        .call(force.drag);
      force.start();
    
   }, 2000);
    //}, 10)


  


    function tick(e) {
      node
              //.each(cluster(.01))  
        .each(cluster(e.alpha * .1)) 
        .each(collide(e.alpha * 2))
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    }

// Move d to be adjacent to the cluster node.
    function cluster(alpha) {
      return function(d) {
        var cluster = clusters[d.cluster];
        if (cluster === d) return;
        var x = d.x - cluster.x,
          y = d.y - cluster.y,
          l = Math.sqrt(x * x + y * y),
          r = d.radius + cluster.radius + 10;
        if (l != r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          cluster.x += x;
          cluster.y += y;
        }
      };
    }

// Resolves collisions between d and all other circles.
    function collide(alpha) {
      var quadtree = d3.geom.quadtree(nodes);
      return function(d) {
         var r = d.radius + maxRadius + Math.max(padding, clusterPadding), 
/*                 var r = 2, */
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
            if (l < r) {
              l = (l - r) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
    }

}




function initiateTransitionThree() {


  d3.selectAll("#valueB").style("opacity", 1)
  d3.selectAll("#valueTwoB").style("opacity", 1)
  d3.selectAll("#counterClockThree").style("opacity", 1)

  counterClockTwo("counterClockThree", 1900, 2010, 210000);
  animateValueReset("valueB", 0, 3092, 56000);
  animateValueTwoReset("valueTwoB", 0, 1157, 275000);


  var width = 1000,
      height = 1000,
      padding = 1, // separation between same-color nodes  1
      clusterPadding = 1, // separation between different-color nodes
      maxRadius = 2;

    var n = 2, // total number of nodes     
      m = 2; // number of distinct clusters

    var color = d3.scale.category10()
      .domain(d3.range(m));

// The largest node for each cluster.
    var clusters = new Array(m);
    clusters = [{cluster: 0, radius: 2},
                {cluster: 1, radius: 2}]
    var index = 0;
    var nodes = d3.range(n).map(function() {
      var  i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,   
/*           r = 2,   */
        i = index;
        r = 2;
        index += 1;
        d = {cluster: i, radius: 2};
      if (!clusters[i] || (r >= clusters[i].radius)) clusters[i] = d;
      return d;
    });


//    Use the pack layout to initialize node positions.
      var pack = d3.layout.pack()
      .sort(null)
      .size([width, height])
      .children(function(d) { return d.values; })
      .value(function(d) { return d.radius * d.radius; })
      .nodes({values: d3.nest()
        .key(function(d) { return d.cluster; })
        .entries(nodes)});

    var force = d3.layout.force()
      .nodes(nodes)
      .size([width, height])
      .gravity(1)
      .charge(function(d) {
        if(d.radius == clusters[d.cluster].radius) {
          return(-10 * d.radius);
        }
        else {
          return(0);
        }
      })
      .on("tick", tick)
      .start();

    d3.select("#valueB")
        .style("visibility", "visible")

    d3.select("#valueTwoB")
        .style("visibility", "visible")

    var svg = d3.select("#forceInitiationThree")
      .append("svg")
      .attr("class", "forceInitiationResThree")
      .attr("viewBox", '0 0  1000 1000')
      .append("g")
      .attr("transform", "translate(" + -50+ "," + -150 + ")");
      //.attr("width", width)
      //.attr("height", height);


    svg.append("line")
          .attr("id", "lineDomestic")
          // .attr("x1", 880)
          .attr("x1", 900)
          //.attr("y1", 500)
          .attr("y1", 540)
          // .attr("x2", 880)
          .attr("x2", 900)
          //.attr("y2", 740)
          .attr("y2", 940)
          .attr("stroke-width", 1)
          // .style("fill", "rgb(255, 255, 255)")
          .attr("stroke", "white");


    svg.append("line")
          .attr("id", "lineInternational")
          // .attr("x1", 70)
          // .attr("y1", 510)
          // .attr("x2", 70)
          // .attr("y2", 750)
          .attr("x1", 100)
          .attr("y1", 555)
          .attr("x2", 100)
          .attr("y2", 945)
          .attr("stroke-width", 1)
          // .style("fill", "white")
          .attr("stroke", "white"); 

    svg.append("text")
          .attr("id", "labelDomestic")
          // .attr("y", 755)
          // .attr("x", 840)
          .attr("y", 970)
          .attr("x", 865)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("fill", "rgb(255, 255, 255)")
          .text("United States");

    svg.append("text")
          .attr("id", "labelInternational")
          // .attr("y", 760)
          // .attr("x", 30)
          .attr("y", 970)
          .attr("x", 60)
          .attr("dy", ".35em")
          .style("font-size", "14px")
          .style("fill", "rgb(255, 255, 255)")
          .text("International");


    var node = svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .style("fill", function(d) { return color(Math.abs(1 - d.cluster)); })
      .call(force.drag);

    node.transition()
      .duration(100)
/*       .delay(function(d, i) { return i * 5; }) */
      .attrTween("r", function(d) {
        var i = d3.interpolate(0, d.radius);
        return function(t) { return d.radius = i(t); };
      });


    //TOTAL 4479; US 3092; INTERNATIONAL 1387;

    //Real Numbers
    var USValues = [49, 52, 62, 55, 55, 72, 217, 605, 768, 669, 371, 117];
    
    var internationalValues = [23, 23, 41, 31, 45, 41, 76, 160, 217, 322, 295, 113];

    //Half Numbers 
    // var USValues = [25, 26, 31, 28, 28, 36, 109, 303, 384, 335, 186, 59];
    
    // var internationalValues = [12, 12, 21, 16, 23, 21, 38, 80, 109, 161, 148, 57];

    //Quarter Numbers
    // var USValues = [12, 13, 15, 14, 14, 18, 55, 151, 192, 168, 93, 30];
    
    // var internationalValues = [6, 6, 11, 8, 12, 11, 19, 40, 55, 80, 74, 29];


     //setTimeout(() => {
     var iteration = 0;
     var latestUSValue = 0;
     var latestInternationalValue = 0;
     var refreshInterval = setInterval(function() {
    
      /*var i = (iteration  + 1) * 200; 
      var i = Math.floor(Math.random() * m),
           r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,   
    //r = 2,
        d = {cluster: i, radius: r, depth: 2};
      if(d.radius < clusters[d.cluster].radius ) {
        nodes.push(d);
      } */
      if (iteration >= USValues.length) {
          clearInterval(refreshInterval);
          return;
      }
      var USValue = USValues[iteration];
      var newValues = USValue - latestUSValue;
      var internationalValue = internationalValues[iteration];
      iteration += 1;
      var newInternationalValues = internationalValue - latestInternationalValue;
      latestUSValue = USValue;
      latestInternationalValue = internationalValue;

      var temp = 0;
      while (temp < newValues) {
        d = {cluster: 0, radius: 2, depth: 2};
        nodes.push(d);
        temp += 1;
      }
      temp = 0;
      while (temp < newInternationalValues) {
        d = {cluster: 1, radius: 2, depth: 2};
        nodes.push(d);
        temp += 1;
      }

      node = node.data(nodes);
      node.enter().append("circle")
        .style("fill", function(d) { return color(Math.abs(1 - d.cluster)); })
        .attr({r: function(d) { return(d.radius); },
          cx: function(d) { return(d.x); },
          cy: function(d) { return(d.y); },
        })
        .call(force.drag);
      force.start();
    
   }, 2000);
    //}, 10)


  


    function tick(e) {
      node
              //.each(cluster(.01))  
        .each(cluster(e.alpha * .1)) 
        .each(collide(e.alpha * 2))
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    }

// Move d to be adjacent to the cluster node.
    function cluster(alpha) {
      return function(d) {
        var cluster = clusters[d.cluster];
        if (cluster === d) return;
        var x = d.x - cluster.x,
          y = d.y - cluster.y,
          l = Math.sqrt(x * x + y * y),
          r = d.radius + cluster.radius + 10;
        if (l != r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          cluster.x += x;
          cluster.y += y;
        }
      };
    }

// Resolves collisions between d and all other circles.
    function collide(alpha) {
      var quadtree = d3.geom.quadtree(nodes);
      return function(d) {
         var r = d.radius + maxRadius + Math.max(padding, clusterPadding), 
/*                 var r = 2, */
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
            if (l < r) {
              l = (l - r) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
    }

}
















/////////////////////////////////////////////////////////////////////////    initiateForce()




const resetVizInitiateForce = (direction) => {

    if (direction === "up") {

    d3.selectAll("#forceTransition").remove()
    d3.selectAll(".forceTransitionRes").remove()
    d3.selectAll("#valueThree").remove()

    // animateValueThreeReset("valueThreeTwo", 3100, 4250, 100);
    // d3.selectAll("#valueThreeThree").style("opacity", 0)

    initiateForceTwo();

}

}



const resetVizInitiateForceBottom = (direction) => {

    if (direction === "up") {


  d3.selectAll("#forceTransitionThree").style("opacity", 1)
  d3.selectAll(".forceTransitionResThree").style("opacity", 1)

  // animateValueThreeReset("valueThreeThree", 3100, 4250, 100);
  d3.selectAll("#valueThreeThree").style("opacity", 1)


  initiateForceThree();



}

}





function initiateForce () {


    var width = 1000,
      height = 1000,
      padding = 5, // separation between same-color nodes
      clusterPadding = 1, // separation between different-color nodes
      maxRadius = 2;

    var n = 1000, // total number of nodes
      m = 2; // number of distinct clusters


    var color = d3.scale.category10()
      .domain(d3.range(m));


    // var color = d3.scale.quantile()
    //     .domain(d3.range(["#ff7f0e", "#1f77b4"]));



  // The largest node for each cluster.
  var clusters = new Array(m);
  var nodes = d3.range(n).map(function() {
    var i = Math.floor(Math.random() * m),
        r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,   
        /*           r = 2,   */
        d = {cluster: i, radius: r};
      if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
      return d;
    });
  // Use the pack layout to initialize node positions.
  var pack = d3.layout.pack()
    .sort(null)
    .size([width, height])
    .children(function(d) { return d.values; })
    .value(function(d) { return d.radius * d.radius; })
    .nodes({values: d3.nest()
            .key(function(d) { return d.cluster; })
            .entries(nodes)});
            
  var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(0)
    .charge(function(d) {
        if(d.radius == clusters[d.cluster].radius) {
          return(-10 * d.radius);
        }
        else {
          return(0);
        }
      })
      .on("tick", tick)
      .start();

    var svg = d3.select("#forceTransition")
      .append("svg")
      .attr("class", "forceTransitionRes")
      .attr("viewBox", '0 0  1000 1000')
      .append("g")
      .attr("transform", "translate(" + -50+ "," + -150 + ")");
      // .attr("width", width)
      // .attr("height", height);

    var node = svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .style("fill", function(d) { return color(Math.abs(d.cluster)); })
      .call(force.drag);

    node.transition()
      .duration(100)
/*       .delay(function(d, i) { return i * 5; }) */
      .attrTween("r", function(d) {
        var i = d3.interpolate(0, d.radius);
        return function(t) { return d.radius = i(t); };
      });



    function tick(e) {
      node
/*              .each(cluster(.01)),  */
        .each(cluster(e.alpha * .1)) 
        .each(collide(e.alpha * 2))
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    }
    
    
  
 
  // 1
  setTimeout(() => {
  
    const sourceCluster = nodes.filter(n => n.cluster === 0)
    
    // just pick some 250 random nodes as they appear in the array:
    const nodesToMove = sourceCluster
    .sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
      .slice(0, 500)

    const packSize = 5 // set to 250 to move all nodes at once
    let moved = 0
    
    function move() {
      for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
        // change cluster in the data and forces will do the rest
        nodesToMove[moved].cluster = 1
        moved += 1
        
      }
      // "heat" the force a little, so everything keep moving
      // try to comment it out to see how simulation cools down and freezes
      force.alpha(0.1)
      if (moved < nodesToMove.length) {
        // if there are more nodes to move, do it in the next tick
        requestAnimationFrame(move)
      }
    }
    move()
  }, 2000)
  
  
// // 2
//   setTimeout(() => {
  
//     const sourceCluster = nodes.filter(n => n.cluster === 1)
    
//     // just pick some 250 random nodes as they appear in the array:
//     const nodesToMove = sourceCluster
//     //.sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
//       .slice(0, 350)

//     const packSize = 1 // set to 250 to move all nodes at once
//     let moved = 0
    
//     function moveTwo() {
//       for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
//         // change cluster in the data and forces will do the rest
//         nodesToMove[moved].cluster = 0
//         moved += 4
        
//       }
//       // "heat" the force a little, so everything keep moving
//       // try to comment it out to see how simulation cools down and freezes
//       force.alpha(.1)
//       if (moved < nodesToMove.length) {
//         // if there are more nodes to move, do it in the next tick
//         requestAnimationFrame(moveTwo)
//       }
//     }
//     moveTwo()
//   }, 10000)
  
  
  
  

// // 3
//   setTimeout(() => {
  
//     const sourceCluster = nodes.filter(n => n.cluster === 2)
    
//     // just pick some 250 random nodes as they appear in the array:
//     const nodesToMove = sourceCluster
//     //.sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
//       .slice(0, 300)

//     const packSize = 1 // set to 250 to move all nodes at once
//     let moved = 0
    
//     function moveThree() {
//       for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
//         // change cluster in the data and forces will do the rest
//         nodesToMove[moved].cluster = 0
//         moved += 4
        
//       }
//       // "heat" the force a little, so everything keep moving
//       // try to comment it out to see how simulation cools down and freezes
//       force.alpha(.1)
//       if (moved < nodesToMove.length) {
//         // if there are more nodes to move, do it in the next tick
//         requestAnimationFrame(moveThree)
//       }
//     }
//     moveThree()
//   }, 20000)
  

// // 4
//   setTimeout(() => {
  
//     const sourceCluster = nodes.filter(n => n.cluster === 3)
    
//     // just pick some 250 random nodes as they appear in the array:
//     const nodesToMove = sourceCluster
//     //.sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
//       .slice(0, 1000)

//     const packSize = 1 // set to 250 to move all nodes at once
//     let moved = 0
    
//     function moveFour() {
//       for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
//         // change cluster in the data and forces will do the rest
//         nodesToMove[moved].cluster = 0
//         moved += 10
        
//       }
//       // "heat" the force a little, so everything keep moving
//       // try to comment it out to see how simulation cools down and freezes
//       force.alpha(.1)
//       if (moved < nodesToMove.length) {
//         // if there are more nodes to move, do it in the next tick
//         requestAnimationFrame(moveFour)
//       }
//     }
//     moveFour()
//   }, 30000)
  
    

// Move d to be adjacent to the cluster node.
    function cluster(alpha) {
      return function(d) {
        var cluster = clusters[d.cluster];
        if (cluster === d) return;
        var x = d.x - cluster.x,
          y = d.y - cluster.y,
          l = Math.sqrt(x * x + y * y),
          r = d.radius + cluster.radius + 10;
        if (l != r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          cluster.x += x;
          cluster.y += y;
        }
      };
    }

// Resolves collisions between d and all other circles.
    function collide(alpha) {
      var quadtree = d3.geom.quadtree(nodes);
      return function(d) {
         var r = d.radius + maxRadius + Math.max(padding, clusterPadding), 
/*                 var r = 2, */
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) { 
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
            if (l < r) {
              l = (l - r) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
    }


}







function initiateForceTwo () {


    animateValueThreeReset("valueThreeTwo", 3100, 4250, 100);


    var width = 1000,
      height = 1000,
      padding = 5, // separation between same-color nodes
      clusterPadding = 1, // separation between different-color nodes
      maxRadius = 2;

    var n = 1000, // total number of nodes
      m = 2; // number of distinct clusters


    var color = d3.scale.category10()
      .domain(d3.range(m));


    // var color = d3.scale.quantile()
    //     .domain(d3.range(["#ff7f0e", "#1f77b4"]));



  // The largest node for each cluster.
  var clusters = new Array(m);
  var nodes = d3.range(n).map(function() {
    var i = Math.floor(Math.random() * m),
        r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,   
        /*           r = 2,   */
        d = {cluster: i, radius: r};
      if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
      return d;
    });
  // Use the pack layout to initialize node positions.
  var pack = d3.layout.pack()
    .sort(null)
    .size([width, height])
    .children(function(d) { return d.values; })
    .value(function(d) { return d.radius * d.radius; })
    .nodes({values: d3.nest()
            .key(function(d) { return d.cluster; })
            .entries(nodes)});
            
  var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(0)
    .charge(function(d) {
        if(d.radius == clusters[d.cluster].radius) {
          return(-10 * d.radius);
        }
        else {
          return(0);
        }
      })
      .on("tick", tick)
      .start();

    var svg = d3.select("#forceTransitionTwo")
      .append("svg")
      .attr("class", "forceTransitionResTwo")
      .attr("viewBox", '0 0  1000 1000')
      .append("g")
      .attr("transform", "translate(" + -50+ "," + -150 + ")");
      // .attr("width", width)
      // .attr("height", height);

    var node = svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .style("fill", function(d) { return color(Math.abs(d.cluster)); })
      .call(force.drag);

    node.transition()
      .duration(100)
/*       .delay(function(d, i) { return i * 5; }) */
      .attrTween("r", function(d) {
        var i = d3.interpolate(0, d.radius);
        return function(t) { return d.radius = i(t); };
      });



    function tick(e) {
      node
/*              .each(cluster(.01)),  */
        .each(cluster(e.alpha * .1)) 
        .each(collide(e.alpha * 2))
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    }
    
    
  
 
  // 1
  setTimeout(() => {
  
    const sourceCluster = nodes.filter(n => n.cluster === 0)
    
    // just pick some 250 random nodes as they appear in the array:
    const nodesToMove = sourceCluster
    .sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
      .slice(0, 500)

    const packSize = 5 // set to 250 to move all nodes at once
    let moved = 0
    
    function move() {
      for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
        // change cluster in the data and forces will do the rest
        nodesToMove[moved].cluster = 1
        moved += 1
        
      }
      // "heat" the force a little, so everything keep moving
      // try to comment it out to see how simulation cools down and freezes
      force.alpha(0.1)
      if (moved < nodesToMove.length) {
        // if there are more nodes to move, do it in the next tick
        requestAnimationFrame(move)
      }
    }
    move()
  }, 2000)
  
  
// // 2
//   setTimeout(() => {
  
//     const sourceCluster = nodes.filter(n => n.cluster === 1)
    
//     // just pick some 250 random nodes as they appear in the array:
//     const nodesToMove = sourceCluster
//     //.sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
//       .slice(0, 350)

//     const packSize = 1 // set to 250 to move all nodes at once
//     let moved = 0
    
//     function moveTwo() {
//       for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
//         // change cluster in the data and forces will do the rest
//         nodesToMove[moved].cluster = 0
//         moved += 4
        
//       }
//       // "heat" the force a little, so everything keep moving
//       // try to comment it out to see how simulation cools down and freezes
//       force.alpha(.1)
//       if (moved < nodesToMove.length) {
//         // if there are more nodes to move, do it in the next tick
//         requestAnimationFrame(moveTwo)
//       }
//     }
//     moveTwo()
//   }, 10000)
  
  
  
  

// // 3
//   setTimeout(() => {
  
//     const sourceCluster = nodes.filter(n => n.cluster === 2)
    
//     // just pick some 250 random nodes as they appear in the array:
//     const nodesToMove = sourceCluster
//     //.sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
//       .slice(0, 300)

//     const packSize = 1 // set to 250 to move all nodes at once
//     let moved = 0
    
//     function moveThree() {
//       for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
//         // change cluster in the data and forces will do the rest
//         nodesToMove[moved].cluster = 0
//         moved += 4
        
//       }
//       // "heat" the force a little, so everything keep moving
//       // try to comment it out to see how simulation cools down and freezes
//       force.alpha(.1)
//       if (moved < nodesToMove.length) {
//         // if there are more nodes to move, do it in the next tick
//         requestAnimationFrame(moveThree)
//       }
//     }
//     moveThree()
//   }, 20000)
  

// // 4
//   setTimeout(() => {
  
//     const sourceCluster = nodes.filter(n => n.cluster === 3)
    
//     // just pick some 250 random nodes as they appear in the array:
//     const nodesToMove = sourceCluster
//     //.sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
//       .slice(0, 1000)

//     const packSize = 1 // set to 250 to move all nodes at once
//     let moved = 0
    
//     function moveFour() {
//       for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
//         // change cluster in the data and forces will do the rest
//         nodesToMove[moved].cluster = 0
//         moved += 10
        
//       }
//       // "heat" the force a little, so everything keep moving
//       // try to comment it out to see how simulation cools down and freezes
//       force.alpha(.1)
//       if (moved < nodesToMove.length) {
//         // if there are more nodes to move, do it in the next tick
//         requestAnimationFrame(moveFour)
//       }
//     }
//     moveFour()
//   }, 30000)
  
    

// Move d to be adjacent to the cluster node.
    function cluster(alpha) {
      return function(d) {
        var cluster = clusters[d.cluster];
        if (cluster === d) return;
        var x = d.x - cluster.x,
          y = d.y - cluster.y,
          l = Math.sqrt(x * x + y * y),
          r = d.radius + cluster.radius + 10;
        if (l != r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          cluster.x += x;
          cluster.y += y;
        }
      };
    }

// Resolves collisions between d and all other circles.
    function collide(alpha) {
      var quadtree = d3.geom.quadtree(nodes);
      return function(d) {
         var r = d.radius + maxRadius + Math.max(padding, clusterPadding), 
/*                 var r = 2, */
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) { 
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
            if (l < r) {
              l = (l - r) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
    }


}






function initiateForceThree () {


  animateValueThreeReset("valueThreeThree", 3100, 4250, 100);


  // d3.selectAll("#forceTransitionOne").style("opacity", 0)
  // d3.selectAll(".forceTransitionResOne").style("opacity", 0)

  // d3.selectAll("#forceTransitionTwo").style("opacity", 0)
  // d3.selectAll(".forceTransitionResTwo").style("opacity", 0)


  // d3.selectAll("#forceTransitionThree").style("opacity", 1)
  // d3.selectAll(".forceTransitionResThree").style("opacity", 1)


    var width = 1000,
      height = 1000,
      padding = 5, // separation between same-color nodes
      clusterPadding = 1, // separation between different-color nodes
      maxRadius = 2;

    var n = 1000, // total number of nodes
      m = 2; // number of distinct clusters


    var color = d3.scale.category10()
      .domain(d3.range(m));


    // var color = d3.scale.quantile()
    //     .domain(d3.range(["#ff7f0e", "#1f77b4"]));



  // The largest node for each cluster.
  var clusters = new Array(m);
  var nodes = d3.range(n).map(function() {
    var i = Math.floor(Math.random() * m),
        r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,   
        /*           r = 2,   */
        d = {cluster: i, radius: r};
      if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
      return d;
    });
  // Use the pack layout to initialize node positions.
  var pack = d3.layout.pack()
    .sort(null)
    .size([width, height])
    .children(function(d) { return d.values; })
    .value(function(d) { return d.radius * d.radius; })
    .nodes({values: d3.nest()
            .key(function(d) { return d.cluster; })
            .entries(nodes)});
            
  var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(0)
    .charge(function(d) {
        if(d.radius == clusters[d.cluster].radius) {
          return(-10 * d.radius);
        }
        else {
          return(0);
        }
      })
      .on("tick", tick)
      .start();

    var svg = d3.select("#forceTransitionThree")
      .append("svg")
      .attr("class", "forceTransitionResThree")
      .attr("viewBox", '0 0  1000 1000')
      .append("g")
      .attr("transform", "translate(" + -50+ "," + -150 + ")")
      // .attr("width", width)
      // .attr("height", height);

    var node = svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .style("fill", function(d) { return color(Math.abs(d.cluster)); })
      .call(force.drag);

    node.transition()
      .duration(100)
/*       .delay(function(d, i) { return i * 5; }) */
      .attrTween("r", function(d) {
        var i = d3.interpolate(0, d.radius);
        return function(t) { return d.radius = i(t); };
      });



    function tick(e) {
      node
/*              .each(cluster(.01)),  */
        .each(cluster(e.alpha * .1)) 
        .each(collide(e.alpha * 2))
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    }
    
    
  
 
  // 1
  setTimeout(() => {
  
    const sourceCluster = nodes.filter(n => n.cluster === 0)
    
    // just pick some 250 random nodes as they appear in the array:
    const nodesToMove = sourceCluster
    .sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
      .slice(0, 500)

    const packSize = 5 // set to 250 to move all nodes at once
    let moved = 0
    
    function move() {
      for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
        // change cluster in the data and forces will do the rest
        nodesToMove[moved].cluster = 1
        moved += 1
        
      }
      // "heat" the force a little, so everything keep moving
      // try to comment it out to see how simulation cools down and freezes
      force.alpha(0.1)
      if (moved < nodesToMove.length) {
        // if there are more nodes to move, do it in the next tick
        requestAnimationFrame(move)
      }
    }
    move()
  }, 2000)
  
  
// // 2
//   setTimeout(() => {
  
//     const sourceCluster = nodes.filter(n => n.cluster === 1)
    
//     // just pick some 250 random nodes as they appear in the array:
//     const nodesToMove = sourceCluster
//     //.sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
//       .slice(0, 350)

//     const packSize = 1 // set to 250 to move all nodes at once
//     let moved = 0
    
//     function moveTwo() {
//       for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
//         // change cluster in the data and forces will do the rest
//         nodesToMove[moved].cluster = 0
//         moved += 4
        
//       }
//       // "heat" the force a little, so everything keep moving
//       // try to comment it out to see how simulation cools down and freezes
//       force.alpha(.1)
//       if (moved < nodesToMove.length) {
//         // if there are more nodes to move, do it in the next tick
//         requestAnimationFrame(moveTwo)
//       }
//     }
//     moveTwo()
//   }, 10000)
  
  
  
  

// // 3
//   setTimeout(() => {
  
//     const sourceCluster = nodes.filter(n => n.cluster === 2)
    
//     // just pick some 250 random nodes as they appear in the array:
//     const nodesToMove = sourceCluster
//     //.sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
//       .slice(0, 300)

//     const packSize = 1 // set to 250 to move all nodes at once
//     let moved = 0
    
//     function moveThree() {
//       for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
//         // change cluster in the data and forces will do the rest
//         nodesToMove[moved].cluster = 0
//         moved += 4
        
//       }
//       // "heat" the force a little, so everything keep moving
//       // try to comment it out to see how simulation cools down and freezes
//       force.alpha(.1)
//       if (moved < nodesToMove.length) {
//         // if there are more nodes to move, do it in the next tick
//         requestAnimationFrame(moveThree)
//       }
//     }
//     moveThree()
//   }, 20000)
  

// // 4
//   setTimeout(() => {
  
//     const sourceCluster = nodes.filter(n => n.cluster === 3)
    
//     // just pick some 250 random nodes as they appear in the array:
//     const nodesToMove = sourceCluster
//     //.sort((a, b) => b.x - a.x) // uncomment to move the rightmost nodes first
//       .slice(0, 1000)

//     const packSize = 1 // set to 250 to move all nodes at once
//     let moved = 0
    
//     function moveFour() {
//       for (let i = 0; i < packSize && moved < nodesToMove.length; i++) {
//         // change cluster in the data and forces will do the rest
//         nodesToMove[moved].cluster = 0
//         moved += 10
        
//       }
//       // "heat" the force a little, so everything keep moving
//       // try to comment it out to see how simulation cools down and freezes
//       force.alpha(.1)
//       if (moved < nodesToMove.length) {
//         // if there are more nodes to move, do it in the next tick
//         requestAnimationFrame(moveFour)
//       }
//     }
//     moveFour()
//   }, 30000)
  
    

// Move d to be adjacent to the cluster node.
    function cluster(alpha) {
      return function(d) {
        var cluster = clusters[d.cluster];
        if (cluster === d) return;
        var x = d.x - cluster.x,
          y = d.y - cluster.y,
          l = Math.sqrt(x * x + y * y),
          r = d.radius + cluster.radius + 10;
        if (l != r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          cluster.x += x;
          cluster.y += y;
        }
      };
    }

// Resolves collisions between d and all other circles.
    function collide(alpha) {
      var quadtree = d3.geom.quadtree(nodes);
      return function(d) {
         var r = d.radius + maxRadius + Math.max(padding, clusterPadding), 
/*                 var r = 2, */
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) { 
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
            if (l < r) {
              l = (l - r) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
    }


}
