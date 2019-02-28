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


// BEER POP UP

	var button = $('#beer-button');
	var blackBlock = $('#black-block');
	var beerInfo = $('#beer_info_block');

	$(button).on('click', function(e){
		$(this).parent().siblings(blackBlock).addClass('beer-info-visible');
		$(this).parent().siblings(beerInfo).addClass('beer-info-visible');
		e.stopPropagation();
	})

	window.addEventListener('click', function(e){
		if ( blackBlock.hasClass('beer-info-visible') && e.target.className != 'beer_info_block') {
			blackBlock.removeClass('beer-info-visible');
			beerInfo.removeClass('beer-info-visible');
			e.stopPropagation();
		}

	})

	