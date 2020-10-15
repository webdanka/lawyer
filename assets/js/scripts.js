document.addEventListener("DOMContentLoaded", function () {

  // Плавный скролл
  
  $('a').click(function () {

    let ButtonScroll = $(this).attr('href'),
      SectionToScroll = $(ButtonScroll),
      TopSectionToScroll = SectionToScroll.offset().top;

    $('html, body').animate({
      scrollTop: TopSectionToScroll - 10
    }, 800);
  });

});

$('.comments-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  speed: 600,
  prevArrow: $('#commentsLeft'),
  nextArrow: $('#commentsRight'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});