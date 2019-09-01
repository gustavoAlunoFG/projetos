function tableAlternativa() {
    var a = document.getElementById("id2").value;
    var b = parseInt(a);
    var x = document.getElementById("id").value;
    var z = parseInt(x);

    var controle = 0;

    //criar div dinamica
    for (let i = 0; i < z; i++) {
        const div = document.createElement('div'),
        corpo = document.getElementById('corpo');
        //cria um elemento "div"...
        div.setAttribute('id', 'tableteste' + i);
        div.setAttribute('class', 'organizar');
        corpo.appendChild(div);
        //anexa a "div" criada com o novo conteúdo 

        if (controle <= z) {
            for (let i = 0; i < 1; i++) {
                const div = document.createElement('div'),
                    corpo = document.getElementById('corpo');
                //cria um elemento "div"...
                div.setAttribute('id', 'tableCA'+controle);
                div.setAttribute('class', 'organizar');
                corpo.appendChild(div);
                //anexa a "div" criada com o novo conteúdo 
            }
        }
        controle++;
    }


    for (var k = 0; k < z; k++) {
        // cria o objeto responsável pelos dados da tabela
        dataTable = new google.visualization.DataTable();

        dataTable.addColumn('string', 'C' + (k + 1));
        for (var c = 0; c < b; c++) {
            dataTable.addColumn('string', 'A' + (c + 1));
        }
        dataTable.addColumn('string', 'Media');
        dataTable.addColumn('string', 'Normalizada');

        for (var d = 1; d < b + 1; d++) {
            var index = dataTable.addRows(1);
            for (var e = 0; e < b; e++) {
                dataTable.setCell(index, e, "A" + d);
            }
            for (var r = b + 1; r < b + 2; r++) {
                dataTable.setCell(index, r, "<input type='text' id = " + k + '-' + d + '-' + r + "  class='cor2 input' onblur='media(" + k + "," + a +","+d+")'size='6'>");
            }
            for (var m = b + 2; m < b + 3; m++) {
                dataTable.setCell(index, m, "<input type='text' id = " + k + '-' + d + '-' + m + "  class='cor2 input' onblur='normalizacao(" + k + "," + a + ","+d+")' size='6'>");
            }
            for (var f = 1; f < b + 1; f++) {
                if (d == f) {
                    dataTable.setCell(index, f, "<input type='text' class='input' id = " + k + '-' + d + '-' + f + " value = '1' size='6'>");
                }
                else if (d > f) {
                    dataTable.setCell(index, f, "<input type='text' class='input' onblur='valores(" + k + "," + b + ")' id = " + k + '-' + d + '-' + f + " size='6'>");
                }
                else if (d < f) {
                    dataTable.setCell(index, f, "<input type='text' class= 'cor input' id = " + k + '-' + d + '-' + f + " size='6'>");
                }
                else {
                    dataTable.setCell(index, f, "<input type='text' class='input' id = " + k + '-' + d + '-' + f + " size='6'>");
                }
            }
        }
        for (var g = 1; g < 2; g++) {
            var index = dataTable.addRows(1);
            for (var h = 1; h < b + 3; h++) {
                dataTable.setCell(index, h, "<input type='text' class='input' onblur='total(" + k + "," + a + ","+h+")' id = " + k + '-' + d + '-' + h +'-'+ h+"  size='6'>");
            }
        }

        // cria o objeto tabela
        chartTable = new google.visualization.Table(document.getElementById('tableteste' + k));
        // exibe a tabela
        chartTable.draw(dataTable, { allowHtml: true });
    }
}