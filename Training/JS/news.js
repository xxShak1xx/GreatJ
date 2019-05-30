$(document).ready(() => {
$(".content-box .content-text .text-next a").css({'top':($(".content-box .content-text h3").height()+50+'px')});
$(".content-box .content-text .text-next a").css({'left':($(".content-box .content-text h3").height()-200+'px')});
$('.header .menu-btn img').on('click', () => {
  $('#menu-nav-vertical').slideDown(500);
});
$('#menu-nav-vertical img').on('click', () => {
  $('#menu-nav-vertical').slideUp(500);
})
});
