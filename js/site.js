$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('active');
    }, 300);
});

$('body.company-bios .accordion li > a').on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $(target).toggleClass('active');
});