
'use strict';
let employyeeArr = [];
let idArr = [];
let employeeForm = document.getElementById('Employee');



employeeForm.addEventListener('submit', handelSubit);


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

function handelSubit(event) {
    event.preventDefault();

    console.log(event);
    let Full_Name = event.target.name.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let Image_URL = event.target.image.value;

    let newEmployee = new Person(0, Full_Name, Department, Level, Image_URL, 0);

    newEmployee.salaryCalc();
    newEmployee.idFounder();
    newEmployee.render();
    saved(employyeeArr);

}

function saved(data) {
    let stringObj = JSON.stringify(data);
    localStorage.setItem("thePersone", stringObj);
}

function getData() {
    let strings = localStorage.getItem('thePersone');
    let arrData = JSON.parse(strings);

    for (let i = employyeeArr.length; i < arrData.length; i++) {
        var element = new Person(0, arrData[i].Full_Name, arrData[i].Department, arrData[i].Level, arrData[i].Image_URL, 0);
        element.salaryCalc();
        element.idFounder();
        element.render();
    }



}



Person.prototype.render = function() {

    if (this.Department == 'Administration') {
        document.getElementById('person').innerHTML += (`
        <div class="employeeNS">
                    <div class="employeePic">
                        <img src="${this.Image_URL}" alt="">
                    </div>
                    <div class="employeeInfo">
                        <p class="empTitle">Name: ${this.Full_Name}</p>
                        <p class="empId">ID: ${this.Employee_ID}</p>
                        <p class="empDepartment">Department: ${this.Department}</p>
                        <p class="empLevel">Level: ${this.Level}</p>
                        <p class="empSalary">Salary: ${this.Salary}</p>
                    </div>
                </div>`);
    } else if (this.Department == 'Development') {
        document.getElementById('person2').innerHTML += (`
        <div class="employeeNS">
                    <div class="employeePic">
                        <img src="${this.Image_URL}" alt="">
                    </div>
                    <div class="employeeInfo">
                        <p class="empTitle">Name: ${this.Full_Name}</p>
                        <p class="empId">ID: ${this.Employee_ID}</p>
                        <p class="empDepartment">Department: ${this.Department}</p>
                        <p class="empLevel">Level: ${this.Level}</p>
                        <p class="empSalary">Salary: ${this.Salary}</p>
                    </div>
                </div>`);
    } else if (this.Department == 'Marketing') {
        document.getElementById('person3').innerHTML += (`
        <div class="employeeNS">
                    <div class="employeePic">
                        <img src="${this.Image_URL}" alt="">
                    </div>
                    <div class="employeeInfo">
                        <p class="empTitle">Name: ${this.Full_Name}</p>
                        <p class="empId">ID: ${this.Employee_ID}</p>
                        <p class="empDepartment">Department: ${this.Department}</p>
                        <p class="empLevel">Level: ${this.Level}</p>
                        <p class="empSalary">Salary: ${this.Salary}</p>
                    </div>
                </div>`);
    } else if (this.Department == 'Finance') {
        document.getElementById('person4').innerHTML += (`
        <div class="employeeNS">
                    <div class="employeePic">
                        <img src="${this.Image_URL}" alt="">
                    </div>
                    <div class="employeeInfo">
                        <p class="empTitle">Name: ${this.Full_Name}</p>
                        <p class="empId">ID: ${this.Employee_ID}</p>
                        <p class="empDepartment">Department: ${this.Department}</p>
                        <p class="empLevel">Level: ${this.Level}</p>
                        <p class="empSalary">Salary: ${this.Salary}</p>
                    </div>
                </div>`);
    }


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
    employyeeArr[i].render();
}
getData();

