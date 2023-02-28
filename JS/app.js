'use strict'

function Employee (employeeID,fullName,department,level,imageURL) {
    this.employeeID = employeeID;
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
    document.write(`Full name: ${this.fullName} ___ Net Salary: ${this.salary} <br/>`)
}

let Ghazi = new Employee (1000,"Ghazi Samer","Administration","Senior","/assets/client2-free-img.jpg");
let Lana = new Employee (1001,"Lana Ali","Finance","Senior","/assets/client1-free-img.jpg");
let Tamara = new Employee (1002,"Tamara Ayoub","Marketing","Senior","/assets/client3-free-img.jpg");
let Safi = new Employee (1003,"Safi Walid","Administration","Mid-Senior","/assets/client4-free-img.jpg");
let Omar = new Employee (1004,"Omar Zaid","Development","Senior","/assets/client2-free-img.jpg");
let Rana = new Employee (1005,"Rana Saleh","Development","Junior","/assets/client1-free-img.jpg");
let Hadi = new Employee (1006,"Hadi Ahmad","Finance","Mid-Senior","/assets/client4-free-img.jpg");


Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();