/////////////////////////////////////////////////////////////////////////    radarChart()



const resetVizRadar = (direction) => {

    if (direction === "up") {


    //NEW
    d3.selectAll("#progressOne").style("opacity", 0)
    d3.selectAll(".firstBarRes").style("opacity", 0)
    d3.selectAll("#progressOneTwo").style("opacity", 0)
    d3.selectAll(".firstBarResTwo").style("opacity", 0)
    d3.selectAll("#arcOne").style("opacity", 0)
    d3.selectAll("#arcOneRes").style("opacity", 0)
    d3.selectAll("#arcOneTwo").style("opacity", 0)
    d3.selectAll("#arcOneResTwo").style("opacity", 0)


    d3.selectAll('.radarRes').remove();

    radarChartTwo();

}

}


const resetVizRadarBottom = (direction) => {

    if (direction === "up") {

    //d3.selectAll("#introSoundTwo").remove();
    // playAudio();


    //NEW
    d3.selectAll("#progressOne").style("opacity", 0)
    d3.selectAll(".firstBarRes").style("opacity", 0)
    d3.selectAll("#progressOneTwo").style("opacity", 0)
    d3.selectAll(".firstBarResTwo").style("opacity", 0)
    d3.selectAll("#arcOne").style("opacity", 0)
    d3.selectAll("#arcOneRes").style("opacity", 0)
    d3.selectAll("#arcOneTwo").style("opacity", 0)
    d3.selectAll("#arcOneResTwo").style("opacity", 0)


    d3.selectAll("#progressOneThree").style("opacity", 0)
    d3.selectAll(".firstBarResThree").style("opacity", 0)

    d3.selectAll("#arcOneThree").style("opacity", 0)
    d3.selectAll("#arcOneResThree").style("opacity", 0)

    d3.selectAll("#radarChartThree").style("opacity", 1)
    d3.selectAll(".radarResThree").style("opacity", 1)


    radarChartThree();

}

}



