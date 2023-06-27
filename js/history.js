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

$(function() {
    $('.js_tab_button').on('click', function() {
      $('.js_tab_button').removeClass('active');
      $('.js_tab_item').removeClass('active');
    
      $(this).addClass('active');
       
      var index = $('.js_tab_button').index(this);
      $('.js_tab_item').eq(index).addClass('active');
      $('.js_tab_button').eq(index).addClass('active');
    });
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      
      var target = $($(this).attr('href'));
      
      $('html, body').animate({
        scrollTop: target.offset().top -70
      }, 500);
    });
});
  