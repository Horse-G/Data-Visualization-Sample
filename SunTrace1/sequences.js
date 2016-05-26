// Dimensions of sunburst.
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 130, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
"Arts & Entertainment":"#a1d490",
"Books & Literature":"#90C3D4",
"Celebrity Fan/Gossip":"#C390D4",
"Fine Art":"#D4A190",
"Humor":"#40A2C2",
"Movies":"#90C3D4",
"Captain America":"#a1d490",
"50 Shades of Grey":"#90C3D4",
"Independence Day":"#C390D4",
"Psycho":"#D4A190",
"Music":"#40A2C2",
"Aerosmith":"#90C3D4",
"Queen":"#a1d490",
"Pink Floyd":"#90C3D4",
"Led Zeppelin":"#C390D4",
"Television":"#D4A190",
"Family Guy":"#40A2C2",
"How I Met Your Mother":"#90C3D4",
"Mr Robot":"#a1d490",
"Automotive":"#C390D4",
"4 Wheel Drive/SUVs":"#D4A190",
"Jeep Cherokee":"#40A2C2",
"Cadillac Escalade":"#90C3D4",
"Toyota 4Runner":"#a1d490",
"Auto Parts":"#90C3D4",
"Auto Repair":"#C390D4",
"Buying/Selling Cars":"#D4A190",
"Car Culture":"#40A2C2",
"Convertible":"#90C3D4",
"Coupe":"#a1d490",
"Crossover":"#90C3D4",
"Diesel":"#C390D4",
"Electric Vehicles":"#D4A190",
"Hatchback":"#40A2C2",
"Hybrid":"#90C3D4",
"Hyundai Sonata":"#a1d490",
"Honda Accord":"#90C3D4",
"Toyota Prius":"#C390D4",
"Luxury":"#D4A190",
"Lexus":"#40A2C2",
"BMW":"#90C3D4",
"Infinity":"#a1d490",
"Mercedes":"#90C3D4",
"MiniVan":"#C390D4",
"Motorcycles":"#D4A190",
"Off Road Vehicles":"#40A2C2",
"Pickup":"#90C3D4",
"Road Side Assistance":"#a1d490",
"Sedan":"#90C3D4",
"Performance Vehicles":"#C390D4",
"Trucks & Accessories":"#D4A190",
"Business":"#90C3D4",
"Advertising":"#a1d490",
"Agriculture":"#90C3D4",
"Biotech/Biomedical":"#C390D4",
"Business Software":"#D4A190",
"Construction":"#40A2C2",
"E Commerce":"#90C3D4",
"Entrepreneurs":"#a1d490",
"Financial Services":"#90C3D4",
"Forestry":"#C390D4",
"Government":"#D4A190",
"Graphic Design":"#40A2C2",
"Green Solutions":"#90C3D4",
"Human Resources":"#a1d490",
"Logistics":"#90C3D4",
"Management":"#C390D4",
"Marketing":"#D4A190",
"Metals":"#40A2C2",
"Non Profit Organizations":"#90C3D4",
"Power Industry":"#a1d490",
"Public Services":"#90C3D4",
"Purchasing":"#C390D4",
"Retail Industry":"#D4A190",
"SOHO":"#40A2C2",
"Telecom":"#90C3D4",
"Careers":"#90C3D4",
"Career Advice":"#C390D4",
"Career Planning":"#D4A190",
"College":"#40A2C2",
"Financial Aid":"#90C3D4",
"Job Fairs":"#a1d490",
"Job Search":"#90C3D4",
"Nursing":"#C390D4",
"Resume Writing/Advice":"#D4A190",
"Scholarships":"#40A2C2",
"Telecommuting":"#90C3D4",
"U.S. Military":"#a1d490",
"Education":"#C390D4",
"7 to 12 Educators":"#D4A190",
"Adult Education":"#40A2C2",
"Art History":"#90C3D4",
"College Admissions":"#a1d490",
"College Life":"#90C3D4",
"Distance Learning":"#C390D4",
"English as a 2nd Language":"#D4A190",
"Graduate School":"#40A2C2",
"Homeschooling":"#90C3D4",
"Homework/Study Tips":"#a1d490",
"K6 Educators":"#90C3D4",
"Language Learning":"#C390D4",
"Private School":"#D4A190",
"Special Education":"#40A2C2",
"Studying Business":"#90C3D4",
"Family & Parenting":"#a1d490",
"Adoption":"#90C3D4",
"Babies & Toddlers":"#C390D4",
"Daycare/Pre School":"#D4A190",
"Eldercare":"#40A2C2",
"Family Internet":"#90C3D4",
"Parenting K6 Kids":"#a1d490",
"Parenting Teens":"#90C3D4",
"Pregnancy":"#C390D4",
"Special Needs Kids":"#D4A190",
"Food & Drink":"#90C3D4",
"American Cuisine":"#a1d490",
"Barbecues & Grilling":"#90C3D4",
"Cajun/Creole":"#C390D4",
"Chinese Cuisine":"#D4A190",
"Cocktails/Beer":"#40A2C2",
"Coffee/Tea":"#90C3D4",
"Cuisine specific":"#a1d490",
"Desserts & Baking":"#90C3D4",
"Food Allergies":"#C390D4",
"Food Issues":"#D4A190",
"French Cuisine":"#40A2C2",
"Health/LowFat Cooking":"#90C3D4",
"Italian Cuisine":"#a1d490",
"Japanese Cuisine":"#90C3D4",
"Mexican Cuisine":"#C390D4",
"Vegan":"#D4A190",
"Vegetarian":"#40A2C2",
"Wine":"#90C3D4",
"Health & Fitness":"#90C3D4",
"Allergies":"#C390D4",
"Alternative Medicine":"#D4A190",
"Cholesterol":"#40A2C2",
"Cold & Flu":"#90C3D4",
"Dental Care":"#a1d490",
"Exercise":"#90C3D4",
"Herbs for Health":"#C390D4",
"Holistic Healing":"#D4A190",
"Men's Health":"#40A2C2",
"Nutrition":"#90C3D4",
"Physical Therapy":"#a1d490",
"Senior Health":"#90C3D4",
"Sexuality":"#C390D4",
"Weight Loss":"#D4A190",
"Women's Health":"#40A2C2",
"Hobbies & Interests":"#a1d490",
"Art/Technology":"#90C3D4",
"Arts & Crafts":"#C390D4",
"Beadwork":"#D4A190",
"Birdwatching":"#40A2C2",
"BoardGames/Puzzles":"#90C3D4",
"Candle & Soap Making":"#a1d490",
"Card Games":"#90C3D4",
"Chess":"#C390D4",
"Cigars":"#D4A190",
"Collecting":"#40A2C2",
"Comic Books":"#90C3D4",
"Drawing/Sketching":"#a1d490",
"Freelance Writing":"#90C3D4",
"Genealogy":"#C390D4",
"Getting Published":"#D4A190",
"Guitar":"#40A2C2",
"Home Recording":"#90C3D4",
"Inventors & Patents":"#a1d490",
"Jewelry Making":"#90C3D4",
"Magic & Illusion":"#C390D4",
"Needlework":"#D4A190",
"Painting":"#40A2C2",
"Photography":"#90C3D4",
"Radio":"#a1d490",
"Roleplaying Games":"#90C3D4",
"SciFi & Fantasy":"#C390D4",
"Scrapbooking":"#D4A190",
"Screenwriting":"#40A2C2",
"Stamps & Coins":"#90C3D4",
"Video & Computer Games":"#a1d490",
"Woodworking":"#90C3D4",
"Home & Garden":"#D4A190",
"Appliances":"#40A2C2",
"Entertaining":"#90C3D4",
"Environmental Safety":"#a1d490",
"Gardening":"#90C3D4",
"Home Repair":"#C390D4",
"Home Theater":"#D4A190",
"Interior Decorating":"#40A2C2",
"Landscaping":"#90C3D4",
"Remodeling & Construction":"#a1d490",
"Law, Gov't & Politics":"#C390D4",
"Immigration":"#D4A190",
"Legal Issues":"#40A2C2",
"Politics":"#90C3D4",
"U.S. Government Resources":"#a1d490",
"News":"#C390D4",
"International News":"#D4A190",
"Local News":"#40A2C2",
"National News":"#90C3D4",
"Personal Finance":"#90C3D4",
"Beginning Investing":"#C390D4",
"Credit/Debt & Loans":"#D4A190",
"Financial News":"#40A2C2",
"Financial Planning":"#90C3D4",
"Frugal Living":"#a1d490",
"Hedge Fund":"#90C3D4",
"Insurance":"#C390D4",
"Investing":"#D4A190",
"Mutual Funds":"#40A2C2",
"Options":"#90C3D4",
"Retirement Planning":"#a1d490",
"Stocks":"#90C3D4",
"Tax Planning":"#C390D4"
};

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

