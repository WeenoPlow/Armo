
/*




        $.getJSON('games.js', function(data) {
          $('#IBarTap').click(function() {
            $('#Modalcontent').add('<h2 class="col-md-11">' + data + '</h2>');
            console.log(data.bartap);
          
        });
*/


/*$(document).on('cssmodal:show', function () {
    $.getJSON('games.json', function(data) {
    	$('.modal-content').add('<h2 class="col-md-11">' + data + '</h2>');
    });
});*/

/*$(function () {

    $('.action').click(function(event) {  
   		event.preventDefault(); 
        $.ajax('js/games.json', {}, function(data) {
        	debugger;
        	console.log(data);
        	$('.modal-content').append('<p id="description" class="col-md-8">' + data.bartap + '</p>');
      	});
    });  
});*/

(function() {

	'use strict';

	var gameTemplate;

	$.ajax({
		url     : 'game.tpl.html',
		success : function(template) {
			gameTemplate = $(template);
			downloadGameData();
		}
	});

	function downloadGameData() {

		var gameTargetEl = $('#games');

		$.ajax({
			type     : 'GET',
			url      : 'js/games.json',
			timeout  : 3000,
			dataType : 'json',
			success  : onSuccess,
			error    : function() {
			  console.log('La requête n\'a pas abouti', arguments); 
			}
		});

		function onSuccess(data) {
			for (var key in data) {
				if (data.hasOwnProperty(key)) {
					var gameData = data[key],
						templateClone = gameTemplate.clone();

					templateClone.find('.img-target').attr('src', gameData.imgGame);
					templateClone.find('.title-target').append(gameData.title);
					templateClone.find('.desc-target').append(gameData.desc);
					templateClone.find('.data-store').data(gameData);

					templateClone.find('.action').on('click', function() {
						
						var gameData = $(this).parents('.game-template').find('.data-store').data(),
							modalEl = $('#modalGames');

						modalEl.find('#modal-label').html(gameData.title);
						modalEl.find('.IMG-modalgame').attr('src', gameData.imgGame);
						modalEl.find('#desc-modalgame').html(gameData.desc);

						/*________________Gallery apercu des jeux______________*/
						modalEl.find('.visu1').attr('src', gameData.images[0].url);
						modalEl.find('.visu2').attr('src', gameData.images[1].url);
						modalEl.find('.visu3').attr('src', gameData.images[2].url);
						modalEl.find('.visu4').attr('src', gameData.images[3].url);

						/*___________________Gallery dans la lightbox_______________*/
						modalEl.find('#visu1').attr('href', gameData.images[0].url);
						modalEl.find('#visu2').attr('href', gameData.images[1].url);
						modalEl.find('#visu3').attr('href', gameData.images[2].url);
						modalEl.find('#visu4').attr('href', gameData.images[3].url);

						/*____________________________QRcodes________________________*/
						modalEl.find('#andro a').attr('href', gameData.store[0].url);
						modalEl.find('#wphone a').attr('href', gameData.store[1].url);
						modalEl.find('#apple a').attr('href', gameData.store[2].url);
					});
					
					gameTargetEl.append(templateClone);
				}
			}
		}
	}
    
        /*______________________Smooth Scroll_____________________*/
		$('.scrollto[href^="#"]').on('click',function (e) {
			    e.preventDefault();

			    var target = this.hash;
			    var $target = $(target);

			    $('html, body').stop().animate({
			        'scrollTop': $target.offset().top
			    }, 900, 'swing', function () {
			        window.location.hash = target;
			    });
		});
		

})();