function radarChart() {



var RadarChart = {
  draw: function(id, d, options){
  var cfg = {
   radius: 4,
   w: 600,
   h: 600,
   // w: 1200,
   // h: 1200,
   factor: 1,
   factorLegend: .85,
   levels: 3,
   maxValue: 0,
   radians: 2 * Math.PI,
   opacityArea: 0.5,
   ToRight: 5,
   TranslateX: 80,
   TranslateY: 48,
   ExtraWidthX: 100,
   ExtraWidthY: 100,
   color: d3.scale.category10()
  };
  
  if('undefined' !== typeof options){
    for(var i in options){
    if('undefined' !== typeof options[i]){
      cfg[i] = options[i];
    }
    }
  }
  cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i){return d3.max(i.map(function(o){return o.value;}))}));
  var allAxis = (d[0].map(function(i, j){return i.axis}));
  var total = allAxis.length;
  var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
  var Format = d3.format('%');
  d3.select(id).select("svg").remove();
  
  // var g = d3.select(id)
  //     .append("svg")
  //     .attr("width", cfg.w+cfg.ExtraWidthX)
  //     .attr("height", cfg.h+cfg.ExtraWidthY)
  //     .append("g")
  //     .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
  //     ;

  var g = d3.select(id)
      .append("svg")
      .attr("class", 'radarRes')
      .attr("viewBox", `0 0 ${cfg.w+cfg.ExtraWidthX} ${cfg.h+cfg.ExtraWidthY}`)
      // .attr("viewBox", `0 0 1200 600`)
      .append("g") 
      .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
      

  var tooltip;
  
  //Circular segments
  for(var j=0; j<cfg.levels-1; j++){
    var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
    g.selectAll(".levels")
     .data(allAxis)
     .enter()
     .append("svg:line")
     .attr("x1", function(d, i){return levelFactor*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
     .attr("y1", function(d, i){return levelFactor*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
     .attr("x2", function(d, i){return levelFactor*(1-cfg.factor*Math.sin((i+1)*cfg.radians/total));})
     .attr("y2", function(d, i){return levelFactor*(1-cfg.factor*Math.cos((i+1)*cfg.radians/total));})
     .attr("class", "line")
     .style("stroke", "grey")
     .style("stroke-opacity", "0.75")
     .style("stroke-width", "0.7px")
     .attr("transform", "translate(" + (cfg.w/2-levelFactor) + ", " + (cfg.h/2-levelFactor) + ")");
  }

  //Text indicating at what % each level is
  for(var j=0; j<cfg.levels; j++){
    var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
    g.selectAll(".levels")
     .data([1]) //dummy data
     .enter()
     .append("svg:text")
     .attr("x", function(d){return levelFactor*(1-cfg.factor*Math.sin(0));})
     .attr("y", function(d){return levelFactor*(1-cfg.factor*Math.cos(0));})
     .attr("class", "legend")
     .style("font-family", "Georgia")
     .style("font-size", "10px")
     .attr("transform", "translate(" + (cfg.w/2-levelFactor + cfg.ToRight) + ", " + (cfg.h/2-levelFactor) + ")")
     .attr("fill", "#737373")
     // .attr("fill", "rgb(143, 0, 255)")
     .text(Format((j+1)*cfg.maxValue/cfg.levels));
  }
  
  series = 0;

  var axis = g.selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis");

  axis.append("line")
    .attr("x1", cfg.w/2)
    .attr("y1", cfg.h/2)
    .attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
    .attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
    .attr("class", "line")
    .style("stroke", "grey")
    .style("stroke-width", "1px");

  axis.append("text")
    .attr("class", "legend")
    .text(function(d){return d})
    .style("font-family", "Georgia")
    .style("font-size", "11px")
    .attr("fill", "rgb(255, 255, 255)")
    //.attr("fill", "rgb(143, 0, 255)")
    .style("opacity", 0.7)
    .attr("text-anchor", "middle")
    .attr("dy", "3.5em")
    .attr("transform", function(d, i){return "translate(0, -10)"})
    .attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
    .attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total);});

 
  d.forEach(function(y, x){
    dataValues = [];
    g.selectAll(".nodes")
    .data(y, function(j, i){
      dataValues.push([
      cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
      cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
      ]);
    });
    dataValues.push(dataValues[0]);
    g.selectAll(".area")
           .data([dataValues])
           .enter()
           .append("polygon")
           .attr("class", "radar-chart-serie"+series)
           .style("stroke-width", "2px")
           .style("stroke", cfg.color(series))
           .attr("points",function(d) {
             var str="";
             for(var pti=0;pti<d.length;pti++){
               str=str+d[pti][0]+","+d[pti][1]+" ";
             }
             return str;
            })
           .style("fill", function(j, i){return cfg.color(series)})
           .style("fill-opacity", cfg.opacityArea)
           .on('mouseover', function (d){
                    z = "polygon."+d3.select(this).attr("class");
                    g.selectAll("polygon")
                     .transition(200)
                     .style("fill-opacity", 0.1); 
                    g.selectAll(z)
                     .transition(200)
                     .style("fill-opacity", .7);
                    })
           .on('mouseout', function(){
                    g.selectAll("polygon")
                     .transition(200)
                     .style("fill-opacity", cfg.opacityArea);
           });
    series++;
  });
  series=0;


  d.forEach(function(y, x){
    g.selectAll(".nodes")
    .data(y).enter()
    .append("svg:circle")
    .attr("class", "radar-chart-serie"+series)
    .attr('r', cfg.radius)
    .attr("alt", function(j){return Math.max(j.value, 0)})
    .attr("cx", function(j, i){
      dataValues.push([
      cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
      cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
    ]);
    return cfg.w/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total));
    })
    .attr("cy", function(j, i){
      return cfg.h/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total));
    })
    .attr("data-id", function(j){return j.axis})
    .style("fill", cfg.color(series)).style("fill-opacity", .9)
    .on('mouseover', function (d){
          newX =  parseFloat(d3.select(this).attr('cx')) - 10;
          newY =  parseFloat(d3.select(this).attr('cy')) - 5;
          
          tooltip
            .attr('x', newX)
            .attr('y', newY)
            .text(Format(d.value))
            .transition(200)
            .style('opacity', 1); 
            
          z = "polygon."+d3.select(this).attr("class");
          g.selectAll("polygon")
            .transition(200)
            .style("fill-opacity", 0.1); 
          g.selectAll(z)
            .transition(200)
            .style("fill-opacity", .7);
          })
    .on('mouseout', function(){
          tooltip
            .transition(200)
            .style('opacity', 0);
          g.selectAll("polygon")
            .transition(200)
            .style("fill-opacity", cfg.opacityArea);
          }) 
    .append("svg:title")
    .text(function(j){return Math.max(j.value, 0)});

    series++; 
  });
  //Tooltip
  tooltip = g.append('text')
         .style('opacity', 0)
         .style('font-family', 'Georgia')
         .style('font-size', '13px');
  }
};



/////////////////////////////////////////////////////////////////

var w = 500,
  h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Jeffrey Dahmer', 'Ted Bundy', 'John Wayne Gacy'];

