$(function () {
  //@ad_swiper
  var swiper = new Swiper(".ad_swiper", {
    autoplay: {
      delay: 5400,
    },
    loop: true,
    effect: 'fade',
  });


  //@sc_visual
  var swiper = new Swiper(".sc_visual .v_slide", {
    pagination: {
      el: ".swiper-pagination",
    },

  });
  $('header .bar_menu').click(function (e) {
    e.preventDefault();
    $('.side_menu').addClass('on');
    $('body').addClass('hidden');
  })
  $('.side_menu .close, .dim').click(function (e) {
    e.preventDefault();
    $('.side_menu').removeClass('on');
    $('body').removeClass('hidden');
  })
  // slidesPerView: 2.2,
  // spaceBetween: 10,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  var swiper = new Swiper(".headerSwiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },

  });


  $(window).scroll(function () {
    const curr = $(window).scrollTop(); 
    if (curr > 0) {
      $('.logo_wrap').addClass('on');
    } else {
      $('.logo_wrap').removeClass('on');
    }

  })



  $('.circle').click(function (e) {
    e.preventDefault();
    $('.sub').stop().slideUp();
    $(this).siblings('.sub').stop().slideToggle(200);

    if ($(this).hasClass('on')) { //열려있는경우
      $('.circle').removeClass('on');
    } else {
      $('.circle').removeClass('on');
      $(this).addClass('on')
    }
  })
  $('.all_menu').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('on')
    $('.all_menulist').stop().slideToggle();
    $('header .menu').toggleClass('on')
  })


  var swiper = new Swiper(".sc_cate .prd_list", {
    // width:'auto', // auto에 ''랑 같이 써야함
    slidesPerView: 2.2,
    spaceBetween: 10,
  });


})//지우지마시오