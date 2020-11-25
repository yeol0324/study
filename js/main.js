$(function(){

	//메인 슬라이드
	$('.slider').slick({

    arrows:false,
		dots:true,
		autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight:true
});

	$('.sslider').bxSlider({
		speed: 1000,
		auto: true,
		autoHover: true,
		pause: 5000,
		autoStart: true,
		controls: true,
		pager: false,
		infiniteLoop: true,
		onSlideBefore:function(){
			$('.box').addClass('sca');
		},onSlideAfter:function(){
			$('.box').removeClass('sca');
		}
	});

	$('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 7,
    slideWidth: 300,
    slideMargin: 0,
    ticker: true,
    speed: 80000
});
	//메인 슬라이드

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

	//BEST

	var $a = $('#aside nav li');
	var $tab = $('.tab')

	$a.click(function(e){
		e.preventDefault()
		$a.removeClass('active');
		$(this).addClass('active');

		$tab.hide();

		var $taget = $(this).index();

		$tab.eq($taget).slideDown(800);

		if ($a.eq(0).hasClass('active') != false) {
			$(this).css({'background-image':'url(img/best1.1.png)'});
			$a.eq(1).css({'background-image':'url(img/best2.png)'});
			$a.eq(2).css({'background-image':'url(img/best3.png)'});
		}else if ($a.eq(1).hasClass('active') != false){
			$(this).css({'background-image':'url(img/best2.1.png)'});
			$a.eq(0).css({'background-image':'url(img/best1.png)'});
			$a.eq(2).css({'background-image':'url(img/best3.png)'});
		}else if ($a.eq(2).hasClass('active') != false){
			$(this).css({'background-image':'url(img/best3.1.png)'});
			$a.eq(0).css({'background-image':'url(img/best1.png)'});
			$a.eq(1).css({'background-image':'url(img/best2.png)'});
		}


	});

	$a.eq(0).trigger('click');

	//BEST

	//scroll

		var $tt1 = $('#best h2');
		var $tt2 = $('#lb h2');
		var $tt3 = $('#mg h2');
		var $wht = $('#why .why');
		var $wh1 = $('#why li').eq(0);
		var $wh2 = $('#why li').eq(1);
		var $wh3 = $('#why li').eq(2);

 	$(window).scroll(function(){
		if ($(this).scrollTop() > $('#best').offset().top-100) {
			$('#header_wrap').addClass('shadow');
		}else {
			$('#header_wrap').removeClass('shadow');
		}
		if($(this).scrollTop() > $tt1.offset().top-500){
 			$tt1.addClass('color');
 		}else{
			$tt1.removeClass('color');
 		}
		if($(this).scrollTop() > $tt2.offset().top-500){
 			$tt2.addClass('color');
 		}else{
			$tt2.removeClass('color');
 		}
		if($(this).scrollTop() > $tt3.offset().top-500){
 			$tt3.addClass('color');
 		}else{
			$tt3.removeClass('color');
 		}
		if($(this).scrollTop() > $wht.offset().top-500){
 			$wht.addClass('line');
 		}else{
			$wht.removeClass('line');
 		}
		if($(this).scrollTop() > $wh1.offset().top-1000){
 			$wh1.addClass('up');
 		}else{
 			$wh1.removeClass('up');
 		}
		if($(this).scrollTop() > $wh2.offset().top-800){
 			$wh2.addClass('up');
 		}else{
 			$wh2.removeClass('up');
 		}
		if($(this).scrollTop() > $wh3.offset().top-700){
 			$wh3.addClass('up');
 		}else{
 			$wh3.removeClass('up');
 		}

  });


});
