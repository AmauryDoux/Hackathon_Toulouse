




//this is where we apply opacity to the arrow
$(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;

  //get height of window
  var windowHeight = $(window).height();

  //set position as percentage of how far the user has scrolled
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});

//Code stolen from css-tricks for smooth scrolling:
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});


$(document).ready(function () {

    $("#menu").click(function (e) {
        e.preventDefault();
        $this = $(this)

        // si le menu est ouvert 
        if ( $this.hasClass("is-opened"))
        {
            //Animation Menu Fermeture
            $("#openMenu").addClass("is-closed").removeClass("is-opened");
            
            //Animation Logo Menu
            $this.addClass("is-closed").removeClass("is-opened");
            
            console.log("nuit");
            
            
            //si il est fermé
        } else {
            
            //Animation Menu Ouvertures
            $("#openMenu").removeClass("is-closed").addClass("is-opened");
            
            //animation Logo Menu
            $this.removeClass("is-closed").addClass("is-opened");
            
            console.log("jour");
        }

    }) 
    
    $(".link").click(function (e) {
        e.preventDefault();
    // liens cliquable et fermable 
        $("#openMenu").addClass("is-closed");
         $("#menu").addClass("is-closed").removeClass("is-opened");
        
    })
    
    
    
});

