$('.slider-mv').slick({
  fade:true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed:1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
});

function GethashID(hashIDName) {
  if (hashIDName) {
    $('.tab li').find('a').each(function(){
      var idName = $(this).attr('href');
      if(idName == hashIDName){
        var parentElm = $(this).parent();
        $('.tab li').removeClass("active");
        $(parentElm).addClass("active");
        $(".area").removeClass("is-active");
        $(hashIDName).addClass("is-active");
      }
    });
  }
}

$('.tab a').on('click', function(){
  var idName = $(this).attr('href');
  GethashID(idName);
  console.log(idName)
  return false;
});

$(window).on('load', function(){
  $('.tab li:first-of-type').addClass("active");
  $('.area:first-of-type').addClass("is-active");
  var hashName = location.hash;
  GethashID(hashName);
})

$('.slider-result').slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  centerMode: true,
  variableWidth: true,
  dots: true,
});