//Data
  
 var d = [
      [
      //{axis:"Bludgeoned",value:0.06},
      {axis:"Bludgeoned",value:0.39},
      {axis:"Necrophilia",value:0.46},
      //{axis:"Battered",value:0.06},
      {axis:"Raped",value:0.32},
      {axis:"Strangled",value:0.57},
      {axis:"Hydrochloric Acid in Brain",value:.23},
      {axis:"Dismembered",value:0.76},
      {axis:"Body Dissolved in Acid",value:0.17},
      {axis:"Drugged",value:0.59},
      {axis:"Eaten",value:0.26},
      //{axis:"Handcuffed",value:0.06},
      {axis:"Handcuffed",value:0.47},
      {axis:"Decapitated",value:0.18},
      {axis:"Preserved",value:0.65},
      {axis:"Skull as Trophy",value:0.16},
      //{axis:"Slashed",value:0.06},
      {axis:"Slashed",value:0.47}
      ],

      [
      {axis:"Bludgeoned",value:0.71},
      {axis:"Necrophilia",value:0.27},
      {axis:"Raped",value:0.56},
      {axis:"Strangled",value:0.41},
      {axis:"Hydrochloric Acid in Brain",value:0.00},
      {axis:"Dismembered",value:0.00},
      {axis:"Body Dissolved in Acid",value:0.00},
      {axis:"Drugged",value:0.41},
      {axis:"Eaten",value:0.00},
      {axis:"Handcuffed",value:0.26},
      {axis:"Decapitated",value:0.35},
      {axis:"Preserved",value:0.10},
      {axis:"Skull as Trophy",value:0.29},
      {axis:"Slashed",value:0.53}
      ],

      [
      {axis:"Bludgeoned",value:0.21},
      {axis:"Necrophilia",value:0.33},
      {axis:"Raped",value:0.79},
      {axis:"Strangled",value:0.71},
      {axis:"Hydrochloric Acid in Brain",value:0.00},
      {axis:"Dismembered",value:0.00},
      {axis:"Body Dissolved in Acid",value:0.00},
      {axis:"Drugged",value:0.68},
      {axis:"Eaten",value:0.00},
      {axis:"Handcuffed",value:0.69},
      {axis:"Decapitated",value:0.00},
      {axis:"Preserved",value:0.00},
      {axis:"Skull as Trophy",value:0.00},
      {axis:"Slashed",value:0.21}
      ]




    ];   
    
    
    
    
//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
/*   maxValue: .6,
  levels: 6, */
  maxValue: .8,
  levels: 8,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#radarChart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#radarChart')
  .selectAll('svg')
  .append('svg')
  // .attr("viewBox", `0 0 ${cfg.w+cfg.ExtraWidthX} ${cfg.h+cfg.ExtraWidthY}`)
  .attr("width", w+300)
  // .attr("width", w)
  .attr("height", h)

// //Create the title for the legend
var text = svg.append("text")
  .attr("class", "titleRadar")
  // .attr('transform', 'translate(-150,0)') 
  // .attr("x", w - 70 )
  // .attr("y", 10)
  .attr("y", 10)
  .attr("x", 225)
  .attr("dy", ".35em")
  .attr("font-size", "16px")
  .style("fill", "rgb(255, 255, 255)")
  //.style("fill", "#737373")
  .text("A Spider Plot for Sociopaths");




// // Features of the annotation
// const annotations = [
//   {
//     note: {
//       label: "Here is the annotation label",
//       title: "Annotation title"
//     },
//     x: 100,
//     y: 100,
//     dy: 100,
//     dx: 100
//   }
// ]

// // Add annotation to the chart
// const makeAnnotations = d3.annotation()
//   .annotations(annotations)
// d3.select("#radarChart")
//   .append("g")
//   .call(makeAnnotations)




//Initiate Legend 
var legend = svg.append("g")
  .attr("class", "legendRadar")
  .attr("height", 100)
  .attr("width", 200)
  .attr('transform', 'translate(200,20)') 
  ;
  //Create colour squares
  legend.selectAll('rect')
    .data(LegendOptions)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function(d, i){ return i * 20;})
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function(d, i){ return colorscale(i);})
    ;
  //Create text next to squares
  legend.selectAll('text')
    .data(LegendOptions)
    .enter()
    .append("text")
    .attr("id", "legendText")
    .attr("x", w - 52)
    .attr("y", function(d, i){ return i * 20 + 9;})
    .attr("font-size", "11px")
    .style("fill", function(d, i){ return colorscale(i);})
    .text(function(d) { return d; })
    ;


}





