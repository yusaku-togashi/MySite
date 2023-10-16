$(function() {
  $('.header_hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.header_hamburger_nav').addClass('active');
          $('html, body').css('overflow', 'hidden');
      } else {
          $('.header_hamburger_nav').removeClass('active');
          $('html, body').removeAttr('style');
      }

  });
});

$(function() {
  $('.nav_item').click(function() {
    $('.header_hamburger').removeClass('active');
    $('.header_hamburger_nav').removeClass('active');
    $('html, body').removeAttr('style');
  });
});

$('.header_nav_list a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

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

$('.schedule_list_title').on('click', function() {
  var findElm = $(this).next(".schedule_list_box");
  $(findElm).slideToggle();
    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
});
