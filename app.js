"use strict"
let initalId = 999; 
let allEmployees = [];

getLocalStorage();
render();

function Employee (fullName,department,level,imageURL) {  //object constructor
    this.employeeID = empId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = this.salaryCal();
};

Employee.prototype.salaryCal = function () {  //net salary
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

function render () {  //render function
    
    let employeeCardSectionA = document.getElementById ("Administration");
    let employeeCardSectionM = document.getElementById ("Marketing");
    let employeeCardSectionD = document.getElementById ("Development");
    let employeeCardSectionF = document.getElementById ("Finance");
    employeeCardSectionA.innerHTML="";
    employeeCardSectionM.innerHTML="";
    employeeCardSectionD.innerHTML="";
    employeeCardSectionF.innerHTML="";
    for (let i = 0; i < allEmployees.length; i++) {
        let cardDiv = document.createElement ("div");
        cardDiv.classList.add("cardDiv");
        if (allEmployees[i].department == "Administration") {
            employeeCardSectionA.append (cardDiv);
        }
        else if (allEmployees[i].department == "Marketing") {
            employeeCardSectionM.append (cardDiv);
    
        } else if (allEmployees[i].department == "Development") {
            employeeCardSectionD.append (cardDiv);
    
        } else if (allEmployees[i].department == "Finance") {
            employeeCardSectionF.append (cardDiv);
        }
        let cardImage = document.createElement("img");
        cardImage.setAttribute ("src",allEmployees[i].imageURL);
        cardDiv.append(cardImage);
        let cardParagraph = document.createElement("p");
        cardParagraph.innerHTML = `Name: ${allEmployees[i].fullName} - ID: ${allEmployees[i].employeeID} </br> Department: ${allEmployees[i].department} - Level: ${allEmployees[i].level} </br> Salary: ${allEmployees[i].salary}`
        cardDiv.append(cardParagraph);
    }
};

const empId = function () { //emploee id generator
    return initalId = initalId + 1;
}; 

let formElement = document.getElementById ("form");

formElement.addEventListener ("submit", submitHandler);


function submitHandler (event) { //event handler
    event.preventDefault();
    let fullName = event.target["full-name"].value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imageURL = event.target["image-url"].value;
    let employee= new Employee (fullName,department,level,imageURL);
    allEmployees.push(employee); 
    let allEmployeesJSON = JSON.stringify(allEmployees);
    localStorage.setItem("allEmployees",allEmployeesJSON);
    render ();
};

function getLocalStorage () {
    let allEmployeesLS = localStorage.getItem("allEmployees");
    if (allEmployeesLS != null) {
       allEmployees = JSON.parse(allEmployeesLS);
       initalId = allEmployees[allEmployees.length-1].employeeID;
    } else {
        allEmployees = [];
    }
};






