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