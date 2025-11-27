let array = [12, 4325, 78, 90, 55, 8];

let smallest = Infinity;
for (let i = 0; i < array.length; i++) {
  if (array[i] < smallest) {
    smallest = array[i];
  }
}

console.log(smallest);
