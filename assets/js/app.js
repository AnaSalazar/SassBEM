var funcionInicial = function () {
  $("span").click(eliminarImagen);
  $("#restaurar").click(restaurarImagenes);
}

var eliminarImagen = function () {
  var imagenPanda = this.parentElement;
  imagenPanda.style.display = "none";
}

var restaurarImagenes = function () {
  var imagenes = $("span");
  for (var i = 0; i < imagenes.length; i++) {    imagenes[i].parentElement.style.display = "inline-block";
  }
  // var imagenes = $("span");
  // imagenes.each(function (imagen) {
  //   imagen.parentElement.style.display = "block";
  // });
}


$(document).ready(funcionInicial);
