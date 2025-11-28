// n * (n+1)/2
function missingNumber(nums) {
  //   const n = nums.length;
  const n = nums.at(-1);
  const currentSum = nums.reduce((a, b) => a + b);
  const totalSum = (n * (n + 1)) / 2;
  const missing = totalSum - currentSum;
  return missing;
}

const array = [0, 1, 2, 3, 5];
// console.log(missingNumber(array));

function threeSum(nums, target = 0) {
  let results = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    let subTarget = target - nums[i];
    while (left < right) {
      let currentSum = nums[left] + nums[right];
      if (currentSum === subTarget) {
        results.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      } else if (currentSum < subTarget) {
        left++;
      } else if (currentSum > subTarget) {
        right--;
      }
    }
  }
  return results;
}

// console.log(threeSum([2, 3, 1, 5, -3, -4, 7, 6]));
function mergeSort(array) {
  const length = array.length;
  if (length <= 1) {
    return array;
  }
  const middle = Math.floor(length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}

console.log(mergeSort([67, -1, 77, -100, 0, 100, 43, 56, 34, 2]));
