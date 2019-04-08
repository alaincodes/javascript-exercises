// We can chain the three method together: string.split("").reverse().join("");

const reverseString = function(string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");

  return joinArray;
}

module.exports = reverseString
