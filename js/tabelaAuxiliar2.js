var tabela = 1002;
var tabela4 = 1004;

function tableAuxiliar2() {
    var idR = document.getElementById("id").value;
    var c = parseInt(idR);
    var a = document.getElementById("id2").value;
    var b = parseInt(a);
    var val = 0;
    var h = 1;
    var u = 1;

    // cria o objeto responsável pelos dados da tabela
    dataTable = new google.visualization.DataTable();

    dataTable.addColumn('string', ' ');
    for (var u = 0; u < c; u++) {
        dataTable.addColumn('string', ' ');
    }
    dataTable.addColumn('string', ' ');

    for (var d = 1; d < b + 1; d++) {
        var index = dataTable.addRows(1);
        for (var e = 0; e < b; e++) {
            dataTable.setCell(index, e, "A" + d);
        }
        for (var f = 1; f < c + 2; f++) {
            dataTable.setCell(index, f, "<input type='text' class='input' id = " + tabela4 + '-' + d + '-' + f + '-'+d+" onblur='totalAlternativasB(" + val + "," + b + "," + f + ","+d+")' size='6'>");
            val++;
        }
        val = 0;
        for (var k = c + 1; k < c + 2; k++) {
            dataTable.setCell(index, k, "<input type='text' class='input cor' id = " + tabela4 + '-' + d + '-' + k + '-'+d+" onblur='resultado(" + c + "," + b + "," + h +","+h+")' size='6'>");
            h++;
        }
    }
    for (var i = 1; i < 2; i++) {
        var index = dataTable.addRows(1);
        for (var h = c+1; h <= c +1; h++) {
            dataTable.setCell(index, h, "<input type='text' class='input cor' id = " + tabela4 + '-' + d + '-' + h +'-'+i+ " onblur='somaTotal(" + c +","+b+")' size='6'>");
        }
    }

    // cria o objeto tabela
    chartTable = new google.visualization.Table(document.getElementById('tableResultB'));
    // exibe a tabela
    chartTable.draw(dataTable, { allowHtml: true });
}