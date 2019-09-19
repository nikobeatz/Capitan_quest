"use strict";

//start open and close menu

var popup = document.querySelector('.menu');
var open = document.querySelector('.menu_button');
popup.style.display = 'none'


open.addEventListener("click", function () {

  if (popup.style.display == 'none') popup.style.display = 'block';
  else popup.style.display = 'none'

});

//end open and close menu

//start card carousel 


$(document).ready(function(){
  
  $('.birthday-wrapper_wave-items').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    arrows: true,
    focusOnSelect: false,
    infinite: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slick-track .slick-active:first')
  .css('opacity', '0.5');
  
  $('.slick-track .slick-active:last')
  .css('opacity', '0.5');
});

$(".slick-prev").click( function() {
  // whatever you want
  $('.slick-track .slick-active:first')
  .css('opacity', '0.5');
  
  $('.slick-track .slick-active:last')
  .css('opacity', '0.5');
});


//end card carousel


//start best slider



//end best slider


// map open

var map = document.querySelector('.map');
var openBtn = document.querySelector('.contacts-wrapper-content__btn');
map.style.display = 'none'


openBtn.addEventListener("click", function () {

  if (map.style.display == 'none') map.style.display = 'block';
  else map.style.display = 'none'

});

// map close


//scroll

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

//end scroll