$(function(){

  let $modal=$('#modal');
  let $mask=$('#mask');
  let $head_r=$('#header-right');

  function head_r_hidden(){
    $head_r.removeClass('hidden');
  }

  $(document).on('click',function(e){
    if (!$(e.target).closest('#header-right').length){
      $('#tabu').addClass('hidden');
      head_r_hidden()
    }
  });

  $head_r.click(function(){
    $head_r.addClass('hidden');
    $('#tabu').removeClass('hidden');
  });

  $('#login').click(function(){
    $modal.fadeIn();
    $mask.removeClass('hidden');
  });

  $('#circle').click(function(){
    head_r_hidden()
  });

  $('#pclogin').click(function(){
    $modal.fadeIn();
    $mask.removeClass('hidden');
    head_r_hidden()
  });

  $('#Mcircle').click(function(){
    $modal.fadeOut();
    $mask.addClass('hidden');
    head_r_hidden()
  });

  $('#mask').click(function(){
    $modal.fadeOut();
    $mask.addClass('hidden');
    head_r_hidden()
  });

  $('#contents').click(function(){
    head_r_hidden()
  });

  $('#to_news').click(function(){
    head_r_hidden()
  });
});
