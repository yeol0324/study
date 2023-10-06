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

  //스크롤
  $(window).scroll(function(){
    if ($(this).scrollTop()>$('.box').offset().top-500) {
      $('.box').addClass('show');
      $('.box').addClass('go');
      $('.boxInner').addClass('show');
      $('.textBox').addClass('go');
      $('.imgBox').addClass('go');
    }else {
      $('.box').removeClass('show');
      $('.box').removeClass('go');
      $('.boxInner').removeClass('show');
      $('.textBox').removeClass('go');
      $('.imgBox').removeClass('go');
    }
  });
});
