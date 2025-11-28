// You must find the element that appears more than n/2 times,
// where n = array length.

// In the example:

// array length = 7

// n/2 = 3.5

// majority element must appear 4 or more times

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

// console.log(majorityElement(array));
function mooresAlgorithm(array) {
  let majority = array[0];
  let count = 1;
  for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    if (majority !== currentElement) {
      count -= 1;
      if (count <= 0) {
        majority = currentElement;
        count = 1;
      }
    } else {
      count++;
    }
  }
  let freq = 0;
  for (let num of array) {
    if (num === majority) {
      freq++;
    }
  }
  return freq >= array.length / 2 ? majority : null;
}
const array = [5, 5, 5, 5, 2, 3];
console.log(mooresAlgorithm(array));
