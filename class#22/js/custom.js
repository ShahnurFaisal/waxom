$(function(){
    $('.banner_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        arrows:false,
        
      });

      // service_slider 
    $('.service_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        arrows:false,
        
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
      });

      // mixitup 
      var containerEl = document.querySelector('.mixitup_tt');

      var mixer = mixitup(containerEl);

      // video_venobox 

      new VenoBox({
        selector: '.my-video-links',
    });


    //  counter_up 
    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });


  // blog_slick 
  $('.blog_slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows:false,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
    
  });
  // sticky_header
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_header');
    }
    else {
         $('.navbar').removeClass('sticky_header');
    }
    }); 

});