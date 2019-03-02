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
	        $('.menu__responsive').addClass('menu__responsive-hide')
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

	