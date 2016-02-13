$(document).ready(function() {
    var mainInnerHeight = $('.main-inner .inner-content').outerHeight();
    var marginTop = (mainInnerHeight / 2) * -1;
    $('.main-inner').css({
        'height' : mainInnerHeight,
        'margin-top' : marginTop
    });
    
    setTimeout(function() {
        $('body.home .main').addClass('active');
    }, 1000);

    checkOptionsHeight();
});

$(window).resize(function() {
    checkOptionsHeight();
});

function checkOptionsHeight() {
    var fsHeight = $('.for-students').outerHeight();
    var feHeight = $('.for-employers').outerHeight();
    if(fsHeight > feHeight) {
        $('.for-employers').css('height', fsHeight);
    }
    if(fsHeight < feHeight) {
        $('.for-students').css('height', feHeight);
    }
}