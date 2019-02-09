$(document).ready(function(){
    $('#slider').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        rtl:true,
      });
      $('#box-slider').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverpause: true,
        rtl:true,
      });
      $('#box-slider2').owlCarousel({
        items:3,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverpause:true,
        rtl:true,
      });
      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false
      });
      $(window).scroll(function(){
        if ($(window).scrollTop() > 150) {
            $("#navbar").addClass("myNavbar");
        }else
        {
          $("#navbar").removeClass("myNavbar"); 
        }
      });

  $(window).scroll(function()
  {
    if($(this).scroll()>250){
      $('.scrollToTop').fadeIn();
    }else 
    $('.scrollToTop').fadeOut();
  })
  $('.scrollToTop').click(function(){
    $('html , body').animate({scrollTop: 0 } , 5000);
  });

});
$(document).ready(function(){
  alert("به سایت ما خوش آمدید");
})