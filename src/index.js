function mergeSortInPlace(arr, low, high) {
  let mid = Math.floor((low + high) / 2),
    i = low,
    j = mid + 1,
    temp = [];
  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }
  while (j <= high) {
    temp.push(arr[j]);
    j++;
  }

  console.log("res==", i, j, temp, mid);
}

mergeSortInPlace([8, 9, 10, 11, 1, 2, 3, 5], 0, 7);
