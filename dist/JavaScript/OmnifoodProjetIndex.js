$(document).ready(function() {
    $('.js--features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, { offset: '60px;'});



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
          }, 2500, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

    //   Animation Scroll
      $('.javascript-waypoint-1').waypoint(function(direction) {
          $('.javascript-waypoint-1').addClass('animated fadeIn');
        }, { offset: '50%'});

      $('.javascript-waypoint-2').waypoint(function(direction) {
        $('.javascript-waypoint-2').addClass('animated fadeInUp');
        }, { offset: '50%'});

    $('.javascript-waypoint-3').waypoint(function(direction) {
        $('.javascript-waypoint-3').addClass('animated fadeIn');
        }, { offset: '70%'});

    $('.javascript-waypoint-4').waypoint(function(direction) {
        $('.javascript-waypoint-4').addClass('animated pulse');
        }, { offset: '50%'});



    $('.javascript-hamburger-icon').click(function() {
        var nav = $('.javscript-main-navigation');
        var icon = $('.javascript-hamburger-icon i');

        nav.slideToggle(300);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round')
        }
    });

    // La carte 
    new GMaps({
        div: '.map',
        lat: -12.043333,
        lng: -77.028333
      });
});
                 