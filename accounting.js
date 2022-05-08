let employyeeArr = [];
let idArr = [];

function Person(Employee_ID, Full_Name, Department, Level, Image_URL, Salary) {
    this.Employee_ID = Employee_ID;
    this.Full_Name = Full_Name;
    this.Department = Department;
    this.Level = Level;
    this.Image_URL = Image_URL;
    this.Salary = Salary;
    employyeeArr.push(this);

}


Person.prototype.idFounder = function() {
    let id = 0;
    if (idArr.length == 0) {
        id = 1001;
    } else {
        id = idArr[idArr.length - 1];
        id += 1;
    }
    idArr.push(id);
    this.Employee_ID = id;
}

Person.prototype.salaryCalc = function() {
    let netSalary = 0;
    let tax = 0;
    if (this.Level == "Senior") {
        netSalary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    } else if (this.Level == "Mid-Senior") {
        netSalary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
    } else if (this.Level == "Junior") {
        netSalary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    }

    tax = netSalary * 0.075;
    netSalary -= tax;
    this.Salary = netSalary;
}


let Ghazi = new Person(0, 'Ghazi Samer', 'Administration', 'Senior', './EmpPic/Ghazi.jpg', 0);
let Lana = new Person(0, 'Lana Ali', 'Finance', 'Senior', './EmpPic/Lana.jpg', 0);
let Tamara = new Person(0, 'Tamara Ayoub', 'Marketing', 'Senior', './EmpPic/Tamara.jpg', 0);
let Safi = new Person(0, 'Safi Walid', 'Administration', 'Mid-Senior', './EmpPic/Safi.jpg', 0);
let Omar = new Person(0, 'Omar Zaid', 'Development', 'Senior', './EmpPic/Omar.jpg', 0);
let Rana = new Person(0, 'Rana Saleh', 'Development', 'Junior', './EmpPic/Rana.jpg', 0);
let Hadi = new Person(0, 'Hadi Ahmad', 'Finance', 'Mid-Senior', './EmpPic/Hadi.jpg', 0);

for (let i = 0; i < employyeeArr.length; i++) {
    employyeeArr[i].salaryCalc();
    employyeeArr[i].idFounder();
}


///
function renderTable(dataToFill) {
    let allemp = 0;
    let allsalary = 0;
    for (let x = 0; x < dataToFill.length; x++) {

        allemp += dataToFill[x][1];
        allsalary += dataToFill[x][3];

        document.getElementById('tableA').innerHTML += (`
            <tr>
                    <td>${dataToFill[x][0]}</td>
                    <td>${dataToFill[x][1]}</td>
                    <td>${(dataToFill[x][2] / dataToFill[x][1]).toFixed(3)}</td>
                    <td>${(dataToFill[x][3]).toFixed(3)}</td>
                </tr>
            `);
    }
    document.getElementById('tableA').innerHTML += (`
            <tr class ="tableFooter">
                    <td>Total Footer</td>
                    <td>${allemp}</td>
                    <td>${(allsalary / allemp).toFixed(3)}</td>
                    <td>${(allsalary).toFixed(3)}</td>
                </tr>
            `);
}


function tableData(localStoragee) {
    let Tdepartment = [];
    let Tdata = [];
    for (let i = 0; i < localStoragee.length; i++) {

        if (!Tdepartment.includes(localStoragee[i].Department)) {
            Tdepartment.push(localStoragee[i].Department);
            Tdata.push([localStoragee[i].Department, 1, localStoragee[i].Salary, localStoragee[i].Salary])
        } else {
            let index = Tdepartment.indexOf(localStoragee[i].Department);
            Tdata[index][1] += 1;
            Tdata[index][2] += localStoragee[i].Salary;
            Tdata[index][3] += localStoragee[i].Salary;
        }

    }

    renderTable(Tdata);
}


function getSomeData() {
    let strings = localStorage.getItem('thePersone');
    let arrData = JSON.parse(strings);
    if (arrData != null) {
        tableData(arrData);
    } else { // if there is no data inside the local storage we will use the static employee
        tableData(employyeeArr);
        console.log(employyeeArr)
    }

}
getSomeData()
