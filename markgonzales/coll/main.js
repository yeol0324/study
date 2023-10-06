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
		if($(this).scrollTop() > $('.col1').offset().top-900){
 			$('.col1').addClass('on');
 		}else{
 			$('.col1').removeClass('on');
 		}
		if($(this).scrollTop() > $('.col2').offset().top-500){
 			$('.col2').addClass('on');
 		}else{
 			$('.col2').removeClass('on');
 		}
		if($(this).scrollTop() > $('.col3').offset().top-500){
 			$('.col3').addClass('on');
 		}else{
 			$('.col3').removeClass('on');
 		}
		if($(this).scrollTop() > $('.col4').offset().top-500){
 			$('.col4').addClass('on');
 		}else{
 			$('.col4').removeClass('on');
 		}
		if($(this).scrollTop() > $('.col5').offset().top-500){
 			$('.col5').addClass('on');
 		}else{
 			$('.col5').removeClass('on');
 		}
		if($(this).scrollTop() > $('.col6').offset().top-500){
 			$('.col6').addClass('on');
 		}else{
 			$('.col6').removeClass('on');
 		}
		if($(this).scrollTop() > $('.col7').offset().top-1){
 			$('.col7').addClass('on');
 		}else{
 			$('.col7').removeClass('on');
 		}
		if($(this).scrollTop() > $('.col8').offset().top-500){
 			$('.col8').addClass('on');
 		}else{
 			$('.col8').removeClass('on');
 		}
		if($(this).scrollTop() > $('.col9').offset().top-500){
 			$('.col9').addClass('on');
 		}else{
 			$('.col9').removeClass('on');
 		}
		if($(this).scrollTop() > $('.col11').offset().top-500){
 			$('.col11').addClass('on');
 		}else{
 			$('.col11').removeClass('on');
 		}
		if($(this).scrollTop() > $('.col12').offset().top-500){
 			$('.col12').addClass('on');
 		}else{
 			$('.col12').removeClass('on');
 		}

  });
});
