var dataRequest = new XMLHttpRequest();
var dataUrl =
"https://data.ny.gov/api/views/bhia-729m/rows.json?accessType=DOWNLOAD";
var btn = document.getElementById("btn");
var sendText = document.getElementById("results");

btn.addEventListener("click", function (){
    dataRequest.open("GET", dataUrl);
    dataRequest.onload = function () {
    var ourData = JSON.parse(dataRequest.responseText);
    sendText.innerHTML=(ourData.data[0][8]);
    };
   
    dataRequest.send();

});



/* From Tutorial */

/*
var ourRequest = new XMLHttpRequest();
var ourURL = 'https://raw.githubusercontent.com/stevecif/JSON/master/pets.json';
var btn = document.getElementById("btn");
var petContainer = document.getElementById("pet-info");

btn.addEventListener("click", function(){

	ourRequest.open('GET', ourURL);
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData[0]);
        renderHTML(ourData, "all");
	};
	ourRequest.send();
});


function renderHTML(data, amount) {
    var htmlString = "";
    
    if (amount == "all") {
        var amount = data.length;
    }
    
    for (i = 0 ; i < amount; i++ ) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes"
        
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
        
            htmlString += " " + data[i].foods.likes[ii] + " and"; 
            
        }
        
        htmlString = htmlString.slice(0, -4);
        htmlString += ".</p>";
        
    }
    
    petContainer.insertAdjacentHTML('beforeend', htmlString);
};


*/