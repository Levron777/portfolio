
// Анимация появления заголовков каждого блока
$(document).ready( function() {

  $(window).scroll(function() {
    $('.stackH1').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 350 ) {
        $(this).addClass(' animated bounceInDown slow');
      }
    });
  });

  $(window).scroll(function() {
    $('.worksH1').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 300 ) {
        $(this).addClass(' animated fadeInUp slow');
      }
    });
  });

  $(window).scroll(function() {
    $('.skillsH1').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 300 ) {
        $(this).addClass(' animated fadeInUp slow');
      }
    });
  });

  $(window).scroll(function() {
    $('.contactsH1').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 500 ) {
        $(this).addClass(' animated fadeInUp slow');
      }
    });
  });

  // Анимация появления блоков front-end back-end

  $(window).scroll(function() {
    $('.itemStack1').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 500 ) {
        $(this).addClass(' animated fadeInLeft slow');
      }
    });
  });

  $(window).scroll(function() {
    $('.itemStack2').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 500 ) {
        $(this).addClass(' animated fadeInRight slow');
      }
    });
  });
    
  // Анимация появления блоков портфолио

  $(window).scroll(function() {
    $('.itemWorks1').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 500 ) {
        $(this).addClass('animated pulse slow');
      }
    });
  });

  $(window).scroll(function() {
    $('.itemWorks2').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 500 ) {
        $(this).addClass('animated pulse slow');
      }
    });
  });

  $(window).scroll(function() {
    $('.itemWorks3').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 500 ) {
        $(this).addClass('animated pulse slow');
      }
    });
  });

  $(window).scroll(function() {
    $('.itemWorks4').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 500 ) {
        $(this).addClass('animated pulse slow');
      }
    });
  });

  // Анимация при наведении на блоки портфолио 

  $('.itemWorks1').hover(
    function() {
      $(this).toggleClass(' pulse slow');
    }
  );

  $('.itemWorks2').hover(
    function() {
      $(this).toggleClass(' pulse slow');
    }
  );

  $('.itemWorks3').hover(
    function() {
      $(this).toggleClass(' pulse slow');
    }
  );

  $('.itemWorks4').hover(
    function() {
      $(this).toggleClass(' pulse slow');
    }
  );

  // Анимация появления блока Email и ссылки на страницу в ВК

  $(window).scroll(function() {
    $('.contactsEmail').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 600 ) {
        $(this).addClass(' animated fadeInLeft slow');
      }
    });
  });

  $(window).scroll(function() {
    $('.contactsVK').each(function() {
      var imagePosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if ( imagePosition < topOfWindow + 600 ) {
        $(this).addClass(' animated fadeInRight slow');
      }
    });
  });

  // Показать/скрыть Email

  $('.emailShow').click(function() {
    if ( ($(".email").css("display")) == 'none' ) {
      $(".email").show(300);
    } else {
      $(".email").hide(900);
    }
  });

  // Анимация прокрутки навигационной панели

  $(window).scroll(function() {
    if ($(this).scrollTop() > 760){
      $('.header').addClass("sticky");
    }else {
      $('.header').removeClass("sticky");
    }
  });

});

