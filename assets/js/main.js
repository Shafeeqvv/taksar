; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length){
            $('.single-select').niceSelect();
        }

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#td-search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click','.search-bar-btn',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });


        // banner //
        var bannerRounderContainer = $('.bannerpiechart');
        if (bannerRounderContainer.length) {
            bannerRounderContainer.each(function () {
            var Self = $(this);
            var value = Self.data('value');
            var size = Self.parent().width();
            var color = Self.data('border-color');

            Self.find('span').each(function () {
            var expertCount = $(this);
            expertCount.appear(function () {
            expertCount.countTo({
            from: 1,
            to: value*100,
            speed: 2000
            });
            });

            });
            Self.appear(function () {         
            Self.circleProgress({
            value: value,
            size: 100,
            thickness: 6,
            emptyFill: '#e8eef1',
            animation: {
            duration: 2000
            },
            fill: {
            color: color
            }
            });
            });
            });
        };

        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="fa fa-arrow-left"></i>';
        var rightArrow = '<i class="fa fa-arrow-right"></i>';
        var leftArrow2 = '<i class="fas fa-arrow-left"></i>';
        var rightArrow2 = '<i class="fas fa-arrow-right"></i>';

        /*--------------------------------------------
            course slider
        ---------------------------------------------*/
        $('.course-slider-1').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 1500,
            navText: [ leftArrow, rightArrow],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                992: {
                    items: 2.6
                },
                1200: {
                    items: 3.3
                },
                1600: {
                    items: 3.6
                },
            }
        });

        /*--------------------------------------------
            client slider
        ---------------------------------------------*/
      // JavaScript for Owl Carousel
        $('.client-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true, // Enable navigation arrows
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 3000,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'], // Use appropriate icons for left and right arrows
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },
            }
        });



        /*--------------------------------------------
            testimonial slider
        ---------------------------------------------*/
        $('.testimonial-slider-1').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            smartSpeed: 1500,
            navText: [ leftArrow, rightArrow],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                992: {
                    items: 1.8
                },
                1200: {
                    items: 2.3
                },
                1600: {
                    items: 2.6
                },
            }
        });

        /*--------------------------------------------
            testimonial slider
        ---------------------------------------------*/
        $('.testimonial-slider-2').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            smartSpeed: 1500,
            navText: [ leftArrow, rightArrow],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1600: {
                    items: 3
                },
            }
        });


        /*--------------------------------------------
            testimonial slider
        ---------------------------------------------*/
        $('.team-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 1500,
            navText: [ leftArrow2, rightArrow2],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });

        /*--------------------------------------------
            testimonial slider 2
        ---------------------------------------------*/
        $('.category-slider').owlCarousel({
            loop: true,
            margin: 25,
            nav: true,
            dots: false,
            smartSpeed: 1500,
            navText: [ leftArrow, rightArrow],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                992: {
                    items: 4
                },
            }
        });

        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.video-play-btn-hover').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /* -----------------------------------------
            fact counter
        ----------------------------------------- */
        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });

        /*-------------------------------------------------
            wow js init
        --------------------------------------------------*/
        new WOW().init();


        /*----------------------------------------
           back to top
        ----------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
            back-to-top
        -----------------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*---------------------------------------
            sticky-active
        -----------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }

    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });

})(jQuery);