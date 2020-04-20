$(document).ready(function(){
	$('.slider-1').slick({
		arrows: false,
		dots: true,
		vertical: true,
		autoplay: true,
		autoplaySpeed: 5500,
	});
});
$('.slider-1').on('afterChange', function(event, slick, currentSlide){
	$('.slider-1__counter').text("0" + (currentSlide + 1));
});

$(window).resize(function(){
	$('.slider-1').slick('setPosition');
});



// Менюшка бургер

$('.burger').click(function(){
	$('.burger').toggleClass('burger-close');
	$('.list-burger').toggleClass('list-burger-active');
	$('body').toggleClass('lock');
});

$('.list-burger span').click(function(){
	$('.burger').removeClass('burger-close');
	$('.list-burger').removeClass('list-burger-active');
	$('body').removeClass('lock');
});


// Такое

$('.nav__icon').click(function(){
	$('.nav__icon-text').toggleClass('nav__icon-text-active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".nav__icon").length) {
  	$('.nav__icon-text').removeClass('nav__icon-text-active');
  }
});

// ---- lang ---- //

$('.nav__lang').click(function(){
	$('.nav__lang-language').toggleClass('nav__lang-language-active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".nav__lang").length) {
  	$('.nav__lang-language').removeClass('nav__lang-language-active');
  }
});

/////////////////////////////////////////////

$('.skrim-btn').click(function(){
	$('.skrim').toggleClass('skrim-active');
});


// SOCIAL //

$('.slider-2__social').click(function(){
	$('.slider-2__social-list').toggleClass('slider-2__social-list-active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".slider-2__social").length) {
  	$('.slider-2__social-list').removeClass('slider-2__social-list-active');
  }
});


// GIF 1 //

$('#button-1').on('click', function() {
  if (!$(this).hasClass('item-quality__play-close')) { // если класса нет
    $(this).addClass('item-quality__play-close'); // добавляем класс
    $('#video-1').addClass('item-quality__video-active');
    $("#play-1").attr('src', 'img/icons/pause-button.png');
    $('#iqi-1').addClass('item-quality__image-ps-elem');
  } else { // если есть
    $(this).removeClass('item-quality__play-close'); // убираем класс
  	$('#video-1').removeClass('item-quality__video-active');
  	$("#play-1").attr('src', 'img/icons/quality__play.png');
  	$('#iqi-1').removeClass('item-quality__image-ps-elem');
  }
});

$(document).on('click', function(e) {
  if (!$(e.target).closest("#button-1").length) {
  	$('#button-1').removeClass('item-quality__play-close');
  	$('#video-1').removeClass('item-quality__video-active');
  	$("#play-1").attr('src', 'img/icons/quality__play.png');
 		$('#iqi-1').removeClass('item-quality__image-ps-elem');
  }
});


// GIF 2 //

$('#button-2').on('click', function() {
  if (!$(this).hasClass('item-quality__play-close')) { // если класса нет
    $(this).addClass('item-quality__play-close'); // добавляем класс
    $('#video-2').addClass('item-quality__video-active');
    $("#play-2").attr('src', 'img/icons/pause-button.png');
    $('#iqi-2').addClass('item-quality__image-ps-elem');
  } else { // если есть
    $(this).removeClass('item-quality__play-close'); // убираем класс
  	$('#video-2').removeClass('item-quality__video-active');
  	$("#play-2").attr('src', 'img/icons/quality__play.png');
  	$('#iqi-2').removeClass('item-quality__image-ps-elem');
  }
});

$(document).on('click', function(e) {
  if (!$(e.target).closest("#button-2").length) {
  	$('#button-2').removeClass('item-quality__play-close');
  	$('#video-2').removeClass('item-quality__video-active');
  	$("#play-2").attr('src', 'img/icons/quality__play.png');
 		$('#iqi-2').removeClass('item-quality__image-ps-elem');
  }
});

// GIF 3 //

$('#button-3').on('click', function() {
  if (!$(this).hasClass('item-quality__play-close')) { // если класса нет
    $(this).addClass('item-quality__play-close'); // добавляем класс
    $('#video-3').addClass('item-quality__video-active');
    $("#play-3").attr('src', 'img/icons/pause-button.png');
    $('#iqi-3').addClass('item-quality__image-ps-elem');
  } else { // если есть
    $(this).removeClass('item-quality__play-close'); // убираем класс
  	$('#video-3').removeClass('item-quality__video-active');
  	$("#play-3").attr('src', 'img/icons/quality__play.png');
  	$('#iqi-3').removeClass('item-quality__image-ps-elem');
  }
});

$(document).on('click', function(e) {
  if (!$(e.target).closest("#button-3").length) {
  	$('#button-3').removeClass('item-quality__play-close');
  	$('#video-3').removeClass('item-quality__video-active');
  	$("#play-3").attr('src', 'img/icons/quality__play.png');
 		$('#iqi-3').removeClass('item-quality__image-ps-elem');
  }
});


// VIDEO //


$('.hard__btn').click(function() {
	$(this).addClass('hard__btn-lock');
	$(".hard__btn-close").addClass('hard__btn-close-active');
	$('.hard__video-block').addClass('hard__video-play');
	$('.hard__video-block').addClass('hard__video-play-opacity');
	$('.hard__text').css('color', '#cfcfcf');
});

$('.hard__btn-close').click(function() {
	$(".hard__btn").removeClass('hard__btn-lock');
	$(".hard__btn-close").removeClass('hard__btn-close-active');
	$('.hard__video-block').removeClass('hard__video-play-opacity');
	setTimeout(function() {
		$('.hard__video-block').removeClass('hard__video-play');
	}, 780);
	$('.hard__text').css('color', '#fff');
});