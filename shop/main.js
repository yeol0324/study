$(function(){

  //헤더
	var $menu = $('#one > li');
	var $header = $('#header_wrap');
	var $headerHeight = $header.outerHeight(true);

	$menu.mouseenter(function(){
		var subHeight = $(this).find('.two').outerHeight();

		$header.stop().animate({'height':$headerHeight + subHeight},100);
		$(this).find('.two').stop().fadeIn();
	});

	$menu.mouseleave(function(){
		$header.stop().animate({'height':$headerHeight},100);

		$(this).find('.two').stop().fadeOut();
	});
	//헤더

	//로그인
	$('.message a').click(function(){
  	$('.login form').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
	});

	$('.l_btn').click(function(){
		$('.login_wrap').fadeIn();
	});
	$('.login_wrap').click(function(){
		$(this).fadeOut();
	});
	$('.login').click(function(e) {
		e.stopPropagation();
	});


		var $header_fix = $header.offset();
//스크롤 이벤트
		$(window).scroll(function(){
			//헤더 고정
			if($(this).scrollTop() > $header_fix.top){
				$('#header_wrap').addClass('fix')
				$('.p-wrap').addClass('padding')
			}else{
				$('#header_wrap').removeClass('fix')
				$('.p-wrap').removeClass('padding')
			}

			if($(this).scrollTop() > $('aside').offset().top-100){

				$('aside ul').addClass('side_fix')
			}else{
				$('aside ul').removeClass('side_fix')
			}

			if($(this).scrollTop() > $('#top').offset().top-200){
				$('.scroll').removeClass('on')
				$('.scroll').eq(0).addClass('on')
			}
			if($(this).scrollTop() > $('#outer').offset().top-200){
				$('.scroll').removeClass('on')
				$('.scroll').eq(1).addClass('on')
			}
			if($(this).scrollTop() > $('#bottom').offset().top-200){
				$('.scroll').removeClass('on')
				$('.scroll').eq(2).addClass('on')
			}
			if($(this).scrollTop() > $('#acc').offset().top-200){
				$('.scroll').removeClass('on')
				$('.scroll').eq(3).addClass('on')
			}
			if($(this).scrollTop() > $('#colabo').offset().top-200){
				$('.scroll').removeClass('on')
				$('.scroll').eq(4).addClass('on')
			}
		});

//스크롤 천천히
		$('.scroll').click(function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top-50}, 500);
    });

});
