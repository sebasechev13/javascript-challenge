// from data.js
var tableData = data;

// select the tbdoy 
tbody = d3.select('tbody')

// select the submit nbutton 
var submit = d3.select("#filter-btn")

// function that dispaus UFO sightings 
function init(data1) {
    tbody.text("")
    data.forEach(function(sightings){
        new_tr = tbody.append("tr")
        Object.entries(sightings).forEach(function([key,value]){
            new_td = new_tr.append("td").text(value)
        })

    })
}
init(tableData)

// do the filter 

submit.on("click", function(){
    // prevent from page refreshing 
    d3.event.preventDefault();

    //clearing the previous table data
    tbody.html("");

    //get the data entered in text box 
    //var inputElement = d3.select(#filtertype).focus()
    var inputValue = d3.select("#datetime").node().value;
    //filter Data based on input value
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
    console.log(filteredData);

    //displaying the data
    filteredData.forEach(function(sightings){
        new_tr = tbody.append("tr")
        Object.entries(sightings).forEach(function([key,value]){
            new_td = new_tr.append("td").text(value)
        })

    })


})

