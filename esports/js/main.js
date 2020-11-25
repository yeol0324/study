$(function(){

	$('.navBtn').click(function(){
        if($('.navWrap').hasClass('on')){
            $('.navWrap').removeClass('on');
        }else{
            $('.navWrap').addClass('on')
        }
    });
	// 메뉴


//슬라이드
	var dragging = false,
		 scrolling = false,
		 resizing = false;

 var imageComparisonContainers = $('.cd-image-container');

 checkPosition(imageComparisonContainers);
 $(window).on('scroll', function(){
		 if( !scrolling) {
				 scrolling =  true;
				 ( !window.requestAnimationFrame )
						 ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
						 : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
		 }
 });

 //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
 imageComparisonContainers.each(function(){
		 var actual = $(this);
		 drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
 });

 //upadate images label visibility
 $(window).on('resize', function(){
		 if( !resizing) {
				 resizing =  true;
				 ( !window.requestAnimationFrame )
						 ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
						 : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
		 }
 });

 function checkPosition(container) {
		 container.each(function(){
				 var actualContainer = $(this);
				 if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
						 actualContainer.addClass('is-visible');
				 }
		 });

		 scrolling = false;
 }

 function checkLabel(container) {
		 container.each(function(){
				 var actual = $(this);
				 updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
				 updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
		 });

		 resizing = false;
 }

 //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
 function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
		 dragElement.on("mousedown vmousedown", function(e) {
				 dragElement.addClass('draggable');
				 resizeElement.addClass('resizable');

				 var dragWidth = dragElement.outerWidth(),
						 xPosition = dragElement.offset().left + dragWidth - e.pageX,
						 containerOffset = container.offset().left,
						 containerWidth = container.outerWidth(),
						 minLeft = containerOffset + 10,
						 maxLeft = containerOffset + containerWidth - dragWidth - 10;

				 dragElement.parents().on("mousemove vmousemove", function(e) {
						 if( !dragging) {
								 dragging =  true;
								 ( !window.requestAnimationFrame )
										 ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
										 : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
						 }
				 }).on("mouseup vmouseup", function(e){
						 dragElement.removeClass('draggable');
						 resizeElement.removeClass('resizable');
				 });
				 e.preventDefault();
		 }).on("mouseup vmouseup", function(e) {
				 dragElement.removeClass('draggable');
				 resizeElement.removeClass('resizable');
		 });
 }

 function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
		 var leftValue = e.pageX + xPosition - dragWidth;
		 //constrain the draggable element to move inside his container
		 if(leftValue < minLeft ) {
				 leftValue = minLeft;
		 } else if ( leftValue > maxLeft) {
				 leftValue = maxLeft;
		 }

		 var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

		 $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
				 $(this).removeClass('draggable');
				 resizeElement.removeClass('resizable');
		 });

		 $('.resizable').css('width', widthValue);

		 updateLabel(labelResizeElement, resizeElement, 'left');
		 updateLabel(labelContainer, resizeElement, 'right');
		 dragging =  false;
 }

 function updateLabel(label, resizeElement, position) {
		 if(position == 'left') {
				 ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
		 } else {
				 ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
		 }
 }

//카운트다운
 const second = 1000,
       minute = second * 60,
       hour = minute * 60,
       day = hour * 24;

 let countDown = new Date('Dec 05, 2020 00:00:00').getTime(),
     x = setInterval(function() {

       let now = new Date().getTime(),
           distance = countDown - now;

       document.getElementById('days').innerText = Math.floor(distance / (day)),
         document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
         document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
         document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
    clearInterval(x);
    'PLAY NOW!';}

     }, second)
//카운트다운

 $(window).scroll(function(){
	if ($(this).scrollTop() > $(".count").offset().top-500) {
		$(".left").addClass("on");
		$(".right").addClass("on");
		$(".mid").addClass("on");
	}else {
		$(".left").removeClass("on");
		$(".right").removeClass("on");
		$(".mid").removeClass("on");
	}
 });

 $('.grid').masonry({
	 // options
	 itemSelector: '.item'
 });
});
