$(document).ready(function() {
    $('li a[href*=#]:not([href=#])').click(function() {
    var target = $(this).attr("href");
    $('html, body').animate({scrollTop:$(target).position().top - 150}, 'slow');
  });

});