$(document).ready(function(){
  $('.b-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    adaptiveHeight: true,
    arrows : true
  });
  $('.inner-div').on('click', function() {
    $('.b-slider').slick('slickRemove', $('.slick-slide').index(this) - 1)
  });
  $('.do-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    infinite: true,
    autoplay: true,
    dots: false,
    responsive: [
      {
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
  $('.inner-div').on('click', function() {
    $('.do-slider').slick('slickRemove', $('.slick-slide').index(this) - 1)
  });
});