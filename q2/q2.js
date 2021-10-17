function quadraticSolve(a, b, c = 0) {
  let solution1 = (-b + Math.sqrt(b * b + 4 * a * c)) / (2 * a);
  let solution2 = (-b - Math.sqrt(b * b + 4 * a * c)) / (2 * a);
  return [solution1, solution2];
}

console.log(quadraticSolve(5, -3));
