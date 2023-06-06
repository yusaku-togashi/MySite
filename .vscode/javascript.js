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