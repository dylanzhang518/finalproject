var data = $.getJSON("dataset.json", function() {
    console.log("success");
});

var stringed = JSON.stringify(data);

console.log(data);

$("#submitBtn").on("click", function(){
    console.log("FACILITY BTN CLICKED");
});

$.each(data, function(i, item) {
    console.log(data.result[i].County);
});


/*

var btn = document.getElementById("cityName");
var sendText = document.getElementById("results");
var city = $("#cityName");

$("#cityName").on("click", function() {
    $("#recycleCenters").html("testing123");
    
});




/*

$.ajax({
    url:"https://data.ny.gov/api/views/bhia-729m/rows.xml?accessType=DOWNLOAD",
    dataType: "xml",
    success: function(data) {
        console.log(

        );
    }
});




$("#submitBtn").on("click", function(){
    console.log("FACILITY BTN CLICKED");
    $("#recycleCenters").html("Facilities: " + $facility);
});

*/







/******************************************** 


btn.addEventListener("click", function (){
    dataRequest.open("GET", dataUrl);
    dataRequest.onload = function () {
    var ourData = JSON.parse(dataRequest.responseText);
    sendText.innerHTML=(ourData.data[0][8]);
    };
   
    dataRequest.send();

});



*********************************************/
