$("nav div").click(function() {
         $("nav ul").slideToggle();
         $("searchbar").slideToggle();
         $("ul ul").css("display", "none");
   });

   $('nav ul li').click(function () {
        $(this).siblings().find('ul').slideUp();
       $(this).find('ul').slideToggle();
   });

   $(window).resize(function() {
         if($(window).width() > 768) {
               $("ul").removeAttr('style');
         }
  });

/* js for internav  hamburger*/
document.getElementById("collapse").addEventListener("click", collapse);

function collapse(){
  display:


}
