$(document).ready(function() {
  $("#about").mouseenter(function() {
       $(this).animate({
           opacity: 0.25,
            top: "+=15"
       });
   });
       $("#about").mouseleave(function() {
       $(this).animate({
            opacity: 1.33,
            top: "-=15"
       }); 
       });
});