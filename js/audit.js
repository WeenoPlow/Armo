

var price2 = 0;
var price1 = 0;
var price = 1000;
var price3 = 0;
var price4 = 0;
var price5 = 0;
var price6 = 0;

// /*			function BooleanRadio (BooleanRadio) {
// */			function BooleanRadio (BooleanRadio) {
// 				if (this.value == "Yes") {price = price + 2000;};
// 			}*/
// 			}*/
//
// 			/*if ($(':radio[id="Multi-0"]:checked').val("Yes")) { price = price +1000;};
// 			if ($(':radio[id="Multi-1"]:checked').val()) { price = price -1000;};
// 			*/
// 			*/
// 	/*		if ($(':radio[id="assets-0"]:checked').val()) {
// 			$('.audit-display').css('display','block');
// 				price = price +0;
// 			}*/
// 			}*/
// /*			function Audit (BtnRadio) {
// 				if (BtnRadio.value == "yes") {price = price + 0;};
// 				if (BtnRadio.value == "no") {
// 					$(".audit-display").('audit-display');
// 				};
// 			};*/
// 			};*/


// window.onload = function(){
// 	$(".audit-display").hide('slow')
// 	$(".graphics-display").hide('fast');}
	function affiche()
	{$(".audit-display").show('slow')};

	function cache()
	{$(".audit-display").hide('slow')
	$(".graphics-display").hide('slow');};

	function afficheGraphics() {
		$(".graphics-display").show('slow');
	};
	function cacheGraphics() {
		$(".graphics-display").hide('slow');
	};

			function multiCh() {
				console.log(price1);
				if(document.getElementById('Multi-0').checked === true){
					price1 += 1000;

				}else if(document.getElementById('Multi-1').checked === true){

					price1 =  0;

				}

				console.log(price1);
				return price1;
			};

		function GameTypeCh() {

				var gametype = document.getElementById("GameType").value;
				console.log(gametype);
				if(gametype == 'None'){
					price2 = 0;
				}else if (gametype == 'Action') {
					price2 = 1700;
					console.log("Action");
				}else if (gametype == 'Arcade') {
					price2 = 1500;
					console.log("Arcade");
				}else if (gametype == 'Educational') {
					price2 = 2000;
					console.log("Educ");
				}else if (gametype == 'Strategy') {
					price2 = 2000;
					console.log("Strategy");
				}else if (gametype == 'Roleplaying') {
					price2 = 2500;
					console.log("RP");
				}else if (gametype == 'Boardgames') {
					price2 = 2000;
					console.log("BG");
				}else if (gametype == 'Reflexion') {
					price2 = 1500;
					console.log("Reflexion");
				}else if (gametype == 'Music') {
					price2 = 2000;
					console.log("Music");
				}else if (gametype == 'Other') {
					price2 = "TBA"
					console.log("Other");
				}
				console.log(price2);
				return price2;
			};
			function Plateform(checkboxes) {
				var ios = document.getElementById('checkbox1').checked;
				var android = document.getElementById('checkbox2').checked;
				var winphone = document.getElementById('checkbox3').checked;
				var web = document.getElementById('checkbox4').checked;
				var c1 = c2 = c3 = c4 = 0;

					if (ios == true ) {c1 +=1000;}else {c1 = 0;};
					if (android == true) {c2 += 1000;}else {c2=0;}
					if (winphone == true) {c3 += 1000;}else {c3 =0;}
					if (web == true) {c4+= 1000;}else {c4 = 0;};
					console.log(c1);
					console.log(c2);
					console.log(c3);
					console.log(c4);
					price3 = c1 + c2 + c3 + c4;
					console.log(price3);
					return price3;
				};
				function Providedgraphics() {
					if(document.getElementById('pGraphics-0').checked === true){
						price4 = 0;
					}else if(document.getElementById('pGraphics-1').checked === true){

						price4 =  2000;
					};

					console.log(price4);
					return price4;
				};


				function Graphics() {
					if(document.getElementById('graphics-0').checked === true){
						price5 +=1000;

					}else if(document.getElementById('graphics-1').checked === true){
						price5 = 0;
					}

					console.log(price5);
					return price5
				};

				function Sound() {
					if(document.getElementById('SoundDesign-0').checked === true){
						price6 = 0;

					}else if(document.getElementById('SoundDesign-1').checked === true){
						price6 = 1000;
					}

					console.log(price6);
					return price6
				};

				function Submit() {
					event.preventDefault();
					if (price2 == 0) {
					 $('.price-target').html("Choose a game type");
					 console.log("Other");
				 }else if (price2 == "TBA") {
				 		$('.price-target').html('TBA');
				 } else{
					 price = price + price1 + price2 + price3 + price4 + price5 + price6
					 console.log(price);
					 $('.price-target').html(price + '€');
					 price = 1000;
				 	};
				 };



			//function Plateform(checkboxes) {
				// var plateform = getElementsByClassName('checkboxes');
				// var count= 0;
				// for (var i = 0; i < plateform.length; i++) {
				// 	if (plateform[i].type=="checkbox" && plateform[i].checked == true) {
				// 		count ++;
				// 		console.log(price4);
				// 	}else {
				// 		count --;
				// 		console.log(price4);
				// 	}
				// 	price4 = count*600;
				// 	console.log(price4);
				// };
				// };


				// if(checkboxes.checked == true){
				// 	price4 += 600;
				// 	console.log(price4);
				// }else{
				// 	price4 -= 0;
				// }
				// console.log(price4);

				// var plateform = $('.CheckPlateform input');
					// if (plateform.checked == true) {
					// 	price4 = price4 + 600;
					// 	console.log(price4);
					// }else {
					// 	price4 = 0;
					// }

			// 		for (var i=0; i<plateform.length; i++) {
    	// 			if (plateform[i].checked) {
      //   			if i=0
			// 				 pri0=600
			// 				else if (i=1) {
			//
			// 				}
			// 			}else {
			// 				price4 = 0;
			// 			}
			// 			console.log(price4);
			// 		}
			//
			//
			// 	console.log(price4);




				//
				// price = price + price2 + price3;
				// $('.price-target').html(price);



/*
		$('.audit-form').submit(function (e) {
			e.preventDefault();
			$('input:radio[id="Multi-0]"').val() {price = price + 1000;});
		});*/
