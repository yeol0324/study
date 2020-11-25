$(function(){
	function page_replace() {

	location.replace("link_page.html");

	}
	//스크롤 페이지
	new fullpage('#fullpage', {
	navigation: true, // 오른쪽 버튼
	navigationTooltips:['main', 'overwatch', 'hearthstone','heroes','starcraft','warcarft','diablo'],
	anchors :['page0', 'page01', 'page02','page03','page04','page05','page06'],
	parallax: true,

	onLeave: function(origin, destination, direction){
		var leavingSection = this;

		if(origin.index == 0 && direction =='down'){
			$(".hero-left").css("margin-left","0");
			$(".hero-right").css("margin-right","0");
		}

		if(origin.index == 1 && direction =='down'){
			$(".door").css("background-size","110%");
		}

		if(origin.index == 3 && direction =='down'){
			$(".star-left").css("margin-left","0");
			$(".star-right").css("margin-right","0");
		}
		if(origin.index == 5 && direction =='down'){
			$(".dia-left").css("margin-top","35vh");
		}
	}


});

	//메뉴
	$('.navBtn').click(function(){
        if($('.navWrap').hasClass('on')){
            $('.navWrap').removeClass('on');
        }else{
            $('.navWrap').addClass('on')
        }
    });
	// 메뉴

	//메인 슬라이드
	$('.slider').slick({
    dots:true,
    draggable:true,
    arrows:true,
		autoplay: false,
    autoplaySpeed: 2000,
    adaptiveHeight:true,
    centerMode:true,
    centerPadding:'20%'
});

$("#over .con li").mouseover(function(){
	$(this).find("video").get(0).play();
}).mouseout(function(){
	$(this).find("video").get(0).load();
});

$("#heroes video").click(function(){
		$(this).get(0).play();
});

var $a = $("#star .bottom li")
var $tab = $(".tab")

$a.click(function(){

	$a.find("a").removeClass("active");
	$(this).find("a").addClass("active");

	$tab.hide();

	var $taget = $(this).index();
	$tab.eq($taget).fadeIn();
});
$a.eq(0).trigger("click");


	var $open = $("#door span");

	$open.click(function(){
		$(".door-left").addClass("open");
		$(".door-right").addClass("open");
		$open.css("display","none");
	});
var $bt1 = $(".btn li").eq(0);
var $bt2 = $(".btn li").eq(1);
var $bt3 = $(".btn li").eq(2);

	$bt1.mouseover(function(){
		$("#diablo").css({"background-size":"300%","background-position":"10% 30%"});
		$bt2.css("opacity","0");
		$bt3.css("opacity","0");
		$(".bar").fadeIn();
		$(".text").fadeOut();
		$(".back").fadeOut();
	}).mouseout(function(){
		$("#diablo").css({"background-size":"100%","background-position":"top"});
		$bt2.css("opacity","1");
		$bt3.css("opacity","1");
		$(".bar").fadeOut();
		$(".text").fadeIn();
		$(".back").fadeIn();
	});

	$bt2.mouseover(function(){
		$("#diablo").css({"background-size":"300%","background-position":"40% 20%"});
		$bt1.css("opacity","0");
		$bt3.css("opacity","0");
		$(".sor").fadeIn();
		$(".text").fadeOut();
		$(".back").fadeOut();
	}).mouseout(function(){
		$("#diablo").css({"background-size":"100%","background-position":"top"});
		$bt1.css("opacity","1");
		$bt3.css("opacity","1");
		$(".sor").fadeOut();
		$(".text").fadeIn();
		$(".back").fadeIn();
	});

	$bt3.mouseover(function(){
		$("#diablo").css({"background-size":"300%","background-position":"80% 50%"});
		$bt2.css("opacity","0");
		$bt1.css("opacity","0");
		$(".dru").fadeIn();
		$(".text").fadeOut();
		$(".back").fadeOut();
	}).mouseout(function(){
		$("#diablo").css({"background-size":"100%","background-position":"top"});
		$bt2.css("opacity","1");
		$bt1.css("opacity","1");
		$(".dru").fadeOut();
		$(".text").fadeIn();
		$(".back").fadeIn();
	});


});