function radarChartTwo() {



var RadarChart = {
  draw: function(id, d, options){
  var cfg = {
   radius: 4,
   w: 600,
   h: 600,
   // w: 1200,
   // h: 1200,
   factor: 1,
   factorLegend: .85,
   levels: 3,
   maxValue: 0,
   radians: 2 * Math.PI,
   opacityArea: 0.5,
   ToRight: 5,
   TranslateX: 80,
   TranslateY: 48,
   ExtraWidthX: 100,
   ExtraWidthY: 100,
   color: d3.scale.category10()
  };
  
  if('undefined' !== typeof options){
    for(var i in options){
    if('undefined' !== typeof options[i]){
      cfg[i] = options[i];
    }
    }
  }
  cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i){return d3.max(i.map(function(o){return o.value;}))}));
  var allAxis = (d[0].map(function(i, j){return i.axis}));
  var total = allAxis.length;
  var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
  var Format = d3.format('%');
  d3.select(id).select("svg").remove();
  
  // var g = d3.select(id)
  //     .append("svg")
  //     .attr("width", cfg.w+cfg.ExtraWidthX)
  //     .attr("height", cfg.h+cfg.ExtraWidthY)
  //     .append("g")
  //     .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
  //     ;

  var g = d3.select(id)
      .append("svg")
      .attr("class", 'radarResTwo')
      .attr("viewBox", `0 0 ${cfg.w+cfg.ExtraWidthX} ${cfg.h+cfg.ExtraWidthY}`)
      // .attr("viewBox", `0 0 1200 600`)
      .append("g") 
      .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
      

  var tooltip;
  
  //Circular segments
  for(var j=0; j<cfg.levels-1; j++){
    var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
    g.selectAll(".levels")
     .data(allAxis)
     .enter()
     .append("svg:line")
     .attr("x1", function(d, i){return levelFactor*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
     .attr("y1", function(d, i){return levelFactor*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
     .attr("x2", function(d, i){return levelFactor*(1-cfg.factor*Math.sin((i+1)*cfg.radians/total));})
     .attr("y2", function(d, i){return levelFactor*(1-cfg.factor*Math.cos((i+1)*cfg.radians/total));})
     .attr("class", "line")
     .style("stroke", "grey")
     .style("stroke-opacity", "0.75")
     .style("stroke-width", "0.7px")
     .attr("transform", "translate(" + (cfg.w/2-levelFactor) + ", " + (cfg.h/2-levelFactor) + ")");
  }

  //Text indicating at what % each level is
  for(var j=0; j<cfg.levels; j++){
    var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
    g.selectAll(".levels")
     .data([1]) //dummy data
     .enter()
     .append("svg:text")
     .attr("x", function(d){return levelFactor*(1-cfg.factor*Math.sin(0));})
     .attr("y", function(d){return levelFactor*(1-cfg.factor*Math.cos(0));})
     .attr("class", "legend")
     .style("font-family", "Georgia")
     .style("font-size", "10px")
     .attr("transform", "translate(" + (cfg.w/2-levelFactor + cfg.ToRight) + ", " + (cfg.h/2-levelFactor) + ")")
     .attr("fill", "#737373")
     // .attr("fill", "rgb(143, 0, 255)")
     .text(Format((j+1)*cfg.maxValue/cfg.levels));
  }
  
  series = 0;

  var axis = g.selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis");

  axis.append("line")
    .attr("x1", cfg.w/2)
    .attr("y1", cfg.h/2)
    .attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
    .attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
    .attr("class", "line")
    .style("stroke", "grey")
    .style("stroke-width", "1px");

  axis.append("text")
    .attr("class", "legend")
    .text(function(d){return d})
    .style("font-family", "Georgia")
    .style("font-size", "11px")
    .attr("fill", "rgb(255, 255, 255)")
    //.attr("fill", "rgb(143, 0, 255)")
    .style("opacity", 0.7)
    .attr("text-anchor", "middle")
    .attr("dy", "3.5em")
    .attr("transform", function(d, i){return "translate(0, -10)"})
    .attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
    .attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total);});

 
  d.forEach(function(y, x){
    dataValues = [];
    g.selectAll(".nodes")
    .data(y, function(j, i){
      dataValues.push([
      cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
      cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
      ]);
    });
    dataValues.push(dataValues[0]);
    g.selectAll(".area")
           .data([dataValues])
           .enter()
           .append("polygon")
           .attr("class", "radar-chart-serie"+series)
           .style("stroke-width", "2px")
           .style("stroke", cfg.color(series))
           .attr("points",function(d) {
             var str="";
             for(var pti=0;pti<d.length;pti++){
               str=str+d[pti][0]+","+d[pti][1]+" ";
             }
             return str;
            })
           .style("fill", function(j, i){return cfg.color(series)})
           .style("fill-opacity", cfg.opacityArea)
           .on('mouseover', function (d){
                    z = "polygon."+d3.select(this).attr("class");
                    g.selectAll("polygon")
                     .transition(200)
                     .style("fill-opacity", 0.1); 
                    g.selectAll(z)
                     .transition(200)
                     .style("fill-opacity", .7);
                    })
           .on('mouseout', function(){
                    g.selectAll("polygon")
                     .transition(200)
                     .style("fill-opacity", cfg.opacityArea);
           });
    series++;
  });
  series=0;


  d.forEach(function(y, x){
    g.selectAll(".nodes")
    .data(y).enter()
    .append("svg:circle")
    .attr("class", "radar-chart-serie"+series)
    .attr('r', cfg.radius)
    .attr("alt", function(j){return Math.max(j.value, 0)})
    .attr("cx", function(j, i){
      dataValues.push([
      cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
      cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
    ]);
    return cfg.w/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total));
    })
    .attr("cy", function(j, i){
      return cfg.h/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total));
    })
    .attr("data-id", function(j){return j.axis})
    .style("fill", cfg.color(series)).style("fill-opacity", .9)
    .on('mouseover', function (d){
          newX =  parseFloat(d3.select(this).attr('cx')) - 10;
          newY =  parseFloat(d3.select(this).attr('cy')) - 5;
          
          tooltip
            .attr('x', newX)
            .attr('y', newY)
            .text(Format(d.value))
            .transition(200)
            .style('opacity', 1); 
            
          z = "polygon."+d3.select(this).attr("class");
          g.selectAll("polygon")
            .transition(200)
            .style("fill-opacity", 0.1); 
          g.selectAll(z)
            .transition(200)
            .style("fill-opacity", .7);
          })
    .on('mouseout', function(){
          tooltip
            .transition(200)
            .style('opacity', 0);
          g.selectAll("polygon")
            .transition(200)
            .style("fill-opacity", cfg.opacityArea);
          }) 
    .append("svg:title")
    .text(function(j){return Math.max(j.value, 0)});

    series++; 
  });
  //Tooltip
  tooltip = g.append('text')
         .style('opacity', 0)
         .style('font-family', 'Georgia')
         .style('font-size', '13px');
  }
};



