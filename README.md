# learning-a-TypeScript

...
# must know types in TypeScript
1. variable --> string, boolean, number
2. array -- > string[], number [], boolean[], any[] & tuple
3. function --> parameter type, return ( void, type, any ) 
4. object  
5. union, null, unknown, never, as
6. type alias
7. interface
8. generics
9. assertion
10. enums
...

# interview-questions

null vs undefined
null is an assignment value. It can be assigned to a variable as a representation of no value.
undefined is a value that is automatically assigned to variables that have been declared but not initialized.


Type Inference
type inference is the ability of the compiler to automatically deduce the type of a variable when there is no explicit type annotation provided. TypeScript uses type inference to determine the type of a variable based on its initial value or usage context. This helps developers write cleaner code without having to explicitly specify types in every instance, while still benefiting from TypeScript's static type checking.

Type Explicit
type explicit is the practice of explicitly specifying the type of a variable, function parameter, or return value in TypeScript. This is done using type annotations, which provide clarity and help catch potential type-related errors during development. By explicitly defining types, developers can ensure that their code adheres to expected data structures and behaviors, making it easier to maintain and understand.

Explicit vs Implicit
Explicit typing involves explicitly specifying the type of a variable, function parameter, or return value using type annotations. Implicit typing, on the other hand, relies on TypeScript's type inference to automatically determine the type based on the assigned value or usage context. Explicit typing provides clarity and helps catch potential type-related errors, while implicit typing allows for more concise code but may require developers to rely on the compiler's inference capabilities. Both approaches have their advantages, and developers can choose the appropriate method based on their coding style and project requirements.

## Interfaces vs Type Aliases
interfaces and type aliases are both used to define custom types in TypeScript, but they have some differences in their usage and capabilities.Type aliases are used to create a new name for an existing type or a combination of types. They can represent primitive types, union types, intersection types, and more. Type aliases are defined using the `type` keyword.
Interfaces, on the other hand, are primarily used to define the shape of an object or a contract that a class or object must adhere to. They can define properties, methods, and index signatures. Interfaces are defined using the `interface` keyword. One key difference is that interfaces can be extended, allowing for inheritance and the creation of more complex types, while type aliases cannot be extended. Additionally, interfaces can be merged, meaning that multiple declarations of the same interface will be combined into a single interface, whereas type aliases cannot be merged. Overall, interfaces are more suitable for defining object structures and contracts, while type aliases are more versatile and can represent a wider range of types.