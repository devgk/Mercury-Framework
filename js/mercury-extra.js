//Mercury.js
//jQuery Based Javascipt Framework
//Developer: Gaurav Kumar


//Creating Carousel based on data attributes
function createCarousel() {
    //Creating simpe carousel
    try {
        var carouselItems = document.getElementsByClassName('carouselslider');
    }
    catch(err){console.log(err);
        carouselItems = 0;
    }
    for (i = 0; i < carouselItems.length; i++) {

        //Define Carousel
        var name = carouselItems[i];

        //Set number of slding slides at once
        var slidingSlide = carouselItems[i].getAttribute('slide');
        if (slidingSlide == 'all') {
            var a = 1;
            var b = 2;
            var c = 3;
            var d = 4;
            var e = 5;
        }
        if (slidingSlide == 'one') {
            var a = 1;
            var b = 1;
            var c = 1;
            var d = 1;
            var e = 1;
        }

        //Setting AutoPlay
        try {
            var autoplay = carouselItems[i].getAttribute('autoplay');
        }
        catch(err){console.log(err);}
        if (autoplay == "yes") {
            autoplay = true;
        }
        else {
            autoplay = false;
        }

        //Seting delay
        try {
            var slidingDelay = carouselItems[i].getAttribute('delay');
        }
        catch(err){console.log(err);
            slidingDelay = 5;
        }

        //Seting scroll limit - Infinite or not Infinite
        try {
            var infiniteStatus = carouselItems[i].getAttribute('infinite');
        }
        catch(err){console.log(err);}
        if (infiniteStatus == "yes") {
            infiniteStatus = true;
        }
        else {
            infiniteStatus = false;
        }

        //Setting Navigation Arrows
        try {
            var arrowStatus = carouselItems[i].getAttribute('arrow');
        }
        catch(err){console.log(err);}
        if (arrowStatus == "yes") {
            arrowStatus = true;
        }
        else {
            arrowStatus = false;
        }

        //Setting Navigation Dots
        try {
            var dotsStatus = carouselItems[i].getAttribute('dots');
        }
        catch(err){console.log(err);}
        if (dotsStatus == "yes") {
            dotsStatus = true;
        }
        else {
            dotsStatus = false;
        }

        //Creating carousel object of three set slides
        if ( carouselItems[i].getAttribute('slidesToShow') <= 3 ) {
            $(name).slick({
                lazyLoad: 'ondemand'
                , slidesToShow: 3
                , slidesToScroll: c
                , infinite: infiniteStatus
                , autoplay: autoplay
                , autoplaySpeed: slidingDelay * 1000
                , arrows: arrowStatus
                , dots: dotsStatus
                , responsive: [
                    {
                        breakpoint: 750
                        , settings: {
                            slidesToShow: 2
                            , slidesToScroll: b
                        }
                    }
                    , {
                        breakpoint: 500
                        , settings: {
                            slidesToShow: 1
                            , slidesToScroll: a
                        }
                    }
                    ]
            });
        }

        //Creating carousel object of four set slides
        if ( carouselItems[i].getAttribute('slidesToShow') == 4 ) {
            $(name).slick({
                lazyLoad: 'ondemand'
                , slidesToShow: 4
                , slidesToScroll: d
                , infinite: infiniteStatus
                , autoplay: autoplay
                , autoplaySpeed: slidingDelay * 1000
                , arrows: arrowStatus
                , dots: dotsStatus
                , responsive: [
                    {
                        breakpoint: 1000
                        , settings: {
                            slidesToShow: 3
                            , slidesToScroll: c
                        }
                    }
                    , {
                        breakpoint: 750
                        , settings: {
                            slidesToShow: 2
                            , slidesToScroll: b
                        }
                    }
                    , {
                        breakpoint: 500
                        , settings: {
                            slidesToShow: 1
                            , slidesToScroll: a
                        }
                    }
                    ]
            });
        }

        //Creating carousel object of five set slides
        if ( carouselItems[i].getAttribute('slidesToShow') >= 5 ) {
            $(name).slick({
                lazyLoad: 'ondemand'
                , slidesToShow: 5
                , slidesToScroll: e
                , infinite: infiniteStatus
                , autoplay: autoplay
                , autoplaySpeed: slidingDelay * 1000
                , arrows: arrowStatus
                , dots: dotsStatus
                , responsive: [
                    {
                        breakpoint: 1200
                        , settings: {
                            slidesToShow: 4
                            , slidesToScroll: d
                        }
                    }
                    , {
                        breakpoint: 1000
                        , settings: {
                            slidesToShow: 3
                            , slidesToScroll: c
                        }
                    }
                    , {
                        breakpoint: 750
                        , settings: {
                            slidesToShow: 2
                            , slidesToScroll: b
                        }
                    }
                    , {
                        breakpoint: 500
                        , settings: {
                            slidesToShow: 1
                            , slidesToScroll: a
                        }
                    }
                    ]
            });
        }
    }


    //Creating carousel slider
    try {
        var slider = document.getElementsByClassName('smartslider');
    }
    catch(err){console.log(err);
        slider = 0;
    }
    for (i = 0; i < slider.length; i++) {

        //Define carousel slider
        var name = slider[i];

        //Setting autoPlay of slider
        try {
            var autoplay = slider[i].getAttribute('autoplay');
        }
        catch(err){console.log(err);}
        if (autoplay == "yes") {
            autoplay = true;
        }
        else {
            autoplay = false;
        }

        //Seting autoplay delay
        try {
            var slidingDelay = slider[i].getAttribute('delay');
        }
        catch(err){console.log(err);
            slidingDelay = 5;
        }
        //Seting Infinite
        try {
            var infiniteStatus = slider[i].getAttribute('infinite');
        }
        catch(err){console.log(err);}
        if (infiniteStatus == "yes") {
            infiniteStatus = true;
        }
        else {
            infiniteStatus = false;
        }

        //Setting navigation arrows
        try {
            var arrowStatus = slider[i].getAttribute('arrow');
        }
        catch(err){console.log(err);}
        if (arrowStatus == "yes") {
            arrowStatus = true;
        }
        else {
            arrowStatus = false;
        }

        //Setting navigation dots
        try {
            var dotsStatus = slider[i].getAttribute('dots');
        }
        catch(err){console.log(err);}
        if (dotsStatus == "yes") {
            dotsStatus = true;
        }
        else {
            dotsStatus = false;
        }

        //Creating slider object
        $(name).slick({
            lazyLoad: 'ondemand'
            , slidesToShow: 1
            , slidesToScroll: 1
            , infinite: infiniteStatus
            , autoplay: autoplay
            , autoplaySpeed: slidingDelay * 1000
            , arrows: arrowStatus
            , dots: dotsStatus
        });
    }


    //Creating parallax accordingly
    try {

        //Creating parralax for each slide
        $('.slide').each(function () {
            var $container = $(this);

            //Creating jarallax object
            $(this).jarallax({

                //Enable prallax only when it is in view port
                elementInViewport: $container
            });
        });
    }
    catch(err){console.log(err);}

    $('.sliding-table').slick({
      slidesToShow: 3
      , slidesToScroll: 1
      , infinite: true
      , autoplay: false
      , arrows: false
      , dots: true
      , responsive: [
        {breakpoint: 1000, settings: { slidesToShow: 2 }},
        {breakpoint: 700, settings: { slidesToShow: 1 }}
      ]
    });

}

//accordion
function accordion(){
  $('.accordion #tab').click(function(j) {
      var dropDown = $(this).closest('li').find('p');

      $(this).closest('.accordion').find('p').not(dropDown).slideUp();

      if ($(this).hasClass('activetab')) {
          $(this).removeClass('activetab');
      } else {
          $(this).closest('.accordion').find('#tab.activetab').removeClass('activetab');
          $(this).addClass('activetab');
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
  });
}


//Auto Run
function madv(){createCarousel();accordion();}
//Run These Functions
if(window.addEventListener){window.addEventListener('load', madv);}
else{window.attachEvent('onload', madv);}
