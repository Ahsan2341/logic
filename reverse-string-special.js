function reverseStringKeepSpecial(str) {
  // Convert string to array because strings are immutable in JS
  const arr = str.split('');

  // Initialize two pointers
  let left = 0;
  let right = arr.length - 1;

  // Helper regex to check for alphanumeric characters (letters and numbers)
  // You can adjust this regex to strictly just letters (/[a-zA-Z]/) if numbers should be "special" too.
  const isAlphaNumeric = (char) => /^[a-z0-9]+$/i.test(char);

  while (left < right) {
    // If left character is special, move left pointer forward
    if (!isAlphaNumeric(arr[left])) {
      left++;
    }
    // If right character is special, move right pointer backward
    else if (!isAlphaNumeric(arr[right])) {
      right--;
    }
    // Both are alphanumeric, so we swap them
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  // Join the array back into a string
  return arr.join('');
}

// --- Test Cases ---

// console.log(reverseStringKeepSpecial("a,b$c"));
// Expected: "c,b$a"

// console.log(reverseStringKeepSpecial("Ab,c,de!$"));
// Expected: "ed,c,bA!$"

// console.log(reverseStringKeepSpecial("Hello-World!"));
// Expected: "dlroW-olleH!" (The hyphen and exclamation mark stay put)

// console.log(reverseStringKeepSpecial("123...456"));

// Expected: "654...321"

function reverseStringKeepSpecial2(str) {
  // convert string to array
  const arra = str.split("");
  const isNotSpecial = (char) => /^[a- -9]+$/i.test(char);
  let left = 0;
  let right = arra.length - 1;
  while (left < right) {
    if (!isNotSpecial(arra[left])) {
      left++;
    } else if (!isNotSpecial(arra[right])) {
      right--;
    } else {
      // swap
      [arra[left], arra[right]] = [arra[right], arra[left]];
      left++;
      right--;
    }
  }
  return arra.join("");
}

console.log(reverseStringKeepSpecial("S@ms$cv$$"));
console.log(reverseStringKeepSpecial2("S@ms$cv$$"));
