// addEventListener("load", function() {
//   setTimeout(hideURLbar, 0);
// }, false);

// function hideURLbar() {
//   window.scrollTo(0, 1);
// }

$(document).ready(function($) {

  $(".scroll").click(function(e) {
    e.preventDefault();

    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);

  });

});

// $(function() {
//   var pull = $('#pull');
//   menu = $('nav ul');
//   menuHeight = menu.height();
//   pull.on('click', function(e) {
//     e.preventDefault();
//     menu.slideToggle();
//   });
//   $(window).resize(function() {
//     var w = $(window).width();
//     if (w > 320 && menu.is(':hidden')) {
//       menu.removeAttr('style');
//     }
//   });
// });

// $(document).ready(function() {
/*
var defaults = {
containerID: 'toTop', // fading element id
containerHoverID: 'toTopHover', // fading element hover id
scrollSpeed: 1200,
easingType: 'linear'
};
*/

// $().UItoTop({
//   easingType: 'easeOutQuart'
// });
// });
