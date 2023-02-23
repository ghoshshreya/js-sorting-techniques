var bubbleSort = function (arr) {
  const n = arr.length;
  if (arr.length > 1) {
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          arr = swap(arr, j, j + 1);
        }
      }
    }
  }
  return arr;
};

var swap = function (arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

console.log(bubbleSort([8, 9, 1, 6, 5, 2, 4]));
