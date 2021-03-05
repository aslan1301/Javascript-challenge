// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((UFOData) => {
    var row = tbody.append("tr");
    Object.entries(UFOData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  var button = d3.select("#filter-btn");

  button.on("click", runEnter);

  function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputvalue = inputElement.property("value")
    console.log(inputvalue)
    var filteredData = tableData.filter(x => x.datetime === inputvalue);
    tbody.html("")
    console.log(filteredData);
    filteredData.forEach((UFOData) => {
        var row = tbody.append("tr");
        Object.entries(UFOData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}