/////////////////////////////////////////////////////////////////

var w = 500,
  h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Jeffrey Dahmer', 'Ted Bundy', 'John Wayne Gacy'];

//Data
  
 var d = [
      [
      //{axis:"Bludgeoned",value:0.06},
      {axis:"Bludgeoned",value:0.39},
      {axis:"Necrophilia",value:0.46},
      //{axis:"Battered",value:0.06},
      {axis:"Raped",value:0.32},
      {axis:"Strangled",value:0.57},
      {axis:"Hydrochloric Acid in Brain",value:.23},
      {axis:"Dismembered",value:0.76},
      {axis:"Body Dissolved in Acid",value:0.17},
      {axis:"Drugged",value:0.59},
      {axis:"Eaten",value:0.26},
      //{axis:"Handcuffed",value:0.06},
      {axis:"Handcuffed",value:0.47},
      {axis:"Decapitated",value:0.18},
      {axis:"Preserved",value:0.65},
      {axis:"Skull as Trophy",value:0.16},
      //{axis:"Slashed",value:0.06},
      {axis:"Slashed",value:0.47}
      ],

      [
      {axis:"Bludgeoned",value:0.71},
      {axis:"Necrophilia",value:0.27},
      {axis:"Raped",value:0.56},
      {axis:"Strangled",value:0.41},
      {axis:"Hydrochloric Acid in Brain",value:0.00},
      {axis:"Dismembered",value:0.00},
      {axis:"Body Dissolved in Acid",value:0.00},
      {axis:"Drugged",value:0.41},
      {axis:"Eaten",value:0.00},
      {axis:"Handcuffed",value:0.26},
      {axis:"Decapitated",value:0.35},
      {axis:"Preserved",value:0.10},
      {axis:"Skull as Trophy",value:0.29},
      {axis:"Slashed",value:0.53}
      ],

      [
      {axis:"Bludgeoned",value:0.21},
      {axis:"Necrophilia",value:0.33},
      {axis:"Raped",value:0.79},
      {axis:"Strangled",value:0.71},
      {axis:"Hydrochloric Acid in Brain",value:0.00},
      {axis:"Dismembered",value:0.00},
      {axis:"Body Dissolved in Acid",value:0.00},
      {axis:"Drugged",value:0.68},
      {axis:"Eaten",value:0.00},
      {axis:"Handcuffed",value:0.69},
      {axis:"Decapitated",value:0.00},
      {axis:"Preserved",value:0.00},
      {axis:"Skull as Trophy",value:0.00},
      {axis:"Slashed",value:0.21}
      ]




    ];   
    
    
    
    
