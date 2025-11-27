function isPalindrome(str) {
  let array = str.split("");
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (array[left] != array[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

console.log(isPalindrome("racecarsss"));
