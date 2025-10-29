// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// a can contain numbers or strings. x can be either.
// Return true if the array contains the value, false if not.

// Вам дан массив a и значение x. Ваша задача — проверить, содержит ли данный массив это значение.
// Массив a может содержать числа или строки. x может быть либо тем, либо другим.
// Верните true, если массив содержит значение, и false, если нет.

// ✔️ SOLUTION:
function check(a, x) {
  return a.includes(x);
}
