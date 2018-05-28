/*content enabled*/
setTimeout(function(){
	$('body .preloader').animate({
		opacity: 0
	}, 1500, function(){
		$('body .preloader').hide().parent().removeClass('load');
	});
}, 4000);