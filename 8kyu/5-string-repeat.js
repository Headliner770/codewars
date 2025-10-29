// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Напишите функцию, которая принимает два параметра: неотрицательное целое число n и строку s, и возвращает строку s, повторённую ровно n раз.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// ✔️ SOLUTION:

function repeatStr(n, s) {
  return s.repeat(n);
}

