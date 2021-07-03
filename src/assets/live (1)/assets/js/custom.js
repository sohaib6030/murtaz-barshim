$(document).ready(function() {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function() {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
    });

     // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
      
});


// Horizontal Scroll Start

const mouseWheel = document.querySelector('.horizontalscrol');
mouseWheel.addEventListener('wheel', function(e) {
    const race = 50; // How many pixels to scroll

    if (e.deltaY > 0) // Scroll right
        mouseWheel.scrollLeft += race;
    else // Scroll left
        mouseWheel.scrollLeft -= race;
        e.preventDefault();
});
// Horizontal Scroll End


// Fancy Media
$('.fancybox-media').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    helpers: {
        media: {}
    }
});


// $(".btns").click(function(){
//     $("header").slideToggle();
// });


// $(".closebtn").click(function(){
//     $("header").slideToggle();
// });

// $(".main-menu li a").click(function(){
//     $("header").slideToggle();
//     // document.getElementById("header").style.display = "none";
// });

// $(".header-menu ul li a").click(function(){
//     $("header").slideToggle();
//     // document.getElementById("header").style.display = "none";
// });

// $(".header-menu ul li a").click(function(){
//     // $("header").slideToggle();
//     $.scrollify.current();
// });


// Slider For
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
});

// Normal Slider
$('.sideslider').slick({
  dots: false,
  arrows:true,
  infinite: true,
  vertical:true,
  verticalSwiping:true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

/* RESPONSIVE JS */
if ($(window).width() < 825) {
}