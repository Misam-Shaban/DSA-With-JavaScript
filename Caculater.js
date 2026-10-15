/**
 * Simple Calculator Practice
 * This file is used to practice basic arithmetic operations in JavaScript.
 */

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";

// Test examples
console.log("Addition (10 + 5):", add(10, 5));
console.log("Subtraction (10 - 5):", subtract(10, 5));
console.log("Multiplication (10 * 5):", multiply(10, 5));
console.log("Division (10 / 5):", divide(10, 5));
