"use strict";
var Rolls;
(function (Rolls) {
    Rolls["manager"] = "manager";
    Rolls["admin"] = "admin";
    Rolls["user"] = "user";
})(Rolls || (Rolls = {}));
const user = {
    userName: "John",
    roll: Rolls.user
};
console.log(user);
