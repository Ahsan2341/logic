function mergeSort(array) {
  const length = array.length;
  if (length <= 1) {
    return array;
  }
  const middle = Math.floor(length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);
  return merge(sortedLeft, sortedRight);
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else if (leftArray[leftIndex] > rightArray[rightIndex]) {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < leftArray.length) {
    result.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    result.push(rightArray[rightIndex]);
    rightIndex++;
  }
  return result;
}

console.log(mergeSort([23, 56, 8, 20, 1, 0, -34, -1, 89, 45, 6]));
