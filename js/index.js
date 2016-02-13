$(document).ready(function() {
    var mainInnerHeight = $('.main-inner .inner-content').outerHeight();
    var marginTop = (mainInnerHeight / 2) * -1;
    $('.main-inner').css({
        'height' : mainInnerHeight,
        'margin-top' : marginTop
    });
    
    setTimeout(function() {
        $('body.home .main').addClass('active');
    }, 1500);

    equalHeight();
});

$(window).resize(function() {
    equalHeight();
});

function equalHeight(container){

    var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalHeight('.options .option');
});


$(window).resize(function(){
  equalHeight('.options .option');
});
