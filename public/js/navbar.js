//Funcion para cambiar la seccion activa en el documento
function changeActiveSection() {
  $('section').each(function () {
    var documentWidth = $( document ).width();
    var seccion = $(this);
    var height = $("nav").outerHeight();

    var anchorId = seccion.attr('id').concat("-anchor");
    var anchor = document.getElementById(anchorId);

    if (pageYOffset + height >= seccion.position().top && pageYOffset + height < seccion.position().top + seccion.height() && pageYOffset != 0){
      $(anchor).addClass('active');
      // El breakpoint donde colapsa el nav bar de Bootstrap es 992px
      if (documentWidth >= 992) $(anchor).addClass('nav-link-selected');
    } else {
      $(anchor).removeClass('active');
      $(anchor).removeClass('nav-link-selected');
    }
  });
}


window.onscroll = function() {
  changeActiveSection();
  if (pageYOffset > 0) {
    $("nav").addClass('nav-small');
    $("#nav-logo").addClass('nav-logo-small');
    $(".nav-link").addClass('nav-link-small');
  } else {
    $("nav").removeClass('nav-small');
    $("#nav-logo").removeClass('nav-logo-small');
    $(".nav-link").removeClass('nav-link-small');
    $("#section1-anchor").addClass('active');
  }
};