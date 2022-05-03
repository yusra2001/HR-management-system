//myRender = (key: ) => (rowIndex: number) => {
   // return <Cell>{this.data[rowIndex][key]}</Cell>;
 // };
 
 
 ///////////////////////////////
var arrayOfEmployee = [];
var devArr = [];
var finArr = [];
var markArr = [];
var adminArr = [];
var devTot = 0;
var finTot = 0;
var markTot = 0;
var adminTot = 0;
var totalEmpcounter = 0;
var salaryTotal = 0;
var savedData = localStorage.getItem("strArrayOfEmployee");
var parseStrArrayOfEmployee = JSON.parse(savedData);
var table = document.getElementById('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);

if (parseStrArrayOfEmployee != null) {
    for (let index = 0; index < parseStrArrayOfEmployee.length; index++) {
        if (parseStrArrayOfEmployee[index].strSelectDepartment == "Development") {
            devArr.push(parseStrArrayOfEmployee[index]);
            devTot = devTot + parseStrArrayOfEmployee[index].salary;
        }
        if (parseStrArrayOfEmployee[index].strSelectDepartment == "Finance") {
            finArr.push(parseStrArrayOfEmployee[index]);
            finTot = finTot + parseStrArrayOfEmployee[index].salary;
        }
        if (parseStrArrayOfEmployee[index].strSelectDepartment == "Marketing") {
            markArr.push(parseStrArrayOfEmployee[index]);
            markTot = markTot + parseStrArrayOfEmployee[index].salary;
        }
        if (parseStrArrayOfEmployee[index].strSelectDepartment == "Administration") {
            adminArr.push(parseStrArrayOfEmployee[index]);
            adminTot = adminTot + parseStrArrayOfEmployee[index].salary;
        }
        salaryTotal = salaryTotal + parseStrArrayOfEmployee[index].salary;
        totalEmpcounter = totalEmpcounter + 1
    }
    var totalAvg = salaryTotal / totalEmpcounter;
    if (devArr.length>0) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        var tdDepartment = document.createElement('td');
        tdDepartment.innerHTML = "Development";
        tr.appendChild(tdDepartment);
        var tdNumber = document.createElement('td');
        tdNumber.innerHTML = devArr.length;
        tr.appendChild(tdNumber);
        var tdTotal = document.createElement('td');
        tdTotal.innerHTML = devTot;
        tr.appendChild(tdTotal);
        var tdAvarage = document.createElement('td');
        tdAvarage.innerHTML = devTot / devArr.length;
        tr.appendChild(tdAvarage);
            
    }
    if (finArr.length>0) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        var tdDepartment = document.createElement('td');
        tdDepartment.innerHTML = "Finance";
        tr.appendChild(tdDepartment);
        var tdNumber = document.createElement('td');
        tdNumber.innerHTML = finArr.length;
        tr.appendChild(tdNumber);
        var tdTotal = document.createElement('td');
        tdTotal.innerHTML = finTot;
        tr.appendChild(tdTotal);
        var tdAvarage = document.createElement('td');
        tdAvarage.innerHTML = finTot / finArr.length;
        tr.appendChild(tdAvarage);
    }
    if (markArr.length>0) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        var tdDepartment = document.createElement('td');
        tdDepartment.innerHTML = "Marketing";
        tr.appendChild(tdDepartment);
        var tdNumber = document.createElement('td');
        tdNumber.innerHTML = markArr.length;
        tr.appendChild(tdNumber);
        var tdTotal = document.createElement('td');
        tdTotal.innerHTML = markTot;
        tr.appendChild(tdTotal);
        var tdAvarage = document.createElement('td');
        tdAvarage.innerHTML = markTot / markArr.length;
        tr.appendChild(tdAvarage);
    }
    if (adminArr.length>0) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        var tdDepartment = document.createElement('td');
        tdDepartment.innerHTML = "Administration";
        tr.appendChild(tdDepartment);
        var tdNumber = document.createElement('td');
        tdNumber.innerHTML = adminArr.length;
        tr.appendChild(tdNumber);
        var tdTotal = document.createElement('td');
        tdTotal.innerHTML = adminTot;
        tr.appendChild(tdTotal);
        var tdAvarage = document.createElement('td');
        tdAvarage.innerHTML = adminTot / adminArr.length;
        tr.appendChild(tdAvarage);
    }


    ////////////////////////////////////////////////////
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var tdDepartment = document.createElement('td');
    tdDepartment.innerHTML = "Total Of Totals";
    tr.appendChild(tdDepartment);
    var tdNumber = document.createElement('td');
    tdNumber.innerHTML = totalEmpcounter;
    tr.appendChild(tdNumber);
    var tdTotal = document.createElement('td');
    tdTotal.innerHTML = salaryTotal;
    tr.appendChild(tdTotal);
    var tdAvarage = document.createElement('td');
    tdAvarage.innerHTML = totalAvg ;
    tr.appendChild(tdAvarage);
}
////////