//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
/*   maxValue: .6,
  levels: 6, */
  maxValue: .8,
  levels: 8,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#radarChartTwo", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#radarChartTwo')
  .selectAll('svg')
  .append('svg')
  // .attr("viewBox", `0 0 ${cfg.w+cfg.ExtraWidthX} ${cfg.h+cfg.ExtraWidthY}`)
  .attr("width", w+300)
  // .attr("width", w)
  .attr("height", h)

// //Create the title for the legend
var text = svg.append("text")
  .attr("class", "titleRadar")
  // .attr('transform', 'translate(-150,0)') 
  // .attr("x", w - 70 )
  // .attr("y", 10)
  .attr("y", 10)
  .attr("x", 225)
  .attr("dy", ".35em")
  .attr("font-size", "16px")
  .style("fill", "rgb(255, 255, 255)")
  //.style("fill", "#737373")
  .text("A Spider Plot for Sociopaths");




// // Features of the annotation
// const annotations = [
//   {
//     note: {
//       label: "Here is the annotation label",
//       title: "Annotation title"
//     },
//     x: 100,
//     y: 100,
//     dy: 100,
//     dx: 100
//   }
// ]

// // Add annotation to the chart
// const makeAnnotations = d3.annotation()
//   .annotations(annotations)
// d3.select("#radarChart")
//   .append("g")
//   .call(makeAnnotations)




//Initiate Legend 
var legend = svg.append("g")
  .attr("class", "legendRadar")
  .attr("height", 100)
  .attr("width", 200)
  .attr('transform', 'translate(200,20)') 
  ;
  //Create colour squares
  legend.selectAll('rect')
    .data(LegendOptions)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function(d, i){ return i * 20;})
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function(d, i){ return colorscale(i);})
    ;
  //Create text next to squares
  legend.selectAll('text')
    .data(LegendOptions)
    .enter()
    .append("text")
    .attr("id", "legendText")
    .attr("x", w - 52)
    .attr("y", function(d, i){ return i * 20 + 9;})
    .attr("font-size", "11px")
    .style("fill", function(d, i){ return colorscale(i);})
    .text(function(d) { return d; })
    ;
  


}





