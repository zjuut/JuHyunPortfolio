$(function(){
  /* Header */
  // Menu Bar
  $('.hd_menu_bar').click(function(){
    $(this).toggleClass('active');
    $('.hd_menu').fadeToggle(250);
  })
  $('.hd_menu a').click(function(){
    $('.hd_menu_bar').removeClass('active');
    $('.hd_menu').fadeOut(250);
  })

  /* Scroll Event */
  $(window).scroll(function(){
    // Container
    $('.profile_img img, .profile_info, .about, .project').each(function(){
      var contentsTop = $(this).offset().top;
          windowHalf = $(window).height() / 2;
          contentsShow = contentsTop - windowHalf;
          windowTop = $(window).scrollTop();

      if(contentsShow < windowTop){
        $(this).animate({'opacity':'1'},500);
      }
    })
  })

  /* Top Btn */
  $('.top_btn').click(function(){
    $(window).scrollTop(0);
  })
  
})

$(function(){
  if(window.matchMedia('screen and (min-width : 1024px)').matches){
    /* Section : Portfolio */
    $(window).scroll(function(){
      $('.project').each(function(){
        var projectTop = $(this).offset().top;
            windowHalf = $(window).height() / 2;
            projectShow = projectTop - windowHalf;
            windowTop = $(window).scrollTop();

        if(projectShow < windowTop){
          $('.project_list li').eq($(this).index()).addClass('active');
          $('.project_list li').eq($(this).index()).siblings().removeClass('active');
        }
      })  
    })

  }

  if(window.matchMedia('screen and (max-width : 1023px)').matches){
    /* HTML Change */
    $('.hd_menu_inner ul').after($('.hd_rt .contact'));
    $('.hd_menu_inner .contact').prepend('<span>contact</span>');

    $('.profile_info .personal li:eq(2)').after('<br>');

    $('.project_list a').attr('href','#none');

    /* Header */
    $(window).scroll(function(){
      if($(window).scrollTop() > $('section.main').height()){
        $('header').addClass('fill');
      }
      else {
        $('header').removeClass('fill');
      }
    })

    /* Section : Portfolio */
    $('.project_list li').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.project').eq($(this).index()).show();
      $('.project').eq($(this).index()).siblings().hide();
    })

  }

  if(window.matchMedia('screen and (max-width : 767px)').matches){
    /* HTML Change */
    $('.main_txt p:eq(1)').html('강주현의<br>포트폴리오입니다');
    $('.project_desc p br').remove();
    $('footer .info span:eq(2)').before('<br>');




  }
})
