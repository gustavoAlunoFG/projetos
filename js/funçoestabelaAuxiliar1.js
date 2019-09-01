var tabela = 1002;
var tabela4 = 1004;

var totalResultado = function (valor) {
    var n = document.getElementById("id").value;
    var m = parseInt(n);
    var p = 0;
    var j = 1;
    for (var w = 1; w < m + 1; w++) {
        for (var i = m + 2; i < m + 3; i++) {
            var normalizada = $('#' + 1000 + '-' + w + '-' + i).val();
        }
        $('#' + tabela + '-' + (p + 1) + '-' + j+'-'+valor).val(normalizada);
        p++;
    }
}