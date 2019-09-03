// cria a tabela
function tableCriterio() {
	// cria o objeto responsável pelos dados da tabela
	dataTable = new google.visualization.DataTable();

	var n = document.getElementById("id").value;
	var x = parseInt(n);
	var a = 1000;

	dataTable.addColumn('string', 'Criterio');
	for (var i = 0; i < x; i++) {
		dataTable.addColumn('string', 'C' + (i + 1));
	}
	dataTable.addColumn('string', 'Media');
	dataTable.addColumn('string', 'Normalizada');

	for (var w = 1; w < x + 1; w++) {
		var index = dataTable.addRows(1);
		for (var k = 0; k < x; k++) {//nome criterio
			dataTable.setCell(index, k, "C" + w);
		//	teste++;
		}
		for (var r = x + 1; r < x + 2; r++) {
			dataTable.setCell(index, r, "<input type='text' id = " + a + '-' + w + '-' + r +" class='cor2 input' onfocus='media(" + a + "," + n +","+w+")'size='6'>");
		//	teste++;
		}
		for (var m = x + 2; m < x + 3; m++) {
			dataTable.setCell(index, m, "<input type='text' id = " + a + '-' + w + '-' + m +" class='cor2 input' onfocus='normalizacao(" + a + "," + n + ","+w+")' size='6'>");
		//	teste++;
		}
		for (var j = 1; j < x + 1; j++) {
			if (w == j) {
				dataTable.setCell(index, j, "<input type='text' class = 'cor2 input' id = " + a + '-' + w + '-' + j +" value = '1' disabled='disabled' size='6'>");
				//teste++;
			}
			else if (w > j) {
				dataTable.setCell(index, j, "<input type='text' class='input' id = " + a + '-' + w + '-' + j +"  onfocus = 'valores(" + a + "," + n +")' size='6'>");
				//teste++;
			}
			else if (w < j) {
				dataTable.setCell(index, j, "<input type='text'  id = " + a + '-' + w + '-' + j +"  class= 'cor input' disabled='disabled' size='6'>");
			//	teste++;
			}
			else {
				dataTable.setCell(index, j, "<input type='text'  id = " + a + '-' + w + '-' + j+" size='6'>");
				//teste++;
			}
		}
	}
	for (var w = 1; w < 2; w++) {
		var index = dataTable.addRows(1);
		for (var j = 1; j < x + 3; j++) {
			dataTable.setCell(index, j, "<input type='text' class= 'cor2 input' id =" + a + '-' + (w + x) + '-' + j + '-'+j+ " onfocus='total(" + a + "," + n + ","+j+")' size='6'>");
		}
	}
	// cria o objeto tabela
	chartTable = new google.visualization.Table(document.getElementById('table'));
	// exibe a tabela
	chartTable.draw(dataTable, { allowHtml: true });
}