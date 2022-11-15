// Your code here
function createEmployeeRecord(employeeArray){
// let employeeCard = {firstName:"", familyName:"", title:"", payPerHour:[] , timeInEvents:[], timeOutEvents:[],}
return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: []   
    }
};

function createEmployeeRecords(arrayOfEmployeeArrays){
    return arrayOfEmployeeArrays.map(function (employeeArray){
        return createEmployeeRecord(employeeArray)
    })
};

function createTimeInEvent(employeeArray, dateStamp){
    dateStamp = new Date ("YYYY-MM-DD HHMM")
    return createEmployeeRecord(employeeArray,dateStamp)
}

function createTimeOutEvent(){}

function hoursWorkedOnDate(){}

function wagesEarnedOnDate(){}

function allWagesFor(){}

function calculatePayroll(){}

