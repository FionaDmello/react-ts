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
- 
