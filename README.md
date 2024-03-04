# React & TypeScript

This repository contains code for the course by the same name by Maximilian Schwarzmueller on Udemy.

### Type Inference & Type Annotation

- explicitly declaring the type of a variable is called **type annotation**, as opposed of TS infering the type of the variable based on the value assigned to it which is called **type inference**
- if a variable is declared but not initialized, its type is _any_ (the default)
- such a variable can be initialized with any specific type
- else, TS infers the type of the variable based on the initialized value later complaining if you reassign a value of another type
