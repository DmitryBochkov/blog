//= ../libs/jquery/dist/jquery.min.js
//= ../libs/fullpage.js/dist/jquery.fullpage.min.js

$(document).ready(function() {
  $('.list-lang__link').on('click', function(e) {
    e.preventDefault();
    $('.list-lang__link').parents('.list-lang__item').removeClass('active');
    $(this).parents('.list-lang__item').addClass('active');
  });

  var headerHeight = $('.header').height();
  $('#fullpage').fullpage({
    paddingTop: headerHeight
  });

  // tabs
  $('.tabs__list a').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.tabs').find('.tab').removeClass('visible');
    $(this).parent().siblings().removeClass('active');

    var id = $(this).attr('href');
    $(id).addClass('visible');
    $(this).parent().addClass('active');
  });

});
