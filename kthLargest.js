const kthLargest = function (arr, k) {
  arr.sort((a, b) => a - b).reverse();
  return arr[k - 1];
};
const kthSmallest = function (arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
};

const largest = kthLargest(
  [
    3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
    5, 6,
  ],
  2
);
console.log("largest", largest);
const smallest = kthSmallest(
  [
    3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 0, 10, 11, 5, 6, 2, 4, 7,
    8, 5, 6,
  ],
  1
);
console.log("smallest", smallest);
