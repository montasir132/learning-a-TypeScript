let val : unknown

let userValue = val as number
userValue = 74

interface user {
    name : string,
    roll : number
}
let userValue1 = val as user

let userValue2 = {
    name : "rahiem",
    roll : 74
} as const