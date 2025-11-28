// You must find the element that appears more than n/2 times,
// where n = array length.

// In the example:

// array length = 7

// n/2 = 3.5

// majority element must appear 4 or more times
const array = [2, 2, 1, 2, 3, 2, 2, 1, 1, 1, 1, 1, 1];

function majorityElement(array) {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      map[array[i]] = map[array[i]] + 1;
    } else {
      map[array[i]] = 1;
    }
  }
  let maxElement = null;
  let maxCount = 0;
  for (const key in map) {
    if (map[key] > maxCount) {
      maxElement = key;
      maxCount = map[key];
    }
  }
  return maxElement > array.length / 2 > maxElement ? maxElement : null;
}

console.log(majorityElement(array));
