	
	$(document).ready(function(){

	
	var targetNumber = 55//Math.floor(Math.random()* 10)+1;
	

	$("#target").html(targetNumber);
	var counter = 0;
	var numberOptions = [1, 3, 5, 6];
	// var numberIndex = Math.floor(Math.random() * 2);
	// var increment = numberOptions[numberIndex];

	for(var i = 0; i < numberOptions.length; i++){
		// create an img tag for the gem images
		var imageCrystal = $("<img>");
		//create a class selector for the images
		imageCrystal.addClass("gems");
		//attach the images
		imageCrystal.attr("src","http://www.galleries.com/Rock_Crystal/rock_cry.jpg" );
		//data attribute so I can get a value for one of these
		imageCrystal.attr("dataCrystalValue", numberOptions[i]);
		// add the new images to the existing div id=gemDiv
		$("#gemDiv").append(imageCrystal);
	}


	$(".crystalImage").on("click", function(){
		
		// this is the jQuery version of the thing that got clicked
		var increment =$(this).attr("dataCrystalValue");
		counter += parseInt(increment);

		alert("You clicked a crystal: " + counter);

		if (counter == targetNumber){
		alert("You won!");
	} else if (counter > targetNumber){
		alert("You lost");
	}

	});


	




}); //This goes to the ready function. Leave it alone. 