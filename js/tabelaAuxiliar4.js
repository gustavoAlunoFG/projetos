function tableAuxiliar4() {
    var n = document.getElementById("id2").value;
    var a = parseInt(n);
    var id = document.getElementById("id").value;
    var idInt = parseInt(id);
    var c = 1000;
    var numero = 0.58;
 
    for (let s = 0; s < idInt; s++) {
	// cria o objeto responsável pelos dados da tabela
	dataTable = new google.visualization.DataTable();

	for (var i = 0; i < 1; i++) {
		dataTable.addColumn('string', 'L-MAX');
		for (var i = 1; i < 2; i++) {
			dataTable.addColumn('string', 'IC');
		}
		for (var i = 2; i < 3; i++) {
			dataTable.addColumn('string', 'RC');
		}
	}
	for (var d = 1; d <= 1; d++) {
		var index = dataTable.addRows(1);
			for (var r = 0; r < 1; r++) {
				dataTable.setCell(index, r, "<input type='text' id = " + 10+s + '-' + (r + 1) + '-' + d + " onblur='lmax(" + s + "," + a + ","+10+s+")' size='6'>");
			}
			for (var r = 1; r < 2; r++) {
				dataTable.setCell(index, r, "<input type='text' id = " + 10+s + '-' + (r + 1) + '-' + d + " onblur='ic(" + a + ","+10+s+")' size='6'>");
			}
			for (var r = 2; r < 3; r++) {
				dataTable.setCell(index, r, "<input type='text' id = " + 10+s + '-' + (r + 1) + '-' + d + " onblur='rc("+10+s+","+numero+")' size='6'>");
			}
		}
	// cria o objeto tabela
	chartTable = new google.visualization.Table(document.getElementById('tableCA'+ s));
	// exibe a tabela
	chartTable.draw(dataTable, { allowHtml: true });
    }
}