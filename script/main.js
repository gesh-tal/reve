
$(document).ready(function(){

	$(".carousel1").owlCarousel({
		items:1,
		loop:true,
		dots:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplaySpeed:800,
		pagination:false
	});

	$(".carousel2").owlCarousel({
		items:4,
		loop:true,
		dots:false,
		autoplay:true,
		autoplayTimeout:6000,
		autoplaySpeed:1000,
		pagination:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			},
			1400:{
				items:4
			}
		}
	});

	$('.mobile_menu').on('click', () => {
		$('.header_bottom').fadeIn(400);
		$('.header_bottom').css('display', 'flex');
		if( $('.mobile_menu').css('display', 'flex')) {
			$('.mobile_menu').css('opacity', '0');
		};
	});

	$('.mobile_close').on('click', () => {
		$('.header_bottom').fadeOut(400);
		if( $('.header_bottom').fadeOut(400)) {
			$('.mobile_menu').css('opacity', '1');
		};
	});
});
