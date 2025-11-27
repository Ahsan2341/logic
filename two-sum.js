function twoSum(nums, target) {
  let object = {};
  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];
    if (object[needed]) {
      return [nums.indexOf(nums[i]), nums.indexOf(needed)];
    } else {
      object[nums[i]] = needed;
    }
  }
}
// returns index
function twoSumBetter(nums, target) {
  let object = {};
  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];
    if (object.hasOwnProperty(needed)) {
      return [nums[needed], i];
    }
    object[nums[i]] = i;
  }
}

// returns value not index
function twoSumWithLeftRightPointers(nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const currentSum = nums[left] + nums[right];
    if (currentSum === target) {
      return [nums[left], nums[right]];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
// console.log(twoSumWithLeftRightPointers([2, 1, 6, -3, 10, 8], 3));

// returns values
function threeSumBrute(nums, target = 0) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          console.log(nums[i] + nums[j] + nums[k]);
          return [nums[i], nums[j], nums[k]];
        }
      }
    }
  }
}
function removeElementAtIndex(arr, indexToRemove) {
  return arr.filter((value, arrIndex) => arrIndex !== indexToRemove);
}
function threeSum(nums, target = 0) {
  for (let index = 0; index < nums.length; index++) {
    let theNum = nums[index];
    let subTarget = target - theNum;
    let subArray = removeElementAtIndex(nums, index);
    const needed = twoSumWithLeftRightPointers(subArray, subTarget);
    if (needed.length > 0) {
      return [...needed, theNum];
    }
  }
}

function threeSumOptimal(nums, target = 0) {
  const results = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    let subTarget = target - nums[i];
    while (left < right) {
      const currentSum = nums[left] + nums[right];
      if (currentSum === subTarget) {
        results.push([nums[i], nums[left], nums[right]]);
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
console.log(threeSumOptimal([2, 3, 4, 7, 9, 10, -1, -2], 23));
