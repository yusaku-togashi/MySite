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


$(function() {
	$.scrollify({
		section : "section",
		easing: 'swing',
		scrollSpeed : 500, 
	});
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      
      var target = $($(this).attr('href'));
      
      $('html, body').animate({
        scrollTop: target.offset().top -30
      }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".js_scroll_section");

    function checkAnimation() {
        sections.forEach((section) => {
            const jsAnimationPackage = section.querySelectorAll(".js_animation_package");
            const animationTrigger = section.offsetTop - window.innerHeight +50;

            if (window.scrollY >= animationTrigger) {
                for (var i = 0; i < jsAnimationPackage.length; i++){
                    jsAnimationPackage[i].classList.add("active");
                }
            }
        });
    }
    window.addEventListener("scroll", checkAnimation);
    checkAnimation();
});

var footBoxTitles = document.querySelectorAll('.js_box_title');

footBoxTitles.forEach(function(boxTitle) {
    boxTitle.addEventListener('click', function() {
        var footBox = boxTitle.nextElementSibling
        footBox.classList.toggle('active');
        boxTitle.classList.toggle('active');
    });
});