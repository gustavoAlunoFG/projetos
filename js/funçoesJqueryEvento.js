$(document).ready(function () {
    $('#conteudo').show();
    $('#ocultar').click(function (event) {
      event.preventDefault();
      $('#conteudo').hide();
    });
  });