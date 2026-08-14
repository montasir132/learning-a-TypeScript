let userName: string = "Hello World!";
userName = "rah"
userName = 'dgf'
console.log(userName);
//variable
const studentsRoll: number = 246471;
console.log(studentsRoll);

// array
let arr:number[] = [10,20,30,40,50]

// object
let obj :{
    name :string,
    Roll : number,
    isStudent: boolean,
    class ?: number
}= {
    name : "rahiem",
    Roll : 74,
    isStudent: true,
    // class : 7
}
// tople
let tople: [string,number] = ["rsgim",41]

// function
function add(a:number,b:number):number{
    return a+b
}
console.log(add(7,74));

// Arrow function
let username = (a:string,b:string):string => {
    return a + b
}

// no return function
let schoolName = (a:string,b:string):void => {
    console.log(a + b); // no return
}