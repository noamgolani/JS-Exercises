function digitNum1(num) {
  let numberOfDigits = Math.floor(Math.log10(num)) + 1;
  let digitSum = 0;
  for (let i = 0; i < numberOfDigits; i++) {
    digitSum += num % 10;
    num = Math.floor(num / 10);
  }
  return digitSum;
}
