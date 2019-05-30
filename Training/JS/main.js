$(document).ready(() => {
  $('#topImage button a').on('mouseenter', () => {
    $('#topImage button a').css({
    color: '#AAAAAA',
    });
  });
  $('#topImage button a').on('mouseleave', () => {
    $('#topImage button a').css({
    color: '#FFFFFF',
    });
  });
  $('#topImage .name img').on('click', () => {
    window.location.href = "http://www.google.com";
  });
  $(window).scroll(function (event) {
    var topScroll = $(window).scrollTop();
     if(topScroll >= 1200){
     $('#topBtn button').fadeIn(200);
     } else {
     $('#topBtn button').fadeOut(200);
     }
  $('#topBtn').on('click', () =>{
    window.location.href = "#topImage";
  })
});
$('.menu-btn img').on('click', () => {
  $('#menu-nav-vertical').slideDown(500);
});
$('#menu-nav-vertical img').on('click', () => {
  $('#menu-nav-vertical').slideUp(500);
});
$('#greenBg').on('mouseenter', () => {
  $('#menu-nav-vertical').css(
    'background-color', 'green'
  )

});
$('#greenBg').on('mouseleave', () => {
  $('#menu-nav-vertical').css(
    'background-color', 'black'
  )

});
$('.redBg').on('mouseenter', () => {
  $('#menu-nav-vertical').css(
    'background-color', 'red'
  )

});
$('.redBg').on('mouseleave', () => {
  $('#menu-nav-vertical').css(
    'background-color', 'black'
  )

});
});
