"use strict";

//start open and close menu

var popup = document.querySelector('.menu');
var open = document.querySelector('.menu-button');
popup.style.display = 'none'



open.addEventListener("click", function () {

  if (popup.style.display == 'none') popup.style.display = 'block';
  else popup.style.display = 'none'

});


//mobile

var mobPopup = document.querySelector('.menu');
var mobOpen = document.querySelector('.menu-button_mobile');
popup.style.display = 'none'


mobOpen.addEventListener("click", function () {

  if (mobPopup.style.display == 'none') mobPopup.style.display = 'block';
  else mobPopup.style.display = 'none'

});

//end open and close menu




$(document).ready(function(){

  //start card carousel 
  $('.birthday__slider-items').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    appendDots: $('.birthday-wrapper-content'),
    arrows: true,
    focusOnSelect: false,
    infinite: true,
    responsive: [{
        breakpoint: 821,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  //end card carousel

  // mobile scroll chests
  $('.sets-mobile__items').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    appendDots: $('.sets-mobile__heading'),
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: false,
    infinite: true,
    responsive: [{
        breakpoint: 821,
        settings: {
          arrows: false,
          centerMode: true,
          dots: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 620,
        settings: {
          arrows: false,
          centerMode: true,
          dots: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });
  // end mobile scroll chests


  //gallery plugin
  $('.gallery-wrapper-content').flipLightBox({ lightbox_flip_speed: 500, lightbox_border_color: '#4075A5' });
  //dallery plugin


  //scroll chests
  const move = (from, to) => {
    let descriptionItems = document.getElementsByClassName('sets__item-wrapper');
    let openedChests = document.getElementsByClassName('chests__item-img-opened');
    let closedChests = document.getElementsByClassName('chests__item-img-closed');

    for (let i = 0; i < 7; i++) {
        i === to ? descriptionItems[i].style.display = 'block' : descriptionItems[i].style.display = 'none';
    }
    
    openedChests[from].style.display = 'none'
    closedChests[from].style.display = 'block'
    openedChests[to].style.display = 'block'
    closedChests[to].style.display = 'none'
  }

  document.querySelector('.sets-wrapper-content').addEventListener('click', (event) => {
      
      if(event.target.classList.contains('item-wrapper__setname-btn')) {
          let [ from, to ] = event.target.getAttribute('direction').split('-')
          move(+from, +to)
      }
  })
  //scroll chests

});


// map open

var map = document.querySelector('.map');
var openBtn = document.querySelector('.menu__contacts-btn');
map.style.display = 'none'


openBtn.addEventListener("click", function () {

  if (map.style.display == 'none') map.style.display = 'block';
  else map.style.display = 'none'

});

//menu button

var map = document.querySelector('.map');
var openBtnMenu = document.querySelector('.menu__contacts-btn_menu');
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

  if (popup.style.display == 'block') popup.style.display = 'none';
  else popup.style.display = 'none'

});

//end scroll


// start Gallery

var gallery = document.querySelector('.gallery');
var openBtnGallery = document.querySelector('.goals__kids-text-btn');
gallery.style.display = 'none'


openBtnGallery.addEventListener("click", function () {

  if (gallery.style.display == 'none') gallery.style.display = 'block';
  else gallery.style.display = 'none'

});

// end Gallery 

