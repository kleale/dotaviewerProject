/*
* Global scripts
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    
    
    /* Anything that gets to the document
     will hide the dropdown */
    $(document).click(function(){
      $("#dropdown").hide();
    });

    /* Clicks within the dropdown won't make
       it past the dropdown itself */
    /*
    $("#dropdown").click(function(e){
      e.stopPropagation();
    });
    */
    
    // bar toggle on mobile
    $("#menu-toggle").click(function() {
      $("body").toggleClass("menu-open");
      $(this).toggleClass("active");
      $(".bar").toggleClass("hiddenbar");
	});
    
    $(window).scroll(function() {
      var wbh = $('#ytplayer').parent().offset().top - 50;
      if (wbh-$(window).scrollTop() <= 0) {
        $('#b1').addClass('fix');
      }
      else {
        $('#b1').removeClass('fix');
      }
    });
    
    //tip
    $('.tip').tooltip();
    
  }); //end ready

}(jQuery));