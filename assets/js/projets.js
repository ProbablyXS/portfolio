;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// FullHeight
	var fullHeight = function() {

        console.log(console.log(window.innerHeight));

		if ( !isiPad() && !isiPhone() ) {
			$('.headerAllProjets').css('height', window.innerHeight);
			$(window).resize(function(){
				$('.headerAllProjets').css('height', window.innerHeight);
                console.log(console.log(window.innerHeight));
			})
		}
	};

	// Document on load.
	$(function(){
		fullHeight();
	});


}());