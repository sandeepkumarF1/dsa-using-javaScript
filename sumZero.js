const arr = [-5, -4, -3, -2, -1, 0, 1, 4, 5, 6];

function getPairZero(arr) {
  for (const num of arr) {
    for (let j = 1; j <= arr.length; j++) {
      if (num + arr[j] === 0) {
        return [num, arr[j]];
      }
    }
  }
}

const output = getPairZero(arr);
console.log(output);
