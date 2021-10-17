function calc(str) {
  return parseStrToTree(str);
}

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  X: (a, b) => a * b,
  "/": (a, b) => (1.0 * a) / b,
  "%": (a, b) => a % b,
  "~": (_, b) => Math.sqrt(b),
};

function parseStrToTree(str) {
  const striped = str.trim();
  console.log("Parsing: " + str);
  const opGroups = [
    ["+", "-"],
    ["X", "/"],
    ["%", "~"], // ~ for sqrt
  ];
  for (const opGroup of opGroups) {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (opGroup.includes(char)) {
        const [left, right] = callLeftRight(str, i);
        console.log("Calculating: " + left + char + right);
        return operators[char](left, right);
      }
    }
  }
  return parseFloat(str);
}

function callLeftRight(str, index) {
  const leftStr = str.slice(0, index);
  const rightStr = str.slice(index + 1);
  const leftTree = parseStrToTree(leftStr);
  const rightTree = parseStrToTree(rightStr);
  return [leftTree, rightTree];
}

export default {
  calc,
};
