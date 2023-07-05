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

window.addEventListener('DOMContentLoaded', function(){

    $(".info").modaal({
        overlay_close:true,
        before_open:function(){
            $('html').css('overflow-y','hidden');
        },
        after_close:function(){
            $('html').css('overflow-y','scroll');
        }
    });
});

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