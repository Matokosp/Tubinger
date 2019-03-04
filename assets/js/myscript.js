// MENU

	var menuShow = $('.menu__responsive').children(".menu__responsive--hidden").hasClass('show');

	function desplazar (){
		$('.menu__responsive--hidden').toggleClass('show');
		$('#hamburger').toggleClass('hamburguer-slide');
	}

	$('#hamburger').on('click', function(e){		
		desplazar();
		e.stopPropagation();
		menuShow = $('.menu__responsive').children(".menu__responsive--hidden").hasClass('show');
		console.log(menuShow)
	})
   
	window.addEventListener('click', function(e){
		// var menuHide = $('.menu-hide');
		if (menuShow === true && e.target.className != 'menu__responsive--hidden show') {
			// desplazar();
			$('.menu__responsive--hidden').removeClass('show');
			$('#hamburger').removeClass('hamburguer-slide');
		}		
		console.log(e.target)
	})

// MENU STYLE

// if (document.location.pathname == "about.html") {
//     console.log(document.URL);
// }
	var sectionOne = $('#section1').offset();
	var sectionTwo = $('#section2').offset();
	var position = $(window).scrollTop();

	// should start at 0

	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();
	    if( scroll > position ) {
	        console.log('scrollDown');
	        $('.menu__responsive').removeClass('menu__responsive-show');
	        $('.menu__responsive').addClass('menu__responsive-hide');
	        
	    }

	    if( scroll < position ) {
	    	$('.menu__responsive').removeClass('menu__responsive-hide')
	    	$('.menu__responsive').addClass('menu__responsive-show');
	        console.log('scrollUp');	        
	    }
	    // else {
	    //      console.log('scrollUp');	         
	    // }
	    position = scroll;
	});

	var x = window.matchMedia("(min-width: 1200px)")

	function myFunction(x) {
	  if (x.matches) { // If media query matches

	  		var windowHeight = $( window ).height();
	  		var position = $(window).scrollTop();
	  		// SCROLL UP & DOWN
		    $(window).scroll(function() {
			    var scroll = $(window).scrollTop();
			    if( scroll > position ) {
			        $('.main_menu').addClass('main_menu-hide');
			    }
			    if( scroll < position ) {
			    	$('.main_menu').removeClass('main_menu-hide');	        
			    }
			    // else {
			    //      console.log('scrollUp');	         
			    // }
			    position = scroll;
			});

			$(window).scroll(function(){
				if ( $(window).scrollTop() >= sectionTwo.top * 1 / 2) {
			    	$('.main_menu').addClass('main_menu-white');
			    	$('.main_menu-link').css('color', '#000');
			    } else {
			    	$('.main_menu').removeClass('main_menu-white');
			    	$('.main_menu-link').css('color', '#fff');
			    	$('.main_menu').removeClass('main_menu-hide');	
			    }

			})

			

		    


	  } 
	}
	
	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes


// BEER POP UP

	var button = $('.link__button');
	var blackBlock = $('.black-block');
	var beerInfo = $('.beer_info_block');

	$(button).on('click', function(e){
		$(this).parent('.beer__item-description').siblings(blackBlock).addClass('beer-info-visible');
		$(this).parent('.beer__item-description').siblings(beerInfo).addClass('beer-info-visible');
		e.stopPropagation();

		window.addEventListener('click', function(e){
			if ( blackBlock.hasClass('beer-info-visible') && e.target.className != 'beer_info_block') {
				blackBlock.removeClass('beer-info-visible');
				beerInfo.removeClass('beer-info-visible');
				e.stopPropagation();
			}

		})
	})

	