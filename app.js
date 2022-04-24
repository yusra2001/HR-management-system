'use strict';


let allEmp = [];
////// constructor function /////
function Emp(employeeID,firstName,lastName,department,level,imageURL) {
    this.employeeID = employeeID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.level = level;
    this.imageURL= imageURL;
     this.salary= this.getsal();
     this.gettaxx= this.gettax();
     this.getnetsala= this.getnetsal();

    allEmp.push(this);
}
//////////////
Emp.prototype.gettax=function()
{
    var tax 
    for (var i = 0; i < 7; i++) {
    tax =this.salary*0.075;
        }    return tax;
   }
// //   //////////
Emp.prototype.getnetsal=function()
{    var netsalary 
   for (var i = 0; i < 7; i++) {
     netsalary =this.salary-this.gettaxx;
    }return netsalary;

}
///////////////////////////////////////
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  Emp.prototype.getsal=function(){
let rndInt=0;
  
  if (this.level=="Senior"){
  rndInt = randomIntFromInterval(1500, 2000)}
  else if (this.level=="Mid-Senior"){
    rndInt = randomIntFromInterval(1000, 1500)
  }
  else if (this.level=="Junior"){
     rndInt = randomIntFromInterval(500, 1000)
  } console.log(rndInt)
return rndInt;
  }
///////////////////////
function randomval(){
 return Math.floor(1000 + Math.random() * 9000);
}


/////////////////////
  Emp.prototype.render=function(){
    ///////////////
    document.write(`<h2> employee full name ${this.firstName} ${this.lastName}<h2/>`)
   document.write(`<h2> salary ${this.salary}<h2/>`)}
   //////////////////////
// let header = document.createElement("h4");
// header.textContent = this.firstName;
// empsDiv.appendChild(header);

   // document.write(`<h2>${this.employeeID}<h2/>`)

   
   //document.write(`<h2>employee ID ${this.employeeID}<h2/>`)
    

  
  
  //////////////////////
  let emp1 = new Emp("1000","Ghazi", "Samer","Adminstration", "Senior","/emp1.jpg");
console.log(emp1);
emp1.render()
////////////
let emp2 = new Emp("1001","Lana", "Ali","Finance", "Senior","emps/emp2.jpg");
console.log(emp2);
emp2.render()
let emp3 = new Emp("1002","Tamara", "Ayoub","Marketing", "Senior","emps/emp3.jpg");
console.log(emp3);
emp3.render()
let emp4 = new Emp("1003","Safi", "Walid","Adminstration", "Mid-Senior","emps/emp4.jpg");
console.log(emp4);
emp4.render()
let emp5 = new Emp("1004","Omar", "Ziad","Development", "Senior","emps/emp5.jpg");
console.log(emp5);
emp5.render()
let emp6 = new Emp("1005","Rana", "Saleh","Development", "Junior","emps/emp6.jpg");
console.log(emp6);
emp6.render()
let emp7 = new Emp("1006","Hadi", "Ahmad","Finance", "Mid-Senior","emps/emp7.jpg");
console.log(emp7);
emp7.render()
////////////////////////////////////////////////////////////
// 
// var tag_id = document.getElementById('tagid');
// var newNode = document.createElement('p');
// newNode.appendChild(document.createTextNode('html string'));


////////////////////////////////////////////////////////////////


// var tag_id = document.getElementById('tagid');
// var newNode = document.createElement('p');
// newNode.appendChild(document.createTextNode('html string'));

  console.log(emp1);
   console.log(emp2);
   console.log(emp3);
   console.log(emp4);
   console.log(emp5);
   console.log(emp6);

//   /////////////////

//document.write(emp1);
///document.write(emp1);
// document.write(this.employeeID);
// document.write(this.firstName);
// document.write(this.salary);
//document.write(allEmp);

//document.write("Hello World!");
//ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
/////////////////////////
// let name = event.target.fullName.value;
// let department = event.target.department.value;
// //let level = event.target.level.value;
// //let image = event.target.image.value;
// let newEmployee = new Emp(id , name , department , level , image)

const controller = new AbortController();
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, { signal: controller.signal } );