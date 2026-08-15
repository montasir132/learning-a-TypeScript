// TypeScript Special Types
// Primitive types: string, number, boolean, bigint, symbol
// Non-primitive types: object, array, function
// Special types: Union, any, unknown, never, void, null, undefined


// Union
let unionType: string | number = "Hello"; // can be string or number

// any
let stringOrNumber: any = "Hello, World!";
stringOrNumber = 42; // Now it's a number

// unknown
let value: unknown = "Hello, TypeScript!";
if (typeof value === "string") {
    console.log(value.toUpperCase()); // Safe to use string methods
}

// never
function throwError(message: string): never {
    throw new Error(message);
}

// void
function logMessage(message: string): void {
    console.log(message);
}

// null  
let nullableValue: string | null = null;

// undefined
let undefinedValue: string | undefined = undefined;