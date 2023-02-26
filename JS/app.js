'use strict'
let initalId = 999;

function Employee (fullName,department,level,imageURL) {
    this.employeeID = empId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = this.salaryCal();
};

Employee.prototype.salaryCal = function () {
let basicSalary;
if (this.level == "Senior") {
    basicSalary =  Math.random() * 500 + 1500;
}
else if (this.level == "Mid-Senior") {
    basicSalary =  Math.random() * 500 + 1000;
}
else if (this.level == "Junior") {
    basicSalary = Math.random() * 500 + 500;
}
return basicSalary - basicSalary * 0.075;
};

Employee.prototype.render = function () {
    let employeeCardSection = document.getElementById ("employeeCard");
    let cardDiv = document.createElement ("div");
    cardDiv.classList.add("cardDiv");
    employeeCardSection.append (cardDiv);
    let cardImage = document.createElement("img");
    cardImage.setAttribute ("src",this.imageURL);
    cardDiv.append(cardImage);
    let cardParagraph = document.createElement("p");
    cardParagraph.innerHTML = `Name: ${this.fullName} - ID: ${this.employeeID} </br> Department: ${this.department} - Level: ${this.level} </br> Salary: ${this.salary}`
    cardDiv.append(cardParagraph);
};

const empId = function () {
return initalId++;
};

let formElement = document.getElementById ("form");

formElement.addEventListener ("submit", submitHandler);

// console.log(formElement)

function submitHandler (event) {
event.preventDefault();
let fullName = event.target["full-name"].value;
let department = event.target.department.value;
let level = event.target.level.value;
let imageURL = event.target["image-url"].value;
let employee= new Employee (fullName,department,level,imageURL);
// console.log (employee);
employee.render ();
};




