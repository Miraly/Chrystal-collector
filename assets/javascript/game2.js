	var number;
	var gem1;
	var gem2;
	var gem3;
	var gem4;
	var total = 0;
	var winCounter = 0;
	var loseCounter = 0;

	$(document).ready(function() {
		number = Math.floor((Math.random() * 101) + 19);
		$('#givenNumber').text(number);
		
		gem1 = Math.floor((Math.random() * 11) + 1);
		
		gem2 = Math.floor((Math.random() * 11) + 1);
		if (gem1 === gem2) {
		gem2 = Math.floor((Math.random() * 11) + 1);
		}
		
		gem3 = Math.floor((Math.random() * 11) + 1);
		if (gem1 === gem3 || gem2 === gem3 ) {
		gem3 = Math.floor((Math.random() * 11) + 1);
		}
						
		gem4 = Math.floor((Math.random() * 11) + 1);
		if (gem1 === gem4 || gem2 === gem4 || gem3 === gem4 ) {
		gem4 = Math.floor((Math.random() * 11) + 1);
		}
		
		$("#gem1").val(gem1);
		$("#gem2").val(gem2);
		$("#gem3").val(gem3);
		$("#gem4").val(gem4);
		
		$("button").click(function() {
			console.log(this);
			total = parseInt(total) + parseInt($(this).val());  
			$("p").html(total);
			
			if (total == number) {
			winCounter++;
			$("#wins").html("Wins: " + winCounter);
			} else if (total > number) {
    		loseCounter++;
			$("#losses").html("Losses: " + loseCounter);
			}
		});
		
		
		

	});
