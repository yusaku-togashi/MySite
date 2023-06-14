var boxTitle = document.querySelector('.js-title');
var box = document.querySelector('.js-box')

boxTitle.addEventListener('click', function() {
    box.classList.toggle('active');
    boxTitle.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.js_nav_contents');

    items.forEach(function(item) {
        var hiddenMenu = item.querySelector('.js_hidden');
        var title = item.querySelector('.js_title');
        if(title){
            title.addEventListener('mouseover', function() {
                hiddenMenu.classList.toggle('selected');
            });

            title.addEventListener('mouseout', function() {
                hiddenMenu.classList.remove('selected');
            });
        }
    });
});

function FixedHeader() {
	var headerH = $('.background_image').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){
			$('.header').addClass('fixed');
            $('.navigation').addClass('fixed');
		}else{
			$('.header').removeClass('fixed');
            $('.navigation').removeClass('fixed');
		}
}

$(window).scroll(function () {
	FixedHeader();
});

function fadeinBlock() {
	var headerH = $('.products').outerHeight(true);
	var scroll = $(window).scrollTop();

	if (scroll >= 1500){
			$('.products').addClass('fadein');
		}
}

$(window).scroll(function () {
	fadeinBlock();
});

const newProductsSwiper = new Swiper('.slider', {
    loop:true,
    slidesPerView: 5,
    centeredSlides:true,
    loopAdditionalSlides: 3, 
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
});

var serchButton = document.querySelectorAll("js_serch_button");
var allButton = document.getElementById("js_all_button");
var newsButton = document.getElementById("js_news_button");
var pickupButton = document.getElementById("js_pickup_button");

var articles = document.getElementsByClassName("js_articles");

allButton.addEventListener("click", function(){
    for (var i = 0; i < articles.length; i++){
        articles[i].style.display = "flex";
        if (!(serchButton == "clicked")){
            allButton.classList.toggle("clicked")
        }else{
            allButton.classList.remove("clicked")
        }
    }
});

newsButton.addEventListener("click", function(){
    for (var i = 0; i < articles.length; i++){
        articles[i].style.display = "none";
    }
    var newsArticles = document.querySelectorAll(".js_articles .js_category h3#news");
    for (var i = 0; i < newsArticles.length; i++){
        var article = newsArticles[i].parentNode.parentNode;
        article.style.display = "flex";
    }
});

pickupButton.addEventListener("click", function(){
    for (var i = 0; i < articles.length; i++){
        articles[i].style.display = "none";
    }
    var pickupArticles = document.querySelectorAll(".js_articles .js_category h3#pickup");
    for (var i = 0; i < pickupArticles.length; i++){
        var article = pickupArticles[i].parentNode.parentNode;
        article.style.display = "flex";
    }
});

const moreAboutSlider = new Swiper('.more_about_slider', {
    slidesPerView: 3.5,
    loopAdditionalSlides: 1,
    centeredSlides:true,
    spaceBetween: 25,
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });