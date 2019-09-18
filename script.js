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

$('.birthday-wrapper_wave-items').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  focusOnSelect: true,
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

//end card carousel


//start best slider



//end best slider