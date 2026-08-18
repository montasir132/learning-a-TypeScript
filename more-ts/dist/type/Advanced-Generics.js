"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useState = (InitialValue) => {
    let value = InitialValue;
    let setValue = (newValue) => value = newValue;
    return [value, setValue];
};
useState("");
useState(1);
useState({ email: " ", isLogging: false });
useState(null);
//# sourceMappingURL=Advanced-Generics.js.map