function radarChartThree() {



var RadarChart = {
  draw: function(id, d, options){
  var cfg = {
   radius: 4,
   w: 600,
   h: 600,
   // w: 1200,
   // h: 1200,
   factor: 1,
   factorLegend: .85,
   levels: 3,
   maxValue: 0,
   radians: 2 * Math.PI,
   opacityArea: 0.5,
   ToRight: 5,
   TranslateX: 80,
   TranslateY: 48,
   ExtraWidthX: 100,
   ExtraWidthY: 100,
   color: d3.scale.category10()
  };
  
  if('undefined' !== typeof options){
    for(var i in options){
    if('undefined' !== typeof options[i]){
      cfg[i] = options[i];
    }
    }
  }
  cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i){return d3.max(i.map(function(o){return o.value;}))}));
  var allAxis = (d[0].map(function(i, j){return i.axis}));
  var total = allAxis.length;
  var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
  var Format = d3.format('%');
  d3.select(id).select("svg").remove();
  
  // var g = d3.select(id)
  //     .append("svg")
  //     .attr("width", cfg.w+cfg.ExtraWidthX)
  //     .attr("height", cfg.h+cfg.ExtraWidthY)
  //     .append("g")
  //     .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
  //     ;

  var g = d3.select(id)
      .append("svg")
      .attr("class", 'radarResThree')
      .attr("viewBox", `0 0 ${cfg.w+cfg.ExtraWidthX} ${cfg.h+cfg.ExtraWidthY}`)
      // .attr("viewBox", `0 0 1200 600`)
      .append("g") 
      .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
      

  var tooltip;
  
  //Circular segments
  for(var j=0; j<cfg.levels-1; j++){
    var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
    g.selectAll(".levels")
     .data(allAxis)
     .enter()
     .append("svg:line")
     .attr("x1", function(d, i){return levelFactor*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
     .attr("y1", function(d, i){return levelFactor*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
     .attr("x2", function(d, i){return levelFactor*(1-cfg.factor*Math.sin((i+1)*cfg.radians/total));})
     .attr("y2", function(d, i){return levelFactor*(1-cfg.factor*Math.cos((i+1)*cfg.radians/total));})
     .attr("class", "line")
     .style("stroke", "grey")
     .style("stroke-opacity", "0.75")
     .style("stroke-width", "0.7px")
     .attr("transform", "translate(" + (cfg.w/2-levelFactor) + ", " + (cfg.h/2-levelFactor) + ")");
  }

  //Text indicating at what % each level is
  for(var j=0; j<cfg.levels; j++){
    var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
    g.selectAll(".levels")
     .data([1]) //dummy data
     .enter()
     .append("svg:text")
     .attr("x", function(d){return levelFactor*(1-cfg.factor*Math.sin(0));})
     .attr("y", function(d){return levelFactor*(1-cfg.factor*Math.cos(0));})
     .attr("class", "legend")
     .style("font-family", "Georgia")
     .style("font-size", "10px")
     .attr("transform", "translate(" + (cfg.w/2-levelFactor + cfg.ToRight) + ", " + (cfg.h/2-levelFactor) + ")")
     .attr("fill", "#737373")
     // .attr("fill", "rgb(143, 0, 255)")
     .text(Format((j+1)*cfg.maxValue/cfg.levels));
  }
  
  series = 0;

  var axis = g.selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis");

  axis.append("line")
    .attr("x1", cfg.w/2)
    .attr("y1", cfg.h/2)
    .attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
    .attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
    .attr("class", "line")
    .style("stroke", "grey")
    .style("stroke-width", "1px");

  axis.append("text")
    .attr("class", "legend")
    .text(function(d){return d})
    .style("font-family", "Georgia")
    .style("font-size", "11px")
    .attr("fill", "rgb(255, 255, 255)")
    //.attr("fill", "rgb(143, 0, 255)")
    .style("opacity", 0.7)
    .attr("text-anchor", "middle")
    .attr("dy", "3.5em")
    .attr("transform", function(d, i){return "translate(0, -10)"})
    .attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
    .attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total);});

 
  d.forEach(function(y, x){
    dataValues = [];
    g.selectAll(".nodes")
    .data(y, function(j, i){
      dataValues.push([
      cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
      cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
      ]);
    });
    dataValues.push(dataValues[0]);
    g.selectAll(".area")
           .data([dataValues])
           .enter()
           .append("polygon")
           .attr("class", "radar-chart-serie"+series)
           .style("stroke-width", "2px")
           .style("stroke", cfg.color(series))
           .attr("points",function(d) {
             var str="";
             for(var pti=0;pti<d.length;pti++){
               str=str+d[pti][0]+","+d[pti][1]+" ";
             }
             return str;
            })
           .style("fill", function(j, i){return cfg.color(series)})
           .style("fill-opacity", cfg.opacityArea)
           .on('mouseover', function (d){
                    z = "polygon."+d3.select(this).attr("class");
                    g.selectAll("polygon")
                     .transition(200)
                     .style("fill-opacity", 0.1); 
                    g.selectAll(z)
                     .transition(200)
                     .style("fill-opacity", .7);
                    })
           .on('mouseout', function(){
                    g.selectAll("polygon")
                     .transition(200)
                     .style("fill-opacity", cfg.opacityArea);
           });
    series++;
  });
  series=0;


  d.forEach(function(y, x){
    g.selectAll(".nodes")
    .data(y).enter()
    .append("svg:circle")
    .attr("class", "radar-chart-serie"+series)
    .attr('r', cfg.radius)
    .attr("alt", function(j){return Math.max(j.value, 0)})
    .attr("cx", function(j, i){
      dataValues.push([
      cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
      cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
    ]);
    return cfg.w/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total));
    })
    .attr("cy", function(j, i){
      return cfg.h/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total));
    })
    .attr("data-id", function(j){return j.axis})
    .style("fill", cfg.color(series)).style("fill-opacity", .9)
    .on('mouseover', function (d){
          newX =  parseFloat(d3.select(this).attr('cx')) - 10;
          newY =  parseFloat(d3.select(this).attr('cy')) - 5;
          
          tooltip
            .attr('x', newX)
            .attr('y', newY)
            .text(Format(d.value))
            .transition(200)
            .style('opacity', 1); 
            
          z = "polygon."+d3.select(this).attr("class");
          g.selectAll("polygon")
            .transition(200)
            .style("fill-opacity", 0.1); 
          g.selectAll(z)
            .transition(200)
            .style("fill-opacity", .7);
          })
    .on('mouseout', function(){
          tooltip
            .transition(200)
            .style('opacity', 0);
          g.selectAll("polygon")
            .transition(200)
            .style("fill-opacity", cfg.opacityArea);
          }) 
    .append("svg:title")
    .text(function(j){return Math.max(j.value, 0)});

    series++; 
  });
  //Tooltip
  tooltip = g.append('text')
         .style('opacity', 0)
         .style('font-family', 'Georgia')
         .style('font-size', '13px');
  }
};



/////////////////////////////////////////////////////////////////

