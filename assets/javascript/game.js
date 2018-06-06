 
var crystalValues;
var wins =0;
var losses =0;
var targetValue =0;
var userTotal =0;
var buzzer= new Audio ('assets/images/buzzer.wav');
var gong = new Audio ('assets/images/gong.mp3');

function generateCrystalValues(){
	
	crystalValues = []; 

	for(var i=0; i< 4;){

		var randomNumber = Math.ceil(Math.random() * 12);

		if(crystalValues.indexOf(randomNumber) > -1){
			continue;
		}
		else {
			crystalValues[crystalValues.length] =randomNumber;
			i++;
		}
		
	} 

}

function targetNumber(){
	var randomNum =0;
	
	while( randomNum < 19  ){
		randomNum = Math.ceil(Math.random() * 120);
		
		if(randomNum > 19 && randomNum < 120){
			break;
		}
	}
	console.log("Target # = "+ randomNum);
	return randomNum;
}

$(document).ready(function() {
	
	targetValue = targetNumber();
	generateCrystalValues();
	
	console.log("Crystal values -->"+crystalValues);

	$("#crystal1").attr("crystalvalue",crystalValues[0]);
	$("#crystal2").attr("crystalvalue",crystalValues[1]);
	$("#crystal3").attr("crystalvalue",crystalValues[2]);
	$("#crystal4").attr("crystalvalue",crystalValues[3]);

	$("#targetNo").text(targetValue);

	$("img").on("click",function(){
	
		var selectedValue = parseInt($(this).attr("crystalvalue"));

		console.log( "Selected Crystal Val -->"+selectedValue);

		userTotal = userTotal + selectedValue;

		if(targetValue === userTotal){
			$("#currentscore").text(userTotal);
			gong.play();
			wins++;
			console.log("You win");
			$("#wins").text(wins);

			gameReset();

		}else if(userTotal > targetValue){
			$("#currentscore").text(userTotal);
			buzzer.play();
			losses++;
			console.log("you lose the game");
			$("#losses").text(losses);	
			gameReset();
		}
		else{

			$("#currentscore").text(userTotal);
	
		}

	});


	
	function gameReset() {
		userTotal =0;
		targetValue=0;

		$("#currentscore").text("0");

		targetValue = targetNumber();
		generateCrystalValues();

		console.log("Crystal values in Reset -->"+generateCrystalValues);
		
		$("#targetNo").text(targetValue);

		$("#crystal1").attr("crystalvalue",crystalValues[0]);
		$("#crystal2").attr("crystalvalue",crystalValues[1]);
		$("#crystal3").attr("crystalvalue",crystalValues[2]);
		$("#crystal4").attr("crystalvalue",crystalValues[3]);
	}

}); 