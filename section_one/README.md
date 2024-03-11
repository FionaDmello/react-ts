# React & TypeScript

This repository contains code for the course by the same name by Maximilian Schwarzmueller on Udemy.

### Type Inference & Type Annotation

- explicitly declaring the type of a variable is called **type annotation**, as opposed of TS infering the type of the variable based on the value assigned to it which is called **type inference**
- if a variable is declared but not initialized, its type is _any_ (the default)
- such a variable can be initialized with any specific type
- else, TS infers the type of the variable based on the initialized value later complaining if you reassign a value of another type

### Union Types

- use x | y to indicate that the type of the variable be x or y
- this allows only for functional properties present on both x and y to be applicable on the variable
- property a of x that is not available on y cannot be applied to the variable of type x | y

### Object & Array Types

- declaring a variable as having type _object_ will allow for the variable to contain anything of type object
- it is better to define the shape of the object or array variable explicitly
- `Array<T>` is the same as `<T>[]` where `<T>` can be any primitive type or any complex, custom type you define

### Types in Functions

- if a variable is a const, you can let TS infer the type of the variable, there is no need for type annotation
- such a type inference will make sure that the value assigned to this variable is not just of a particular type, but precisely the set value, at all times
- a function without a return value will have the type `void` (technically `undefined` can also be used, but `void` is the preferred)
- in JS function are but regular values, hence when you pass a function to be called as a parameter to another function, set its type to be the return type of the passed function
- Function types can be provided as a function signature which can then be factored out by being given a type alias

### Interface and Type Alias

- Type aliases are more useful in providing a signature of a function, for example
- While defining the skeleton on an object, its better to use an Interface - this is specifically for creating objects
- `type` keyword is a more general keyword, it can be applied to multiple types of variables
- `interface` keyword is more limited, while it can be applied to objects and even function types, it cannot for example be used to store union types
- there are, however, special cases where `interface` keyword can be quite useful, like while implementing classes
- `interface` keywords allows for easier extensions of itself
  - a given interface can be modified (can have more properties added it to), if and when necessary, because interfaces can be redeclared

### Merging Types

- Union types represent A | B (or => one of the two options)
- Merged type is A & B (and => all props in both options)

### Literal Types

- Setting a specific value, makes it a literal type

### Type Guards

- When there is conditional handling based on an option from a Union type, we use if-else blocks to handle for different option states
- When `if-else` blocks are used in conjunction with `typeof` keywords in the conditions, we create Type Guards
- Type Guarding allows for TypeScript to do Type Narrowing (go from a broader type to a specific subset)
- Type Guarding and Narrowing allows us to work with properties specific to that particular type alone
- This is important because in a Union, only those properties common to all the types specified in the Union, are made available without this pattern
- Type Narrowing and guarding can only be done on JS native types, instances and properties!
  - Since, TS is compiled to JS at run time, the custom type (say, a type alias) disappears
  - So, no type checking can be done for a type that no longer exists during run time!
  - In order to make sure the code runs at runtime, use JS native features like `typeof` (for the 9 JS value types), `instanceOf` (to check if an object value is an instance of specific class) or `in` (to check if an object has a particular property)
- Type Guarding with Union Types is a common design pattern

### Generic Type

- Are types that work together with another type. Ex `Array<string>` means the `Array` type works with the `string` type
- There are certain types that need another type to work with (like Arrays), making them generic types
- Generic types are built when the type information is incomplete and dependent on the type to be infered for one or more of its properties