var w = 500,
  h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Jeffrey Dahmer', 'Ted Bundy', 'John Wayne Gacy'];

//Data
  
 var d = [
      [
      //{axis:"Bludgeoned",value:0.06},
      {axis:"Bludgeoned",value:0.39},
      {axis:"Necrophilia",value:0.46},
      //{axis:"Battered",value:0.06},
      {axis:"Raped",value:0.32},
      {axis:"Strangled",value:0.57},
      {axis:"Hydrochloric Acid in Brain",value:.23},
      {axis:"Dismembered",value:0.76},
      {axis:"Body Dissolved in Acid",value:0.17},
      {axis:"Drugged",value:0.59},
      {axis:"Eaten",value:0.26},
      //{axis:"Handcuffed",value:0.06},
      {axis:"Handcuffed",value:0.47},
      {axis:"Decapitated",value:0.18},
      {axis:"Preserved",value:0.65},
      {axis:"Skull as Trophy",value:0.16},
      //{axis:"Slashed",value:0.06},
      {axis:"Slashed",value:0.47}
      ],

      [
      {axis:"Bludgeoned",value:0.71},
      {axis:"Necrophilia",value:0.27},
      {axis:"Raped",value:0.56},
      {axis:"Strangled",value:0.41},
      {axis:"Hydrochloric Acid in Brain",value:0.00},
      {axis:"Dismembered",value:0.00},
      {axis:"Body Dissolved in Acid",value:0.00},
      {axis:"Drugged",value:0.41},
      {axis:"Eaten",value:0.00},
      {axis:"Handcuffed",value:0.26},
      {axis:"Decapitated",value:0.35},
      {axis:"Preserved",value:0.10},
      {axis:"Skull as Trophy",value:0.29},
      {axis:"Slashed",value:0.53}
      ],

      [
      {axis:"Bludgeoned",value:0.21},
      {axis:"Necrophilia",value:0.33},
      {axis:"Raped",value:0.79},
      {axis:"Strangled",value:0.71},
      {axis:"Hydrochloric Acid in Brain",value:0.00},
      {axis:"Dismembered",value:0.00},
      {axis:"Body Dissolved in Acid",value:0.00},
      {axis:"Drugged",value:0.68},
      {axis:"Eaten",value:0.00},
      {axis:"Handcuffed",value:0.69},
      {axis:"Decapitated",value:0.00},
      {axis:"Preserved",value:0.00},
      {axis:"Skull as Trophy",value:0.00},
      {axis:"Slashed",value:0.21}
      ]




    ];   
    

    //Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
/*   maxValue: .6,
  levels: 6, */
  maxValue: .8,
  levels: 8,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#radarChartThree", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#radarChartThree')
  .selectAll('svg')
  .append('svg')
  // .attr("viewBox", `0 0 ${cfg.w+cfg.ExtraWidthX} ${cfg.h+cfg.ExtraWidthY}`)
  .attr("width", w+300)
  // .attr("width", w)
  .attr("height", h)

// //Create the title for the legend
var text = svg.append("text")
  .attr("class", "titleRadar")
  // .attr('transform', 'translate(-150,0)') 
  // .attr("x", w - 70 )
  // .attr("y", 10)
  .attr("y", 10)
  .attr("x", 225)
  .attr("dy", ".35em")
  .attr("font-size", "16px")
  .style("fill", "rgb(255, 255, 255)")
  //.style("fill", "#737373")
  .text("A Spider Plot for Sociopaths");




// // Features of the annotation
// const annotations = [
//   {
//     note: {
//       label: "Here is the annotation label",
//       title: "Annotation title"
//     },
//     x: 100,
//     y: 100,
//     dy: 100,
//     dx: 100
//   }
// ]

// // Add annotation to the chart
// const makeAnnotations = d3.annotation()
//   .annotations(annotations)
// d3.select("#radarChart")
//   .append("g")
//   .call(makeAnnotations)




//Initiate Legend 
var legend = svg.append("g")
  .attr("class", "legendRadar")
  .attr("height", 100)
  .attr("width", 200)
  .attr('transform', 'translate(200,20)') 
  ;
  //Create colour squares
  legend.selectAll('rect')
    .data(LegendOptions)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function(d, i){ return i * 20;})
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function(d, i){ return colorscale(i);})
    ;
  //Create text next to squares
  legend.selectAll('text')
    .data(LegendOptions)
    .enter()
    .append("text")
    .attr("id", "legendText")
    .attr("x", w - 52)
    .attr("y", function(d, i){ return i * 20 + 9;})
    .attr("font-size", "11px")
    .style("fill", function(d, i){ return colorscale(i);})
    .text(function(d) { return d; })
    ;
  


}