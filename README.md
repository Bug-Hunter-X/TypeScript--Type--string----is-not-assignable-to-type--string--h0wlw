# TypeScript Type Error: String vs. String Array

This repository demonstrates a common TypeScript error related to type mismatches.  The `greeter` function expects a single string argument, but it's called with an array of strings. This leads to a compilation error.  The solution showcases how to properly handle the array input.

## Error Description

The code attempts to pass an array of strings to a function expecting a single string. TypeScript's type system correctly flags this as an error. 

## Solution

The solution demonstrates several ways to correctly handle the array input:

1.  Iterating through the array and calling the function for each element.
2.  Joining the array elements into a single string before passing it to the function.

Choose the method that best suits your needs. The solution file provides both implementations.