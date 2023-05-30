$(document).ready(function(){
    $('.trener__corousel').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>'
        
      });

      $('.price__services__corousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>'
      });
})