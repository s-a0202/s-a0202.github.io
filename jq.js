$(function(){

  $('.header-left').click(function(){
    $('#tabu').addClass('hidden');
    $('#header-right').removeClass('hidden');
  });

  $('.main').click(function(){
    $('#tabu').addClass('hidden');
    $('#header-right').removeClass('hidden');
  });

  $('.top-wrapper').click(function(){
    $('#tabu').addClass('hidden');
    $('#header-right').removeClass('hidden');
  });

  $('footer').click(function(){
    $('#tabu').addClass('hidden');
    $('#header-right').removeClass('hidden');
  });

  $('#login').click(function(){
    $('#modal').fadeIn('slow');
    $('#mask').removeClass('hidden');
    $('#tabu').addClass('hidden');
  });

  $('#circle').click(function(){
    $('#tabu').addClass('hidden');
    $('#header-right').removeClass('hidden');
  });

  $('#pclogin').click(function(){
    $('#modal').fadeIn('slow');
    $('#mask').removeClass('hidden');
    $('#header-right').removeClass('hidden');
  });

  $('#Mcircle').click(function(){
    $('#modal').fadeOut('slow');
    $('#mask').addClass('hidden');
    $('#header-right').removeClass('hidden');
  });

  $('#mask').click(function(){
    $('#modal').fadeOut('slow');
    $('#mask').addClass('hidden');
    $('#header-right').removeClass('hidden');
  });

  $('#header-right').click(function(){
    $('#header-right').addClass('hidden');
    $('#tabu').removeClass('hidden');
  });

  $('#contents').click(function(){
    $('#tabu').addClass('hidden');
    $('#header-right').removeClass('hidden');
  });

  $('#to_news').click(function(){
    $('#tabu').addClass('hidden');
    $('#header-right').removeClass('hidden');
  });
});
