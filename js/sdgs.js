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

const modal = document.getElementById('modal');
const opModal = document.getElementById('op_modal');
const clModal = document.getElementById('cl_modal');
const body = document.body;
const toggle = [opModal,clModal];

for (let i = 0; i<toggle.length ; i++){
  toggle[i].addEventListener('click',function(){
    modal.classList.toggle('is_show');
    body.classList.toggle('is_show')
  },false);
}

$(document).ready(function() {
    
    $(window).scroll(function() {
        var isVisible = isElementVisible('.about_production_process') && isElementVisible('.about_company_environment');

        if (isVisible) {
            $('.about_production_process').addClass('box_rotateX');
            $('.about_company_environment').addClass('box_rotateX2');
        }
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
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      
      var target = $($(this).attr('href'));
      
      $('html, body').animate({
        scrollTop: target.offset().top -100
      }, 500);
    });
});

var footBoxTitles = document.querySelectorAll('.js_box_title');

footBoxTitles.forEach(function(boxTitle) {
    boxTitle.addEventListener('click', function() {
        var footBox = boxTitle.nextElementSibling
        footBox.classList.toggle('active');
        boxTitle.classList.toggle('active');
    });
});