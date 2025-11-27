function moveAllZerosToTheEnd(array) {
  const zeros = [];
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      result.push(array[i]);
    } else {
      zeros.push(array[i]);
    }
  }
  return [...result, ...zeros];
}

console.log(moveAllZerosToTheEnd([1, 4, 0, 0, 45, 67, 8, 0, 3]));
