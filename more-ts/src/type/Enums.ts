enum Rolls {
    manager = "manager", // value set na korla 0 index theke suru hobe
    admin = "admin",
    user = "user"
}
const user = {
    userName : "John",
    roll : Rolls.user
}
console.log(user)