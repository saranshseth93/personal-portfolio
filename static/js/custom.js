/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : RYAN
Author          : mital_04
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - mital_04
========================================================================*/


(function($){
    "use strict"
    var RYAN = {};

    $('img').lazyload({
      effect: "fadeIn"
    });

    /*--------------------
      * Pre Load
    ----------------------*/
    RYAN.WebLoad = function(){
        document.getElementById("loading").style.display = "none";
    }

    /*--------------------
        * Header Class
    ----------------------*/
    RYAN.HeaderSticky = function(){
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $(".navbar").addClass("fixed-header")
        });
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    RYAN.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }

    /*--------------------
        * Smooth Scroll
    ----------------------*/
    RYAN.HeaderScroll = function(){
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 65,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*--------------------
        * Header Fixed
    ----------------------*/
    RYAN.HeaderFixed = function(){
        if ($(window).scrollTop() >= 60) {
           $('.navbar').addClass('fixed-header');
        }
        else {
           $('.navbar').removeClass('fixed-header');
        }
    }

    /*--------------------
        * Progress Bar
    ----------------------*/
    RYAN.ProgressBar = function(){
        $(".progress .progress-bar").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
    * Counter JS
    ----------------------*/
    var a = 0;
    RYAN.Counter = function(){
      var oTop = $('.counter-box').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
          a = 1;
        }
    }

    /*--------------------
    * Isotope
    ----------------------*/
    RYAN.MasoNry = function () {
      var portfolioWork = $('.portfolio-content');
        $(portfolioWork).isotope({
            resizable: false,
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            filter: '*'
          });
          //Filtering items on portfolio.html
          var portfolioFilter = $('.filter li');
          // filter items on button click
          $(portfolioFilter).on( 'click', function() {
            var filterValue = $(this).attr('data-filter');
            portfolioWork.isotope({ filter: filterValue });
          });
          //Add/remove class on filter list
          $(portfolioFilter).on( 'click', function() {
            $(this).addClass('active').siblings().removeClass('active');
          });
    }

    /*--------------------
    * owl Slider
    ----------------------*/
    RYAN.BlogSlider = function(){
      var testimonials_slider = $('#blog-slider-single');
        testimonials_slider.owlCarousel({
            margin: 30,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 2
              },
              1140: {
                items: 2
              }
            }
        });
    }

    RYAN.ClientSlider = function(){
      var testimonials_slider = $('#client-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 0,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 2
              },
              1140: {
                items: 2
              }
            }
        });
    }


    RYAN.PopupVideo = function(){
      $('.popup-video').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
        });
    }

    RYAN.LightboxGallery = function(){
      $('.portfolio-content').magnificPopup({
          delegate: '.lightbox-gallery',
          type: 'image',
          tLoading: '#%curr%',
          mainClass: 'mfp-fade',
          fixedContentPos: true,
          closeBtnInside: true,
          gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
      });
    }

    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };


    // Window on Load
    $(window).on("load", function(){
      $('main').css('display', 'none');
      $('header').css('display', 'none');
      $('footer').css('display', 'none');
      $('body').css('background', '#000');
      setTimeout(function(){
      RYAN.WebLoad();
      $('main').css('display', 'block');
      $('header').css('display', 'block');
      $('footer').css('display', 'block');
      $('body').css('background', '#fff');
      $('.first-selected').trigger('click');

      var elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
      }, 3000);
    });

    $(document).on("ready", function(){
      $('main').css('display', 'none');
      $('header').css('display', 'none');
      $('footer').css('display', 'none');
      $('body').css('background', '#000');
        RYAN.MasoNry(),
        RYAN.ClientSlider(),
        RYAN.MenuClose(),
        RYAN.BlogSlider(),
        RYAN.Counter(),
        RYAN.ProgressBar(),
        RYAN.HeaderScroll(),
        RYAN.PopupVideo(),
        RYAN.LightboxGallery(),
        RYAN.HeaderSticky();

        setTimeout(function(){
          console.log('triggered')
        $(window).trigger('resize');
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
          particlesJS.load('home', '/static/plugin/particles/particlesjs-config.json', function() {
            console.log('callback - particles.js config loaded');
            toastr.info('Try playing with the floating stars on the landing page. They interact with hover and click!', {timeOut: 7000});
          });
        }, 3100);

      });

      var tl = new TimelineMax();
        var bgd = $('#background rect');
        var table = $('#table_legs, #table');
        var lampLeg = $('#lamp > .lamp-leg');
        var lampbt = $('#lamp-bottom');
        var lampLight = $('#lamp > .light');
        var lampLine = $('#lamp-line');
        var lampLineB = $('#lamp-line-b');
        var lampLineT = $('#lamp-line-t');
        var lampCircle = $('#lamp-circle');
        var lampHead = $('#lamp-head');
        var lampHeader = $('#lamp-header');
        var lampBody = $('#lamp-body');
        var computer = $('#computer > *');
        var keyboard = $('#keyboard > *');
        var asset = $('#computer_mouse > * , #coffee_mug > *');

      var animation = _.once(function(){
              console.log('hola')

        tl.from(bgd, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
          .staggerFrom(table, 0.2, {y:"-=200", opacity: 0, ease: Elastic.easeOut}, 0.1)
          .from(lampLeg, 0.2, {opacity:0, x: "-200", ease: Elastic.easeOut})
          .from(lampbt, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
          .from(lampLineB, 0.3,{opacity:0, transformOrigin: '100% 100%', rotation: '-180deg'})
          .from(lampCircle,0.1,{opacity:0, x: '-=100', y: '-=100'})
          .from(lampLineT, 0.3,{opacity:0, transformOrigin: '0% 100%', rotation: '-180deg'})
          .from(lampHead, 0.2, {opacity:0, scale:0, ease: Elastic.easeOut})
          .from(lampHeader, 0.5, {transformOrigin: '60% 60%', rotation: '60deg'})
          .from(lampBody, 0.5, {transformOrigin: '70% 70%', rotation: '-25deg'})
          .staggerFrom(computer, 1, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Back .easeOut}, 0.2)
          .staggerFrom(keyboard, 0.5, {opacity: 0, y: '-=100', ease: Linear.easeInOut }, 0.05)
          .staggerFrom(asset, 0.5, {opacity: 0}, 0.05)
          .to(lampLight, 0.2, {opacity:0.8, ease: Elastic.easeOut, delay:0.5}, "a")
          .to(lampLight, 0.1, {opacity:0}, "b")
          .to(lampLight, 0.1, {opacity:0.2}, "c")
          .to(bgd, 0.2, {opacity: 0.1, delay:0.5}, "a-=0.05")
          .to(bgd, 0.1, {opacity: 1}, "b-=0.05")
          .to(bgd, 0.1, {opacity: 0.5}, "c-=0.05")
          .to(bgd, 0.2, {opacity: 1, fill: '#FDD10D'})
          .fromTo(lampLine, 0.2, {opacity: 0},{opacity: 0.2, delay:0.5}, "a-=0.05")
          .to(lampLine, 0.1, {opacity: 1}, "b-=0.05")
          .to(lampLine, 0.1, {opacity: 0.5}, "c-=0.05");
      });

    $(window).on("scroll", function(){
        RYAN.Counter(),
        RYAN.ProgressBar(),
        RYAN.HeaderFixed();

        var hT = $('#our-skill').offset().top,
       hH = $('#our-skill').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
          animation();
        }

    });

    $(window).on({
      'touchmove': function(e) {
        var hT = $('#our-skill').offset().top,
        hH = $('#our-skill').outerHeight() - 200,
        wH = $(window).height(),
        wS = $(this).scrollTop();
         if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
           animation();
         }
         if (wS > (hT+hH-wH)){
           animation();
         }
      }
  });

  window.addEventListener('scroll', function() {

    var hT = $('#our-skill').offset().top,
        hH = $('#our-skill').outerHeight() - 200,
        wH = $(window).height(),
        wS = $(this).scrollTop();
         if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
           animation();
         }
         if (wS > (hT+hH-wH)){
           animation();
         }

   });

   /* Contact Form */
   (function () {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                // $(formMessages).removeClass('alert alert-danger');
                // $(formMessages).addClass('alert alert-success');

                // Set the message text.
                // $(formMessages).text(response);
                toastr.success('Success!', response);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                // $(formMessages).removeClass('alert alert-success');
                // $(formMessages).addClass('alert alert-danger');

                // Set the message text.
                if (data.responseText !== '') {
                  toastr.error('Error!', data.responseText);
                    // $(formMessages).text(data.responseText);
                } else {
                  toastr.error('Error!', 'Oops! An error occured and your message could not be sent.');
                    // $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });

})();

})(jQuery);
