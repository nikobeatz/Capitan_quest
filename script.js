"use strict";

//start open and close menu

var popup = document.querySelector('.menu');
var open = document.querySelector('.menu_button');
popup.style.display = 'none'


open.addEventListener("click", function () {

  if (popup.style.display == 'none') popup.style.display = 'block';
  else popup.style.display = 'none'

});

//mobile

var mobPopup = document.querySelector('.menu');
var mobOpen = document.querySelector('.menu_button_mobile');
popup.style.display = 'none'


mobOpen.addEventListener("click", function () {

  if (mobPopup.style.display == 'none') mobPopup.style.display = 'block';
  else mobPopup.style.display = 'none'

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
        breakpoint: 821,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  
      // // whatever you want
      // $('.slick-track .slick-active:first')
      // .css('opacity', '0.5');
      
      // $('.slick-track .slick-active:last')
      // .css('opacity', '0.5');
   
});

// $(document).ready(function (){
//   $(".slick-prev, .slick-next").on('click', function() {
//     // whatever you want
//     $('.slick-track .slick-active:first')
//     .css('opacity', '0.5');
    
//     $('.slick-track .slick-active:last')
//     .css('opacity', '0.5');
//   });
// });


//end card carousel


//start best slider

$(document).ready(function(){
  $('.best-wrapper-content__slider-img').slick({
        responsive: [{
          breakpoint: 740,
          settings: {
            arrows: false,
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 620,
          settings: {
            arrows: false,

            slidesToShow: 1,
          }
        }
      ]
  });
});
	

//end best slider


// map open

var map = document.querySelector('.map');
var openBtn = document.querySelector('.contacts-wrapper-content__btn');
map.style.display = 'none'


openBtn.addEventListener("click", function () {

  if (map.style.display == 'none') map.style.display = 'block';
  else map.style.display = 'none'

});

//menu button

var map = document.querySelector('.map');
var openBtnMenu = document.querySelector('.contacts-wrapper-content__btn_menu');
map.style.display = 'none'


openBtnMenu.addEventListener("click", function () {

  if (map.style.display == 'none') map.style.display = 'block';
  else map.style.display = 'none'

});



// map close


//scroll

$("html, body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

//end scroll


// start scroll sets chests




function move(to, from) {
    // console.log(index);
    // console.log(direction);

    let descriptionItems = document.getElementsByClassName('sets-wrapper-content__item-wrapper');
    let openedChests = document.getElementsByClassName('sets-wrapper-content__chests-item-img-opened')
    let closedChests = document.getElementsByClassName('sets-wrapper-content__chests-item-img-closed')

    for (let i = 0; i < 7; i++) {
        i === to ? descriptionItems[i].style.display = 'block' : descriptionItems[i].style.display = 'none';
    }
    
    openedChests[from].style.display = 'none'
    closedChests[from].style.display = 'block'
    openedChests[to].style.display = 'block'
    closedChests[to].style.display = 'none'
    
    
    
}




// end scroll sets chests


// mobile scroll chests

$(document).ready(function(){
  
  $('.sets-mobile-wrapper__items').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: false,
    infinite: true,
    responsive: [{
        breakpoint: 821,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 620,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });
});

// end mobile scroll chests



// start Gallery

//gallery open

var gallery = document.querySelector('.gallery');
var openBtnGallery = document.querySelector('.goals-wrapper-content__kids-text-btn');
gallery.style.display = 'none'


openBtnGallery.addEventListener("click", function () {

  if (gallery.style.display == 'none') gallery.style.display = 'block';
  else gallery.style.display = 'none'

});

//gallery close

$(document).ready(function(){

$('.gallery-wrapper-content').flipLightBox({ lightbox_flip_speed: 500, lightbox_border_color: '#4075A5' });

})
// end Gallery 