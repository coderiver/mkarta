$(document).ready(function() {

	$('.js-time a').on('click', function() {
		var section = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(section).offset().top - 10
		}, 500);
		return false;
	});

	// social fixed
	function stickySocial() {
		if ($('.js-sticky').length) { 
			var el = $('.js-sticky');
			var stickyTop = $('.js-sticky').offset().top; 
			var footerTop = $('.js-sticky-end').offset().top; 
			var stickyHeight = $('.js-sticky').outerHeight();
			var limit = footerTop - stickyHeight;
			$(window).scroll(function(){ 
				var windowTop = $(window).scrollTop();
				if ($(window).width() >= 1150) {
				
					if (stickyTop < windowTop){
						el.css({ position: 'fixed', top: 0 });
						el.addClass('is-active');
					}
					else {
						el.css('position','static');
						el.removeClass('is-active');
					}

					if (limit < windowTop) {
						var diff = limit - windowTop;
						el.css({top: diff});
					} 
				} 
			});
		}
	};
	stickySocial();
});