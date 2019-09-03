var tabela = 1002;
var tabela4 = 1004;

var totalAlternativasB = function (tab, id, x,val) {
    for (var w = 1; w < id + 1; w++) {
        //var x = 1;
        for (var i = id + 2; i < id + 3; i++) {
            var valor = $('#' + tab + '-' + w + '-' + i).val();
            console.log(valor);
        }
        $('#' + tabela4 + '-' + w + '-' + x+'-'+val).val(valor);
    }
}

var resultado = function (id, id2, h,val2) {
    var d = 1;
    var g = 3;
    var final = 0;
    var x = 0;
    for (var j = id; j < id + 1; j++) {
        for (var i = 1; i < id + 1; i++) {
            var valor1 = $('#' + tabela + '-' + (i) + '-' + d+'-'+ x).val();
            var Floatvalor1 = parseFloat(valor1);
            for (var k = 1; k < id2 - 1; k++) {
                for (var a = id2; a < id2 + 1; a++) {
                    var valor2 = $('#' + tabela4 + '-' + h + '-' + i+'-'+val2).val();
                    var Floatvalor2 = parseFloat(valor2);
                }
                var resultado = (Floatvalor1 * Floatvalor2);
                final = (final + resultado);
            }
            x++;
        }
    }
    $('#' + 1004 + '-' + h + '-' + (id+1)+'-'+val2).val(final/100);
}

var somaTotal = function (id,id2) {
    var somatorio = 0;
    for (var j = id; j <= id; j++) {
        for (var i = 1; i < id2 + 1; i++) {
            var valor3 = $('#' + tabela4 + '-' + i + '-' + (id+1) + '-'+i).val();
            var converte = parseFloat(valor3);
            // alert(valor3);
            somatorio = somatorio + converte;
        }
        $('#' + 1004 + '-' + i + '-' + (id+1)+'-'+1).val(somatorio.toFixed(1) + '%');
    }

}