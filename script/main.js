$.stellar({
	horizontalScrolling: false,
	hideDistantElements: false
});

$.extend($.lazyLoadXT, {
	edgeY:  2000
});

$(function(){
	$('#beach-shore').get(0).play().then(function() {}).catch(function() {
		$('body').addClass('autoplay-disabled');
	});
});