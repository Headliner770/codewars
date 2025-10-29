// ❓ Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Сложить все числа заданного массива (списка), за исключением самого большого и самого маленького элемента (по значению, а не по индексу!).
// Самый большой или самый маленький элемент — это по одному элементу на каждом краю, даже если таких элементов несколько с одинаковым значением..

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
// Если вместо массива указано пустое значение (null, None, Nothing, nil и т.д.) или заданный массив является пустым списком или списком, содержащим только 1 элемент, вернуть 0.

// ✔️ SOLUTION:
// const array = [6, 2, 1, 8, 10];
// const array2 = [1, 1, 11, 2, 3];

// не отсеивает по одному мин и макс значению !!!
// function sumArray(array) {
//   if (!Array.isArray(array) || array.length <= 2) return 0;

//   const max = Math.max(...array);
//   const min = Math.min(...array);

//   const filterArray = array.filter((n) => n !== max && n !== min);
//   return filterArray.reduce((sum, n) => sum + n, 0);
// }

const array = [6, 2, 1, 8, 10];
const array2 = [1, 1, 11, 2, 3];

function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) return 0;
  const sortArray = [...array].sort((a, b) => a - b);
  const sliceAraay = sortArray.slice(1, -1);
  return sliceAraay.reduce((sum, x) => sum + x, 0);
}

console.log(sumArray(array));
console.log(sumArray(array2));
