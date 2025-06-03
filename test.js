function listAnagram(arr) {
  let newArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }

  for (let i = 0; i < arr.length; i++) {
    newArr.push(sortChar(arr[i]));
  }
  for (let i = 0; i < arr.length; i++) {
    let anagram = [];
    for (let j = 0; j < arr.length; j++) {
      if (j < i) {
        if (newArr[j] == newArr[i]) {
          break;
        }
      } else {
        if (newArr[j] == newArr[i]) {
          anagram.push(arr[j]);
        }
      }
    }
    if (anagram.length != 0) result.push(anagram);
  }
  return result;
}
function sortChar(str) {
  let newStr = str.split("");
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < newStr.length - 1; j++) {
      if (newStr[j] > newStr[j + 1]) {
        let temp = newStr[j];
        newStr[j] = newStr[j + 1];
        newStr[j + 1] = temp;
      }
    }
  }
  return newStr.join("");
}

console.log(
  listAnagram(["cook", "save", "taste", "aves", "vase", "state", "map"])
);
