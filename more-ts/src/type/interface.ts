interface Employee {
    name : string,
    salary : number,
    position : string,
    isPermanent ?: boolean,
    department ?: string | null,
    age ?: number | null
}

const employeeInfo : Employee = {
    name : "John Doe",
    salary : 50000,
    position : "Software Engineer",
    isPermanent : true,
    department : "IT",
    age : 30
}

const employeeInfo2 : Employee = {
    name : "Jane Smith",
    salary : 60000, 
    position : "Project Manager",
    isPermanent : false,
}

const employeeInfoArr : Employee[] = [employeeInfo, employeeInfo2,{name : "Rakib", salary : 70000, position : "Team Lead", isPermanent : true, department : "Development", age : 35}]

let employeeInfoFunction = (emp : Employee) : void => {
    console.log(`Employee Name: ${emp.name}`);
    console.log(`Employee Salary: ${emp.salary}`);
    console.log(`Employee Position: ${emp.position}`);
}
console.log(employeeInfoFunction({ name : "Rakib", salary : 740 , position : "Team Lead"}));

const displayEmployeeInfo = ({name, salary, position, department}:Employee) : void => {
    console.log(`Employee Name: ${name}`);
    console.log(`Employee Salary: ${salary}`);
    console.log(`Employee Position: ${position}`);
    console.log(`Employee Department: ${department}`);
}
console.log(displayEmployeeInfo({ name : "Rakib",salary:254, position : "Team Lead", department : "Development"}));

console.log(displayEmployeeInfo(employeeInfo));