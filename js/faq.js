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



const accordionTitle = document.querySelectorAll('.jsAccordionTitle');

for (let i = 0; i < accordionTitle.length; i++){
  accordionTitle[i].addEventListener('click', function() {
    this.classList.toggle('is-active');
    this.nextElementSibling.classList.toggle('is_open');
  });
}
