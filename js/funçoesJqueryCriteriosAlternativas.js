var valores = function (tabela, id) {
    var r;
    for (var w = 1; w < id + 1; w++) {
      for (var j = 1; j < id + 2; j++) {
        if (w > j) {
          var separador = tabela + '-' + w + '-' + j;
          var valor = $('#' + separador).val();
          var numero = parseFloat(valor) || 0;
          if (numero == 0) $('#' + separador).val(" ");
          else {
            var splitted = separador.split('-');
            var str = +splitted[0] + '-' + splitted[2] + '-' + splitted[1];
            r = (1 / valor);
            $('#' + str).val(r);
          }
        }
      }
    }
  }
  
  var media = function (tabela, id,val) {
    var numeroFinal = 1;
    for (var w = 1; w < id + 1; w++) {
      numeroFinal = 1;
      for (var j = 1; j < id + 1; j++) {
        var multiplica = $('#' + tabela + '-' + val + '-' + j).val();
        var numeroMul = parseFloat(multiplica) || 0;
        if (numeroMul == 0) $('#' + tabela + '-' + val + '-' + j).val(" ");
        else {
          numeroFinal = numeroFinal * (multiplica);
          var teste = Math.pow(numeroFinal, 1 / id);
        }
      }
      $('#' + tabela + '-' + val + '-' + j).val(teste.toFixed(5));
    }
  }
  
  var total = function (tabela, id,teste) {
    var soma = 0;
    for (var w = 1; w < id + 2; w++) {
      for (var j = 1; j <= id; j++) {
        var t = $('#' + tabela + '-' + j + '-' + teste).val();
        var numeroTotal = parseFloat(t) || 0;
        if (numeroTotal == 0) $('#' + tabela + '-' + j + '-' + teste).val(" ");
        else {
          soma = (soma + numeroTotal);
        }
      }
      $('#' + tabela + '-' + j + '-' + w + '-'+teste).val(soma.toFixed(4));
      soma = 0;
    }

    for (var w = id + 2; w < id + 3; w++) {
      for (var j = 1; j < id + 1; j++) {
        var t = $('#' + tabela + '-' + j + '-' + teste).val();
        var numeroTotal = parseFloat(t) || 0;
        if (numeroTotal == 0) $('#' + tabela + '-' + j + '-' + teste).val(" ");
        else {
          soma = (soma + numeroTotal);
        }
      }
      $('#' + tabela + '-' + j + '-' + w + '-'+teste).val(soma.toFixed(1) + '%');
      soma = 0;
    }

  }
  
  var normalizacao = function (tabela, id,val) {
    var resultado = 0;
    for (var w = 1; w < id + 1; w++) {
      for (var j = id + 1; j < id + 2; j++) {
        var normalizar = $('#' + tabela + '-' + val + '-' + j).val();
        var normalizarFloat = parseFloat(normalizar) || 0 + '%';
        if (normalizarFloat == 0) {
          $('#' + tabela + '-' + val + '-' + j).val(" ");
        }
        for (var g = id + 1; g < id + 3; g++) {
          var media = $('#' + tabela + '-' + g + '-' + j + '-'+(id+1)).val();
          var normalizarMedia = parseFloat(media) || 0;
          if (normalizarMedia == 0) $('#' + tabela + '-' + g + '-' + j).val(" ");
          else resultado = ((normalizarFloat / normalizarMedia) * 100);
        }
      }
      $('#' + tabela + '-' + val + '-' + j).val(resultado.toFixed(2) + '%');
    }
  }
  
  var lmax = function (tabela, id,valor) {
    var z = 1;
    var x = 2;
    var resultadoTotal = 0;
    for (var w = 1; w < id + 1; w++) {
      for (var i = id + 2; i < id + 3; i++) {
        var normalizada = $('#' + tabela + '-' + w + '-' + i).val();
        var floaN = parseFloat(normalizada);
        for (var k = id + 1; k < id + 2; k++) {
          for (var j = z; j < x; j++) {
            var total = $('#' + tabela + '-' + k + '-' + j+'-'+w).val();
            var floatT = parseFloat(total);
          }
        }
        z++;
        x++;
        var resultado = (floaN * floatT);
      }
      resultadoTotal = resultadoTotal + resultado;
      //alert(resultadoTotal);
    }
    var d =(resultadoTotal / 100).toFixed(6);
    $('#' + valor + '-' + 1 + '-' + 1).val(d);
  }
  
  var ic = function (id,tabela) {
    var valor = $('#' + tabela + '-' + 1 + '-' + 1).val();
    var resultado = (valor - id) / (id - 1);
    $('#' + tabela + '-' + 2 + '-' + 1).val(resultado.toFixed(6));
  }
  
  var rc = function (tabela,numero) {
    var valor = $('#' + tabela + '-' + 2 + '-' + 1).val();
    var resultado = (valor / numero);
    $('#' + tabela + '-' + 3 + '-' + 1).val(resultado.toFixed(6));
  }
  