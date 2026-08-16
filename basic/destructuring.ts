let user: {
    name:string,
    age: number,
    isStudent: boolean,
    isInstructor: boolean,
} = {
    name: "John Doe",
    age: 30,
    isStudent: true,
    isInstructor: false,
}

let { name:UserName,isStudent:itsIt, ...rest} = user; // name:UserName destructuring 

let array: number[] = [1, 2, 3, 4, 5];

let [,, second, ...others] = array; // destructuring array