// Use d3.text and d3.csv.parseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("visit-sequences.csv", function(text) {
  var csv = d3.csv.parseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition.nodes(json)
      .filter(function(d) {
      return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors[d.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }



  
  //update text 

  d3.select("#hit")
      .text(d.value);
  d3.select("#coverageRate")
      .text((d.value/300000000).toPrecision(6));
  d3.select("#percentage")
      .text(percentageString);


  //customization ends here
	  

  d3.select("#explanation")
      .style("visibility", "");

  var sequenceArray = getAncestors(d);
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .each("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .style("visibility", "hidden");
}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.name + d.depth; });

  // Add breadcrumb and label for entering nodes.
  var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return colors[d.name]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.name; });

  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}

function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 130, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(colors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(colors))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("-");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
 	var foundChild = false;
 	for (var k = 0; k < children.length; k++) {
 	  if (children[k]["name"] == nodeName) {
 	    childNode = children[k];
 	    foundChild = true;
 	    break;
 	  }
 	}
  // If we don't already have a child node for this branch, create it.
 	if (!foundChild) {
 	  childNode = {"name": nodeName, "children": []};
 	  children.push(childNode);
 	}
 	currentNode = childNode;
      } else {
 	// Reached the end of the sequence; create a leaf node.
 	childNode = {"name": nodeName, "size": size};
 	children.push(childNode);
      }
    }
  }
  return root;
};