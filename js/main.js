$("#submitBtn").on("click", function() {
	//CLEAR LIST WHEN BUTTON CLICKED, THEN POPULATE WITH NEW LIST ITEMS
	$("#recycleCenters").empty();
	var str = $("#location").val();
	//if (str.length === 5) {
	console.log("FACILITY BTN CLICKED" + "\n" + str);
	var test = $.getJSON("https://s3-us-west-2.amazonaws.com/s.cdpn.io/523048/dataset.json", function(data) {
		var testObj = data;

		//IF IT'S A NUMBER, SEARCH ZIP CODES
		if ($.isNumeric(str)) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].Zip_Code === str) {
					var details = [data[i].Zip_Code,
						data[i].Facility_Name,
						data[i].County,
						data[i].Street_Address,
						data[i].City,
						data[i].State,
						data[i].Zip_Code,
						data[i].Contact_Name,
						data[i].Contact_Email,
						data[i].Phone_Number,
						data[i].Extension,
						data[i].Website
					]
					/* Trying to run through the array and see if each one is empty and then only appending the ones that aren't.
					for (var j = 0;j <= details.length;j++){
						$("#recycleCenters").append("<li>J EQUALS: " + details[j] + "</li>");
					}
					*/	
					
					
					$("#recycleCenters").append("<li>Facility Name: " + data[i].Facility_Name + "</li>");
					$("#recycleCenters").append("<li>County: " + data[i].County + "</li>");
					$("#recycleCenters").append("<li>Street Address: " + data[i].Street_Address + "</li>");
					$("#recycleCenters").append("<li>City: " + data[i].City + "</li>");
					$("#recycleCenters").append("<li>State: " + data[i].State + "</li>");
					$("#recycleCenters").append("<li>Zip Code: " + data[i].Zip_Code + "</li>");
					$("#recycleCenters").append("<li>Contact Name: " + data[i].Contact_Name + "</li>");
					//COMMENTED OUT IF STATEMENT WOULD MAKE IT ONLY DISPLAY IF THERE WAS DATA TO DISPLAY
					//if (data[i].Contact_Email) {
					$("#recycleCenters").append("<li>Contact Email: " + data[i].Contact_Email + "</li>");
					//}
					$("#recycleCenters").append("<li>Phone Number: " + data[i].Phone_Number + "</li>");
					$("#recycleCenters").append("<li>Extension: " + data[i].Extension + "</li>");
					$("#recycleCenters").append("<li>Website: " + data[i].Website + "</li>");
					//OPTIONAL WAY TO STYLE LIST ITEMS (probably dont do inline tho)
					$("#recycleCenters > li").addClass("list-group-item");
					//$("#recycleCenters > li").addClass("bg-info");
				}

			}
		}

		/* LIST ALL ZIP CODES - If needed for testing reasons
		for (var i = 0; i < data.length; i++) {
			//console.log(JSON.stringify(data[i].Zip_Code));
			$("#recycleCenters").append("<li>" + data[i].Zip_Code + "</li>");
		}
		*/
		/*
		console.log(JSON.stringify(testObj));
		$.each(data, function(key, val){
			var listItem = JSON.stringify(data);	
		});
		*/
	});
});