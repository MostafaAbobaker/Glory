$( function() {
  /*Start  Add To Cart */
  let count = 0;
  $('.add-Card').on('click', function () {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.card-ship-body').parent('.card-ship').find("img").eq(0);
    $('.navbar').removeClass('fixed-top');
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
            
            left: imgtodrag.offset().left
        })
            .css({
              'opacity': '0.8',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '9999999999999'
        })

            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75,
                'z-index': 9999999999999
        }, 1500, 'easeInOutExpo');
        
        setTimeout(function () {
          count++;
          $(".shopping-cart .badge").text(count);
          cart.effect("shake", {
                times: 1
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
            'height': 0
          }, function () {
            $(this).detach()
        });
    }
  });  
  /*End  Add To Cart */

  /* Start Scroll Nav Bar */
  $(window).scroll(function () {
    if($(this).scrollTop() > 100)
    {
        if (!$('.navbar').hasClass('fixed-top'))
        {
            $('.navbar').stop().addClass('fixed-top').css('top', '-50px').animate(
                {
                    'top': '0px'
                }, 500);
        }
    }
    else
    {
        $('.navbar').removeClass('fixed-top');
    }
  });
  /* End Scroll Nav Bar */

  /* Start Filter Prodect Glory */
  $('#Glory').click(function(){
    if($(this).prop("checked") == true){
        $('#ourProducts .Joon').slideUp(500);
    }
    else {
      $('#ourProducts .Joon').slideDown(500);
    }
  });
   /* End Filter Prodect Glory */
    /* Start Filter Prodect Joon */
  $('#Joon').click(function(){
    if($(this).prop("checked") == true){
        $('#ourProducts .Glory').slideUp(500);
    }
    else {
      $('#ourProducts .Glory').slideDown(500);
    }
  });
  /* End Filter Prodect Joon */
  /* Start Filter Grid || Row Prodect */
  $('#rows').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('#ourProducts .card-ship').addClass('list').parent('.col-lg-4').removeClass('col-lg-4').addClass('col-lg-6');
  });
  $('#grad').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('#ourProducts .card-ship').removeClass('list').parent('.col-lg-6').removeClass('col-lg-6').addClass('col-lg-4');
  });
  /* End Filter Grid || Row Prodect */

  $('.input-control').on('blur', function () {
    if ($(this).val() !== "") {
      $(this).parent().addClass('focus');
    } else {
      $(this).parent().removeClass('focus');
    }
  });

  /*Start Image Change Page clinical  */
  $('#shangPhoto .one').click(function () {
    $(".img-before").removeAttr("src");
    $(".img-before").attr("src", "images/before_2.png");
    $(".img-after").removeAttr("src");
    $(".img-after").attr("src", "images/after_2.jpg");
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('#shangPhoto .Two').click(function () {
    $(".img-before").removeAttr("src");
    $(".img-before").attr("src", "images/before-1.png");
    $(".img-after").removeAttr("src");
    $(".img-after").attr("src", "images/after-1.png");
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('#shangPhoto .Three').click(function () {
    $(".img-before").removeAttr("src");
    $(".img-before").attr("src", "images/before_1.jpg");
    $(".img-after").removeAttr("src");
    $(".img-after").attr("src", "images/after_1.jpg");
    $(this).addClass('active').siblings().removeClass('active');
  });
  /*End Image Change Page clinical  */

  //Wow Scroll
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  // Start owl Carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
});



/* Start Image Change Page clinical*/
$(window).load(function() {
 
 $("#container1").twentytwenty(); 
  
 
});
/* End Image Change Page clinical*/


/* Start Login */

/* End Login */