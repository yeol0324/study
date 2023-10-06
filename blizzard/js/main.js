$(function(){

	$('.navBtn').click(function(){
        if($('.navWrap').hasClass('on')){
            $('.navWrap').removeClass('on');
        }else{
            $('.navWrap').addClass('on')
        }
    });
	// 메뉴

	//메인 슬라이드
	$('.slider').bxSlider({
		speed: 500,
		slideMargin: 0,
		auto: true,
		autoHover: false,
		pause: 5000,
		autoStart: true,
		controls: true,
		infiniteLoop: true

	});
	//메인 슬라이드

		$(".modal-trigger").click(function(e){
  		e.preventDefault();
  		$dataModal = $(this).attr("data-modal");
  		$("#" + $dataModal).fadeIn();
			$("body").css({"overflow-y": "hidden"});
		});

		$(".close-modal, .modal-sandbox").click(function(){
  		$(".modal").fadeOut();
			$("body").css({"overflow-y": "auto"});
		});

var $a1 = $(".icon").eq(0);
var $a2 = $(".icon").eq(1);
var $a3 = $(".icon").eq(2);

$a1.find("a").mouseenter(function(){
	$a1.find("g").css("stroke","#d1373b");
	$a1.addClass("svgani");
}).mouseleave(function(){
	$a1.find("g").css("stroke","#000");
	$a1.removeClass("svgani");
});
$a2.find("a").mouseenter(function(){
	$a2.find("g").css("stroke","#d1373b");
	$a2.addClass("svgani");
}).mouseleave(function(){
	$a2.find("g").css("stroke","#000");
	$a2.removeClass("svgani");
});
$a3.find("a").mouseenter(function(){
	$a3.find("g").css("stroke","#d1373b");
	$a3.addClass("svgani");
}).mouseleave(function(){
	$a3.find("g").css("stroke","#000");
	$a3.removeClass("svgani");
});
			//pre 1

			var $pr1btn = $("#choice li a");
			var $pr1tab = $(".pr1tab");

			$pr1btn.click(function(){
				$pr1btn.removeClass("active")
				$(this).addClass("active")

				$pr1tab.hide();

				var $pr1taget = $(this).attr("href")


				$($pr1taget).fadeIn();
			});

			$pr1btn.eq(0).trigger("click");
			//pre 1
			//pre 3
			var $stardata = {listOfQuotes: [{
	        quote: "Power overwhelming!",
	        author: "Archon",
	        imageLink: "img/archon.gif",
	        imageAlt: "Archon Unit Portrait"},
	      {
	        quote: "Ready to roll out!",
	        author: "Siege Tank",
	        imageLink: "img/tank.gif",
	        imageAlt: "Siege Tank in game animation"
	      }, {
	        quote: "Battlecruiser operational.",
	        author: "Battlecruiser",
	        imageLink: "img/cruiser.gif",
	        imageAlt: "Battlecruiser Commander Portrait"
	      }, {
	        quote: "You wanna piece of me, boy?",
	        author: "Marine",
	        imageLink: "img/marine.gif",
	        imageAlt: "Marine Unit Portrait"
	      }, {
	        quote: "Goliath online.",
	        author: "Goliath",
	        imageLink: "img/goliath.gif",
	        imageAlt: "Marine Unit Portrait"
	      }
	    ]
	  };


	  window.twttr = (function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0],
	    t = window.twttr || {};
	  if (d.getElementById(id)) return;
	  js = d.createElement(s);
	  js.id = id;
	  fjs.parentNode.insertBefore(js, fjs);

	  t._e = [];
	  t.ready = function(f) {
	    t._e.push(f);
	  };

	  return t;
	  }(document, "script"));

	  function uniqueRandomNumber(currentVal, max, min) {
	    let newVal = currentVal;
	    do {
	      newVal = Math.floor(Math.random() * (max - min + 1)) + min;
	    } while (newVal === currentVal);

	    return newVal;
	  }

	  function generateQuote(n) {
	    $("figure img").attr( {src: $stardata.listOfQuotes[n].imageLink,
	                           alt: $stardata.listOfQuotes[n].imageAlt,
	                           title: $stardata.listOfQuotes[n].title} );
	    $("#quote_text").text("\"" + $stardata.listOfQuotes[n].quote + "\"");
	    $("figcaption span").text($stardata.listOfQuotes[n].author);
	  }

	  let index = Math.floor(Math.random() * $stardata.listOfQuotes.length);
	  generateQuote(index);

	  twttr.ready(function(twttr){
	    twttr.widgets.createShareButton('/',{
	      size: "large",
	      text: '\"' + $stardata.listOfQuotes[index].quote + '\"' + "\n— " + $stardata.listOfQuotes[index].author + "\n",
	    });
	  });

	  $("#new_quote").on("click", function() {
	    index = uniqueRandomNumber(index, $stardata.listOfQuotes.length - 1, 0);
	    generateQuote(index);

	    twttr.widgets.createShareButton('/', {
	      size: "large",
	      text: '\"' + $stardata.listOfQuotes[index].quote + '\"' + "\n— " + $stardata.listOfQuotes[index].author + "\n",
	    })
	  });
		//pre3

		//scroll

		$(document).scroll(function(){
        $('#e-spo').find('p').css('left', Math.max(0 - 0.35*window.scrollY)+ "px");
        $('#e-spo').find('p').eq(1).css('left', Math.max(-2474 + 0.55*window.scrollY)+ "px");
    });

		var $es = $("#e-spo");
		var $games = $("#allgames ul");
		var $ag = $('#allgames h2');
		var $new = $('#news h2');
		var $newcon1 = $('#news article').eq(0);
		var $newcon2 = $('#news article').eq(1);
		var $newconm = $('#news article').eq(2);
		var $newcon3 = $('#news article').eq(3);
		var $svg = $('.bottom-section');
		var $cont = $('.content-top');

 	$(window).scroll(function(){
		if($(this).scrollTop() > $ag.offset().top-200){
			$('header').css('background-color', '#fff');
		}else{
			$('header').css('background-color', 'transparent');
		}
		if($(this).scrollTop() > $ag.offset().top-800){
			$ag.addClass('scale');
		}else{
			$ag.removeClass('scale');
		}
		if($(this).scrollTop() > $new.offset().top-1000){
			$new.addClass('scale');
		}else{
			$new.removeClass('scale');
		}
		if($(this).scrollTop() > $cont.offset().top-800){
 			$cont.find('p').css('animation', 'typing 3s steps(27, end),blink-caret .5s step-end infinite alternate');
 		}else{
 			$cont.find('p').css('animation', 'fadeOut');
 		}
		if($(this).scrollTop() > $es.offset().top-800){
 			$es.find('li').addClass('slideUp');
 		}else{
 			$es.find('li').removeClass('slideUp');
 		}
		if($(this).scrollTop() > $newcon1.offset().top-1000){
 			$newcon1.addClass('slideLeft');
 		}else{
 			$newcon1.removeClass('slideLeft');
 		}
		if($(this).scrollTop() > $newcon2.offset().top-1000){
 			$newcon2.addClass('slideRight');
 		}else{
 			$newcon2.removeClass('slideRight');
 		}
		if($(this).scrollTop() > $newconm.offset().top-1000){
 			$newconm.addClass('slideLeft');
 		}else{
 			$newconm.removeClass('slideLeft');
 		}
		if($(this).scrollTop() > $newcon3.offset().top-1000){
 			$newcon3.addClass('slideLeft');
 		}else{
 			$newcon3.removeClass('slideLeft');
 		}
		if($(this).scrollTop() > $svg.offset().top-1000){
 			$(".icon").addClass('svgani');
 		}else{
 			$(".icon").removeClass('svgani');
 		}

  });


});
