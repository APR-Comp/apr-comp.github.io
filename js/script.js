/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(100);
	});


	// navfixed
	$(window).scroll(function () {
		if ($('.navigation').offset().top > 50) {
			$('.navigation').addClass('nav-bg');
		} else {
			$('.navigation').removeClass('nav-bg');
		}
	});

	// masonry
	$('.masonry-wrapper').masonry({
		columnWidth: 1
	});

	// clipboard
	var clipInit = false;
	$('code').each(function () {
		var code = $(this),
			text = code.text();
		if (text.length > 2) {
			if (!clipInit) {
				var text, clip = new ClipboardJS('.copy-to-clipboard', {
					text: function (trigger) {
						text = $(trigger).prev('code').text();
						return text.replace(/^\$\s/gm, '');
					}
				});
				clipInit = true;
			}
			code.after('<span class="copy-to-clipboard">copy</span>');
		}
	});
	$('.copy-to-clipboard').click(function () {
		$(this).html('copied');
	});


	// match height
	$(function () {
		$('.match-height').matchHeight({
			byRow: true,
			property: 'height',
			target: null,
			remove: false
		});
	});

	// search
	$('#search-by').keyup(function () {
		if (this.value) {
			$(this).addClass('active')
		} else {
			$(this).removeClass('active')
		}
	})

	// Accordions
	$('.collapse').on('shown.bs.collapse', function () {
		$(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
	}).on('hidden.bs.collapse', function () {
		$(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
	});

})(jQuery);

function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}
};