var tabela = 1002;
var tabela4 = 1004;

function tableAuxiliar1() {
    var z = document.getElementById("id").value;
    var q = parseInt(z);

    // cria o objeto responsável pelos dados da tabela
    dataTable = new google.visualization.DataTable();

    for (var i = 0; i < q; i++) {
        dataTable.addColumn('string', 'C' + (i + 1));
    }
    for (var d = 1; d <= 1; d++) {
        var index = dataTable.addRows(1);
        for (var r = 0; r < q; r++) {
            dataTable.setCell(index, r, "<input type='text' id = " + tabela + '-' + (r + 1) + '-' + d + '-'+r+" size='6' onblur='totalResultado("+r+")'>");
        }
    }
    // cria o objeto tabela
    chartTable = new google.visualization.Table(document.getElementById('tableResult'));
    // exibe a tabela
    chartTable.draw(dataTable, { allowHtml: true });

}