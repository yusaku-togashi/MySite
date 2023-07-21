document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.js_nav_contents');

    items.forEach(function(item) {
        var hiddenMenu = item.querySelector('.js_hidden');
        var title = item.querySelector('.js_title');
        if(title || hiddenMenu){
            title.addEventListener('mouseover', function() {
                hiddenMenu.classList.toggle('selected');
            });
            hiddenMenu.addEventListener('mouseover', function() {
                hiddenMenu.classList.toggle('selected');
            });


            title.addEventListener('mouseout', function() {
                hiddenMenu.classList.remove('selected');
            });
            hiddenMenu.addEventListener('mouseout', function() {
                hiddenMenu.classList.remove('selected');
            });
        }
    });
});

function isElementVisible(selector) {
    var $element = $(selector);
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var elementTop = $element.offset().top;
    var elementBottom = elementTop + $element.outerHeight();

    
    var isVisible = (elementTop + 150 <= (scrollTop + windowHeight)) && (elementBottom >= scrollTop);

    return isVisible;
}

var footBoxTitles = document.querySelectorAll('.js_box_title');

footBoxTitles.forEach(function(boxTitle) {
    boxTitle.addEventListener('click', function() {
        var footBox = boxTitle.nextElementSibling
        footBox.classList.toggle('active');
        boxTitle.classList.toggle('active');
    });
});

// サーチタブ
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      
      var target = $($(this).attr('href'));
      
      $('html, body').animate({
        scrollTop: target.offset().top -70
      }, 500);
    });
});

// カテゴリーで調べる
const accordionTitle = document.querySelectorAll('.jsAccordionTitle');
const categoryTitle = document.querySelectorAll('.jsCategoryTitle')
const openCategoryTitle = document.querySelectorAll('.js_faq_accordion_content');

console.log(categoryTitle);

for (let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', function() {
      openCategoryTitle[i].classList.add('is_open');
      accordionTitle[i].classList.add('active');
    });
}

// 一覧で見る
for (let i = 0; i < accordionTitle.length; i++){
  accordionTitle[i].addEventListener('click', function() {
    this.classList.toggle('active')
    this.nextElementSibling.classList.toggle('is_open');
  });
}

const boxTitle = document.querySelectorAll('.jsBoxTitle');

for (let i = 0; i < boxTitle.length; i++){
    boxTitle[i].addEventListener('click', function() {
      this.classList.toggle('active');
      this.classList.toggle('is_open');
      this.nextElementSibling.classList.toggle('is_open');

    });
  }