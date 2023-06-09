var boxTitle = document.querySelector('.box-title');
var box = document.querySelector('.box')

boxTitle.addEventListener('click', function() {
        box.classList.toggle('active');
        boxTitle.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
    var tabItems = document.querySelectorAll('.tab-item');

    tabItems.forEach(function(tabItem) {
        var hiddenMenu = tabItem.querySelector('.hidden');
        var title = tabItem.querySelector('.title');
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
	var headerH = $('.background-image').outerHeight(true);
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

const swiper = new Swiper('.slide', {
    loop: true,
    slidesPerView: 4, 
    loopAdditionalSlides: 1,
    spaceBetween:20,
    speed: 600, 
    effect: "slide",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var serchButton = document.querySelectorAll("button");
var allButton = document.getElementById("all");
var newsButton = document.getElementById("news");
var pickupButton = document.getElementById("pickup");

var topics = document.getElementsByClassName("topics");

allButton.addEventListener("click", function(){
    for (var i = 0; i < topics.length; i++){
        topics[i].style.display = "flex";
        if (!(serchButton == "clicked")){
            allButton.classList.toggle("clicked")
        }else{
            allButton.classList.remove("clicked")
        }
    }
});

newsButton.addEventListener("click", function(){
    if (!(allButton&&newsButton == "clicked")){
        newsButton.classList.toggle("clicked")
    }else{
        newsButton.removeClass("clicked")
    }
    for (var i = 0; i < topics.length; i++){
        topics[i].style.display = "none";
    }
    var newsTopics = document.querySelectorAll(".topics .category h3#news");
    for (var i = 0; i < newsTopics.length; i++){
        var topic = newsTopics[i].parentNode.parentNode;
        topic.style.display = "flex";
    }
});

pickupButton.addEventListener("click", function(){
    if (!(allButton&&newsButton&&pickupButton == "clicked")){
        pickupButton.classList.toggle("clicked")
    }else{
        pickupButton.removeClass("clicked")
    }
    for (var i = 0; i < topics.length; i++){
        topics[i].style.display = "none";
    }
    var pickupTopics = document.querySelectorAll(".topics .category h3#pickup");
    for (var i = 0; i < pickupTopics.length; i++){
        var topic = pickupTopics[i].parentNode.parentNode;
        topic.style.display = "flex";
    }
});

// const swiper2 = new Swiper('.more-about', {
//     loop: true, 
//     centeredSlides: true, 
//     // slidesPerView: 5,
//     spaceBetween: 16,
  
//     pagination: {
//       el: '.swiper-pagination',
//       type: "bullets",
//       clickable: true,
//     },
//   });