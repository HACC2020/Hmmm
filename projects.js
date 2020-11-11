/*
    function Upload() {
        var fileUpload = document.getElementById("fileUpload");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var table = document.createElement("table");
                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        if (cells.length > 1) {
                            var row = table.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }
                    var dvCSV = document.getElementById("dvCSV");
                    dvCSV.innerHTML = "";
                    dvCSV.appendChild(table);
                }
                reader.readAsText(fileUpload.files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }
    }
*/

function hide () {
    document.getElementById('info').style.display = 'none';
}

function Id () {
    document.getElementByClassName("id").style.display = "visible";
}

function Aname () {
    document.getElementByClassName("an").style.display = "visible";
}

function Pn () {
    document.getElementByClassName("pn").style.display = "visible";
}

function A () {
    document.getElementByClassName("a").style.display = "visible";
}

function BV () {
    document.getElementByClassName("bv").style.display = "visible";
}

function PR () {
    document.getElementByClassName("pr").style.display = "visible";
}

function PlS () {
    document.getElementByClassName("pls").style.display = "visible";
}

function AS () {
    document.getElementByClassName("as").style.display = "visible";
}

function PrjS () {
    document.getElementByClassName("prjs").style.display = "visible";
}

function CD () {
    document.getElementByClassName("cd").style.display = "visible";
}

function PrjC () {
    document.getElementByClassName("prjc").style.display = "visible";
}

/*Attempted to convert csv file using modified code from https://www.aspsnippets.com/Articles/Import-CSV-File-to-HTML-Table-using-JavaScript.aspx*/
/*Ended up not using it, attempts to do modifications to use files from the website automatically didn't work*/