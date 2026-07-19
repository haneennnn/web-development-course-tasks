function greaterthan(arr, value) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(greaterthan([3, 7, 2, 9, 5], 4));