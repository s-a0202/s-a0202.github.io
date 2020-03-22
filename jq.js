$(function(){

  let $modal=$('#modal');
  let $mask=$('#mask');
  let $head_r=$('#header-right');

  $head_r.on('click',function(){
    if ($(this).hasClass('transform')) {
      $(this).removeClass('transform');
      $(this).css('transform','translateY(-17px)').css('z-index','1');
      $('.search_box').css('transform','translateX(0px)');
      $('#tabu').css('height','0').css('opacity','0');
      $('.tabu-btn').css('display','none');
      $('.sp_search_area').css('height','0').css('opacity','0');
    }else {
      $(this).addClass('transform');
      $(this).css('transform','translateY(60px)').css('z-index','16');
      $('.search_box').css('transform','translateX(45px)');
      $('#tabu').css('height','60vh').css('opacity','1');
      $('.tabu-btn').css('display','inline-block');
      $('.sp_search_area').css('height','60px').css('opacity','1');
    }
  });

  // $('.search').on('click',function(){
  //   if ($('.sp_search_area').hasClass('open')) {
  //     $('.sp_search_area').removeClass('open');
  //     if ($('#tabu').css('height','60vh')) {
  //       $('#tabu').css('height','0')
  //     }
  //   }else{
  //     $('.sp_search_area').addClass('open');
  //   }
  // });

  $('#login').click(function(){
    $head_r.css('transform','translateY(0px)').css('z-index','1');
    $('#tabu').css('opacity','0');
    $modal.fadeIn();
    $mask.removeClass('hidden');
  });

  $('#pclogin').click(function(){
    $modal.fadeIn();
    $mask.removeClass('hidden');
  });

  $('#Mcircle').click(function(){
    $modal.fadeOut();
    $mask.addClass('hidden');
    $head_r.removeClass('transform');
    $head_r.css('transform','translateY(-17px)').css('opacity','1').css('z-index','1');
    $('.search_box').css('transform','translateX(0px)');
    $('#tabu').css('height','0').css('opacity','0');
  });

  $('#mask').click(function(){
    $modal.fadeOut();
    $mask.addClass('hidden');
  });
  
  $('#contents').on('click',function(){
    $head_r.removeClass('transform');
    $head_r.css('transform','translateY(-17px)').css('z-index','1');
    $('#tabu').css('height','0').css('opacity','0');
    $mask.addClass('hidden');
    $('.search_box').css('transform','translateX(0px)');
  });

  $('#to_news').click(function(){
    $head_r.removeClass('transform');
    $head_r.css('transform','translateY(-17px)').css('z-index','1');
    $('#tabu').css('height','0').css('opacity','0');
    $mask.addClass('hidden');
    $('.search_box').css('transform','translateX(0px)');
  });

// ---headerのborder-------------
  let main_top=$('.main_container').offset().top-70;
  $(window).on('scroll',function(){
    let scroll_top=$(this).scrollTop();
    if (main_top<scroll_top) {
      $('header').css('border','#ddd 1.5px solid');
      $('.search_area').css('background','#111').css('transform','translateY(2px)');
    }else{
      $('header').css('border','none');
      $('.search_area').css('background','rgba(255, 255, 255, 0.95)');
    }
  });

// ---search_hover------------------
  $('.search_box').hover(
    function(){
      $('.search_area').css('opacity','1').css('transform','translateX(15px)');
    },
    function(){
      $('.search_area').css('opacity','0').css('transform','translateX(300px)');
    }
  );

// ---smoothz_scroll----------------
  $('a[href^="#"]').on('click',function(){
    let href=$(this).attr("href");
    let target=$(href=="#"||href==""?'html':href);
    let pos=target.offset().top;
    $("html,body").animate({scrollTop:pos},600);
    return false;
  });
// ---------to_top-----------------
  let now_position=0;
  $(window).on('scroll',function(){
    if ($(this).scrollTop()>now_position && $(this).scrollTop()>=200) {
      $('.to_top').removeClass('arr_hide');
    }else {
      $('.to_top').addClass('arr_hide');
    }
    now_position=$(this).scrollTop();
  });
  $(window).ready(function(){
    if ($('.to_top').offset().top>1) {
      $('.to_top').addClass('arr_hide');
    }
  });

  $(window).on('scroll',function(){
    $('#section1').each(function(){
      let pos=$(this).offset().top;
      let scroll=$(window).scrollTop();
      let winHeight=$(window).height();
      if (scroll>pos-winHeight+winHeight/5) {
        $(this).addClass('sectionIn');
      }else{
        $(this).removeClass('sectionIn');
      }
    });
  });
  $(window).on('scroll',function(){
    $('#section2').each(function(){
      let pos=$(this).offset().top;
      let scroll=$(window).scrollTop();
      let winHeight=$(window).height();
      if (scroll>pos-winHeight+winHeight/5) {
        $(this).addClass('sectionIn');
      }else{
        $(this).removeClass('sectionIn');
      }
    });
  });
  
  // $(document).on('click',function(e){
  //   if (!$(e.target).closest('#header-right').length){
  //     $('#tabu').addClass('hidden');
  //     $head_r.css('opacity','0');
  //   }
  // });

});
