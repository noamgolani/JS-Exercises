//solution number 1
function digitSum1(num) {
  let numberOfDigits = Math.floor(Math.log10(num)) + 1;
  let digitSum = 0;
  for (let i = 0; i < numberOfDigits; i++) {
    digitSum += num % 10;
    num = Math.floor(num / 10);
  }
  return digitSum;
}

//solution number 2
function digitSum2(num) {
  let stringNum = num.toString();
  return [...stringNum].reduce((sum, digit) => {
    return sum + parseInt(digit);
  }, 0);
}

console.log(digitSum1(123));
console.log(digitSum2(123));
