$(document).ready(function(){
  $("#slippry").slippry({
    pager: false,
    captions: false,
    // controls: false
  });

  // Detectar el ancho del diamante y usar el mismo valor en height
  var dn_width = $(".diamante").width();
  $(".diamante").css({
    height: dn_width
  });

  // Agregar clase al hacer scroll
  var slider =  $('#slider').height();
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= $('#nosotros').offset().top - 100) {
      $('#nav').addClass("nav-overlay");
    } else{
      $('#nav').removeClass("nav-overlay");
    }
  });
});