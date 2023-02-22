/*---------SELECTION SORT----------*/
/*
 * Algo -
 * 1. Find the minimum element in the unsorted array and swap it with the element at the beginning.
 * The inner loop selects the minimum element in the unsorted array
 * Time Complexity = O(n^2)
 * Space Complexity = O(1)
 */
var selectionSort = function (arr) {
  let arrLength = arr.length; // to avoid calculating everytime while looping
  if (arrLength > 1) {
    for (let x = 0; x < arrLength - 1; x++) {
      // Find minimum index from unsorted section of the array
      let minIndex = x;
      for (let y = x + 1; y < arrLength; y++) {
        if (arr[minIndex] > arr[y]) {
          minIndex = y;
        }
      }
      // Swap elements
      let temp = arr[minIndex];
      arr[minIndex] = arr[x];
      arr[x] = temp;
    }
  }
  return arr;
};

let unsortedArr = [8, 0, 1, 7, 6];
console.log(
  'Selection Sort --->',
  'Before Sorting',
  unsortedArr,
  '::',
  'After Sorting',
  selectionSort([8, 0, 1, 7, 6])
);
