// ❓ Description:
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Числа могут быть отрицательными или нецелыми. Если массив не содержит чисел, следует вернуть 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// ✔️ SOLUTION:
const numbers = [1, 5.2, 4, 0, -1];
function sum(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sum(numbers));
