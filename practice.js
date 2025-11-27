function twoSum(nums, target) {
  let object = {};
  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];
    if (object.hasOwnProperty(needed)) {
      return [object[needed], i];
    }
    object[nums[i]] = i;
  }
}

function threeSum(nums, target = 0) {
  const n = nums.length;
  const results = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    let subTarget = target - nums[i];
    while (left < right) {
      const currentSum = nums[left] + nums[right];
      if (currentSum === subTarget) {
        results.push(nums[i], nums[left], nums[right]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (currentSum > subTarget) {
        right--;
      } else if (currentSum < subTarget) {
        left++;
      }
    }
  }
  return results;
}
// console.log(threeSum([2, 3, 45, 5, 4], 9));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

function findMaxMin(array) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return [max, min];
}

// console.log(findMaxMin([1, 43, 6, 7, 8, 0, 100]));

function specialReverse(string) {
  const array = string.split("");
  const isNotSpecial = (char) => /^[a-z0-9]+$/i.test(char);
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (!isNotSpecial(array[left])) {
      left++;
    } else if (!isNotSpecial(array[right])) {
      right--;
    } else {
      [array[left], array[right]] = [array[left], array[right]];
      left++;
      right--;
    }
  }
  return array.join("");
}

console.log(specialReverse("S@ms$cv$$"));
