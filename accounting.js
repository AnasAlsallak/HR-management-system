"use strict";
let allEmployees = [];
let countA=0,countM=0,countD=0,countF=0, countTot=0;
let avgSalA=0,avgSalM=0,avgSalD=0,avgSalF=0,avgSalTot=0;
let totSalA=0,totSalM=0,totSalD=0,totSalF=0,totSal=0;


function depStatstics () {
    for(let i=0; i < allEmployees.length; i++) {
        if (allEmployees[i].department == "Administration") {
            countA++;
            totSalA += allEmployees[i].salary;
        }
        else if (allEmployees[i].department == "Marketing") {
            countM++;
            totSalM += allEmployees[i].salary;
        } else if (allEmployees[i].department == "Development") {
             countD++;    
             totSalD += allEmployees[i].salary;
        } else if (allEmployees[i].department == "Finance") {
             countF++;
             totSalF += allEmployees[i].salary;
        }
    };
    avgSalA = totSalA/countA || 0;
    avgSalM = totSalM/countM || 0;
    avgSalD = totSalD/countD || 0;
    avgSalF = totSalF/countF || 0;
    countTot = countA + countM + countD + countF;
    totSal = totSalA + totSalM + totSalD + totSalF;
    avgSalTot = totSal/countTot || 0;
};


function getLocalStorage () {
    let allEmployeesLS = localStorage.getItem("allEmployees");
    if (allEmployeesLS != null) {
       allEmployees = JSON.parse(allEmployeesLS);
    } else {
        allEmployees = [];
    }
};

getLocalStorage ();

depStatstics();
function render (parentElem,department, depCount, avgSalary,totSalary) {
    let tableRow = document.createElement ("tr");
    parentElem.append(tableRow);
    let tableData0 = document.createElement ("td");
    tableData0.textContent = department;
    let tableData1 = document.createElement ("td");
    tableData1.textContent = depCount;
    let tableData2 = document.createElement ("td");
    tableData2.textContent = avgSalary;
    let tableData3 = document.createElement ("td");
    tableData3.textContent = totSalary;
    tableRow.append(tableData0);
    tableRow.append(tableData1);
    tableRow.append(tableData2);
    tableRow.append(tableData3);

};

let tableBody = document.getElementById ("tableBody");
render(tableBody,"Adminstration",countA,avgSalA,totSalA);
render(tableBody,"Marketing",countM,avgSalM,totSalM);
render(tableBody,"Development",countD,avgSalD,totSalD);
render(tableBody,"Finance",countF,avgSalF,totSalF);

let tableFooter = document.getElementById ("tableFooter");
render(tableFooter,"Total",countTot,avgSalTot,totSal);

