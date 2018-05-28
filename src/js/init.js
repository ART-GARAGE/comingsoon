/*content enabled*/
$(window).on('load', function(){
	var preloader = $('body .preloader');
	setTimeout(function(){
		preloader.animate({
			opacity: 0
		}, 1500, function(){
			preloader.hide().parent().removeClass('load');
		});
	}, 4000);
});