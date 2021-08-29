function absolute1(num) {
  return num < 0 ? num * -1 : num;
}

function absolute2(num) {
  return parseFloat(num.toString().replace("-", ""));
}

console.log(absolute1(-3.7));
console.log(absolute2(3.7));
