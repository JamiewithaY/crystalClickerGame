	
	
	$(document).ready(function(){


	//variables

	var counter = 0;
	var wins= 0;
	var losses = 0;

	

	function randomNum(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min +1)) + min;

	}

	var targetNumber = randomNum(40,90);
	$("#target").html(targetNumber);

	var crystalOne= randomNum(1, 12);
	var crystalTwo= randomNum(1, 12);
	var crystalThree= randomNum(1, 12);
	var crystalFour= randomNum(1, 12);


	function reset(){
		counter = 0;
		$("#target").html(targetNumber);
		targetNumber = randomNum(40,90);
		$("#playerScore").text(counter);
		crystalOne= randomNum(1, 12);
		crystalTwo= randomNum(1, 12);
		crystalThree= randomNum(1, 12);
		crystalFour= randomNum(1, 12);


	}

	
	$("#greenGem").on("click", function(){
		counter += crystalOne;
		WinLoose();
		$(playerScore).text(counter);
		
	});

	$("#whiteGem").on("click", function(){
		counter += crystalTwo;
		WinLoose();
		$(playerScore).text(counter);
		

	});

	$("#yellowGem").on("click", function(){
		counter += crystalThree;
		WinLoose();
		$(playerScore).text(counter);
		

	});

	$("#redGem").on("click", function(){
		counter += crystalFour;
		WinLoose();
		$(playerScore).text(counter);
		

	});

	function WinLoose (){

	if (counter === targetNumber){
		wins += 1;
		alert("Winner!");
		$(win).text(wins);
		reset();

	} else if(counter > targetNumber){
		losses += 1;
		alert("You suck sooo bad!");
		$(loss).text(losses);
		reset();
	}
	
}
	
}); //This goes to the ready function. Leave it alone. 




	


