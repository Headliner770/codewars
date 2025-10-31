// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// ✔️ SOLUTION:
// лучше делать чреез filter
function removeEveryOther(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArray.push(arr[i]);
  }
  return newArray;
}
const array = ["Keep", "Remove", "Keep", "Remove", "Keep"];
const result = removeEveryOther(array);
console.log(result);
