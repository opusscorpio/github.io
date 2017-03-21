$(document).ready(function() {

	

	

	

      

	$.fn.menumaker = function(options) {

      

    var cssmenu = $(this), settings = $.extend({

        title: "Menu",

        format: "dropdown",

        sticky: false

      }, options);



      return this.each(function() {

		

		cssmenu.prepend('<div id="menu-button"><span></span><span></span><span></span>' + settings.title + '</div>');

		$(this).find("#menu-button").on('click', function(){

		  $(this).toggleClass('menu-opened');

		  $('.effect-oscar').css('pointer-events', 'none');
		  $('body').css('overflow', 'hidden');

		  var mainmenu = $(this).next('ul');

		  if (mainmenu.hasClass('open')) { 

			mainmenu.slideUp().removeClass('open');

			$('.effect-oscar').css('pointer-events', 'auto');
			$('body').css('overflow', 'auto');

		  }

		  else {

			mainmenu.slideDown().addClass('open');

			$('.effect-oscar').css('pointer-events', 'none');
			$('body').css('overflow', 'hidden');

			if (settings.format === "dropdown") {

			  mainmenu.find('ul').slideDown();

			  $('.effect-oscar').css('pointer-events', 'none');
			  $('body').css('overflow', 'hidden');

			}

		  }

		});

		

		cssmenu.find('li ul').parent().addClass('has-sub');



		multiTg = function() {

		  cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');

		  cssmenu.find('.submenu-button').on('click', function() {

			$(this).toggleClass('submenu-opened');

			if ($(this).siblings('ul').hasClass('open')) {

			  $(this).siblings('ul').removeClass('open').slideUp();

			}

			else {

			  $(this).siblings('ul').addClass('open').slideDown();

			}

		  });

		};



		if (settings.format === 'multitoggle') multiTg();

		else cssmenu.addClass('dropdown');

		

		

      });

	};

	

	$(".navy").menumaker({

		title: "Navigation",

		format: "multitoggle"

	});

	

	

		$('#menu-button').click(function(){

		$(this).toggleClass('open');

	});

	

	

	new AnimOnScroll( document.getElementById( 'grid' ), {

				minDuration : 0.4,

				maxDuration : 0.7,

				viewportFactor : 0.2

			} );

	

});

