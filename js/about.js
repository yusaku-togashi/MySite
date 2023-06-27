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

var footBoxTitles = document.querySelectorAll('.js_box_title');

footBoxTitles.forEach(function(boxTitle) {
    boxTitle.addEventListener('click', function() {
        var footBox = boxTitle.nextElementSibling
        footBox.classList.toggle('active');
        boxTitle.classList.toggle('active');
    });
});