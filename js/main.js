//центрирование формы
$(function(){
  $.fn.center = function(){
      $(this).css("margin-top", '-' + ($(this).height() / 2) + 'px');
      return $(this);
  }
  $(window).resize(function(){$('.modal').center();});

  $(".input-phone").mask("+7 (999) 999-9999");

  $('.open__modal').click(function(){
    $('.overlay, #'+$(this).data('id')).fadeIn();
    $('#'+$(this).data('id')).center();
  });

  $('.modal__close, .overlay, .modal_cart__shop').click(function(){
    $('.overlay, .modal').fadeOut();
  });

  //отправить заказ в корзину
  $('.product__btn-cart').click(function(){
    $('.overlay, #modal_cart').fadeIn();
    $('#modal_cart').center();
  });

  $('.rating-block__star .icon-star').click(function () {
      var current = $(this).data('val');
      $('#rating').val(current);
      for( var i = 1; i <=5; i++ ){
        if (i <= current)
          $(".rt"+i).addClass('orange')
      }
       console.log("Выбранная оценка:"+$('#rating').val());
  });

});

$(document).on('click', '.reviews-video__right-video', function() {
  var $video = $('#video'),
    src = $(this).data('id');
  $video.attr('src', 'https://www.youtube.com/embed/' + src + '?rel=0&showinfo=0&autoplay=1');
});

var swiper = new Swiper('.slider .swiper-container', {
    spaceBetween: 0,
    pagination: {
      el: '.slider .swiper-pagination',
      clickable: true,
    },
    // autoplay: {
    //   delay: 5000,
    // },
  });
  var swiper = new Swiper('.complete .swiper-container', {
    spaceBetween: 20,
    slidesPerView: 4,
    pagination: {
      el: '.complete .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1023: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
  var swiper = new Swiper('.related .swiper-container', {
    spaceBetween: 20,
    slidesPerView: 4,
    navigation: {
      nextEl: '.related .button-next',
      prevEl: '.related .button-prev',
    },
    breakpoints: {
      1023: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
  var swiper = new Swiper('.reviews .swiper-container', {
    navigation: {
      nextEl: '.reviews .button-next',
      prevEl: '.reviews .button-prev',
    }
  });
  var swiper = new Swiper('.bath-slider .swiper-container', {
    navigation: {
      nextEl: '.bath-slider .button-next',
      prevEl: '.bath-slider .button-prev',
    },
    // autoplay: {
    //   delay: 5000,
    // },
  });

   var galleryThumbs = new Swiper('.product-thumbs', {
      spaceBetween: 15,
      slidesPerView: 4,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

      breakpoints: {
        1023: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        767: {
          slidesPerView: 4
        },
        499: {
          slidesPerView: 3
        }
      }
    });
    var galleryTop = new Swiper('.product-top', {
      spaceBetween: 10,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

$(function(){


  $('.more-features').click(function () {
    $(this).hide();
    $('.feature__item:nth-child(n+6)').addClass('show-features');
  });

  $('.hide-menu-more.open').click(function () {
    $(this).parent().find('.hide-cat li:nth-child(n+6)').show();
    $(this).hide();
    $(this).parent().find('.hide-menu-more.close').show();
  });  
  $('.hide-menu-more.close').click(function () {
    $(this).parent().find('.hide-cat li:nth-child(n+6)').hide();
    $(this).hide();
    $(this).parent().find('.hide-menu-more.open').show();
  });

  $(".cat-list").each(function() {
    if($(this).find(".cat-list__item").length <= 6){
      $(this).find('.hide-menu-more').hide();
    }
  });

  $('.header__bottom-search').click(function () {
    $('.search').show();
  });
  $('.search__close').click(function () {
    $('.search').hide();
  });

});

if(document.documentElement.clientWidth < 1024) 
  var tr = false;
else var tr = true;
$('[data-fancybox]').fancybox({
  thumbs : {
    autoStart : tr
  }
});

 $('.project__item-link').on('click', function() {
  
  $.fancybox.open( images[$(this).data('project')], {
    touch: false,
    infobar: false,
    thumbs : {
      autoStart : tr
    }
  });
});

 
$(function(){
  $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });

  $('.faq').click(function() {
    $(this).find('.faq__answer').slideToggle();
    $(this).toggleClass('active');
  });

  $('.products-filter').click(function() {
    $(this).parent().find('.hide-filter').slideToggle();
    $(this).toggleClass('active');
  });

  $('.mcatalog__parent .icon-angle-down').click(function() {
    $(this).parent().parent().find('.mcatalog__list').slideToggle();
    $(this).toggleClass('active');
  });

  $(window).scroll(function() {
      0 != $(this).scrollTop() ? $(".totop").fadeIn() : $(".totop").fadeOut()
  }),
  $(".totop").click(function() {
      $("body,html").animate({
          scrollTop: 0
      }, 500)
  })

});

$('document').ready(function() {

  $('.reviews__video-frame').css('height', $('.reviews__text .swiper-container').height()-10);

  if(document.documentElement.clientWidth < 1024) {
    $('.header-column-menu').appendTo('.mob-menu__menu');
    $('.header-column').appendTo('.mob-menu');

    $('.header__catalog').click(function() {
      $('.header__catalog-list').slideToggle();
    });

    $('.header__top-cartwrap').click(function() {
      $('.cartinfo').slideToggle();
    });

    $('.mob-menubtn').click(function() { 
      $('.mob-menu').animate({left: 0}, 200);          
      $('body,.header__top').animate({left: '280px'}, 200);
    });
    $('.mob-menu__close').click(function() { 
      $('.mob-menu').animate({left: '-280px'}, 200);          
      $('body,.header__top').animate({left: 0}, 200);
    });


  }

  
});




$(function(){
    var wrapper = $( ".attach" ),
        inp = wrapper.find( "input" ),
        lbl = wrapper.find( ".name" );

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] ) 
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
        }
    }).change();
});

