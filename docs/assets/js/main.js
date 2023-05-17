const themesHandle = () => {

	const STORAGE_KEY = 'currentTheme';
	const DEFAULT = 'dark';

	const themes = ['dark', 'orange', 'purple', 'red', 'sky-blue', 'blue', 'green'];

	const maxThemeIndex = themes.length - 1;

	const getCurrent = () => localStorage.getItem(STORAGE_KEY) || DEFAULT;

	const setCurrent = theme => $('html').addClass(theme) && localStorage.setItem(STORAGE_KEY, theme);

	const getNext = () => { 
		const nextIndex = themes.indexOf(getCurrent()) + 1;
		return themes[nextIndex > maxThemeIndex ? 0 : nextIndex];
	}

	const getPrevious = () => {
		const previousIndex = themes.indexOf(getCurrent()) - 1;
		return themes[previousIndex < 0 ? maxThemeIndex : previousIndex];
	}

	const removeCurrent = () => $('html').removeClass(getCurrent());

	const isNextThemeEvent = ({ key, ctrlKey, shiftKey}) => ['>', '.'].includes(key.toLowerCase()) && ctrlKey && shiftKey;
	const isPreviousThemeEvent = ({ key, ctrlKey, shiftKey}) => ['<', ','].includes(key.toLowerCase()) && ctrlKey && shiftKey;
	const isDarkThemeEvent = ({ key, ctrlKey, shiftKey}) => key.toLowerCase() === 'd' && ctrlKey && shiftKey;

	const next = () => removeCurrent() && setCurrent(getNext());

	const previous = () => removeCurrent() && setCurrent(getPrevious());

	const dark = () => removeCurrent() && setCurrent(DEFAULT);

	if ( getCurrent() !== DEFAULT ) {
		$('html').removeClass(DEFAULT) && setCurrent(getCurrent());
	}

	return {
		event: ({ originalEvent }) =>
			({
				handle: (
					isNextThemeEvent(originalEvent) && (() => next()) ||
					isPreviousThemeEvent(originalEvent) && (() => previous()) ||
					isDarkThemeEvent(originalEvent) && (() => dark()) ||
					(() => {})
				)
			})
	}
}


($ => {
	"use strict";
	const nav = $('nav');
  	const navHeight = nav.outerHeight();
  
	$('.navbar-toggler').on('click', () => {
    	if( !$('#mainNav').hasClass('navbar-reduce')) {
      		$('#mainNav').addClass('navbar-reduce');
    	}
  	});

  	// Preloader
  	$(window).on('load', () => {
    	if ($('#preloader').length) {
      		$('#preloader').delay(100).fadeOut('slow', () => $(this).remove());
    	}
  	});

  	// Back to top button

	const scrollTop = 0;
  	$(window).scroll(() => {
    	if ($(this).scrollTop() > 100) {
      		$('.back-to-top').fadeIn('slow');
    	} else {
      		$('.back-to-top').fadeOut('slow');
    	}
  	});

  	$('.back-to-top').click(() =>
  		$('html, body').animate({ scrollTop }, 1500, 'easeInOutExpo') && false
 	);

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", () =>
		$('html, body').animate({ scrollTop }, 1000)
	);

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", ({ target }) => {
		if (location.pathname.replace(/^\//, '') === target.pathname.replace(/^\//, '') && location.hostname == target.hostname) {
			const strollingTo = $(target.hash);
			if (strollingTo.length) {
				$('html, body').animate({
					scrollTop: (strollingTo.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", () =>
		$('.navbar-collapse').collapse('hide')
	);

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', () => {
		const pixels = 50; 
		const top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    	const typed_strings = $('.text-slider-items').text();
		new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ quotes owl /--*/
	$('#quote-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 5500,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				loop: true,
			}
		}
	});

	const themesHandler = themesHandle();

	$(window).on("keydown", event => themesHandler.event(event).handle());

})(jQuery);
