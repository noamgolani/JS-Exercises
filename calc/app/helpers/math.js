import $ from "jquery";

function calc(str) {
  const noSqrt = str.replace("&radic;", "~");
  return parseStrToTree($("#binTree"), str);
}

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  X: (a, b) => a * b,
  "/": (a, b) => (1.0 * a) / b,
  "%": (a, b) => a % b,
  "~": (_, b) => Math.sqrt(b),
};

function cleanStr(str) {
  const trimed = str.trim();
  let striped = trimed;
  while (striped[0] === "(" && striped[striped.length - 1] === ")") {
    striped = striped.slice(1, striped.length - 1); // removes wrapping () if any
  }
  return striped;
}

function parseStrToTree(father, str) {
  const striped = cleanStr(str);
  console.log("Parsing: " + striped);
  father.append(`
    <div class="node">${striped}</div>
  `);
  const newFather = father.find(".node");
  const opGroups = [
    ["+", "-"],
    ["X", "/"],
    ["%", "~"], // ~ for sqrt
  ];

  for (const opGroup of opGroups) {
    let bracketCount = 0;
    for (let i = 0; i < striped.length; i++) {
      const char = striped[i];
      if (char === "(") bracketCount++;
      else if (char === ")") bracketCount--;
      else if (opGroup.includes(char) && bracketCount === 0) {
        const [left, right] = callLeftRight(newFather, striped, i);
        console.log("Calculating: " + left + char + right);
        return operators[char](left, right);
      }
    }
  }
  return parseFloat(striped);
}

function callLeftRight(father, str, index) {
  const leftStr = str.slice(0, index);
  const rightStr = str.slice(index + 1);
  const leftTree = parseStrToTree(father, leftStr);
  const rightTree = parseStrToTree(father, rightStr);
  return [leftTree, rightTree];
}

export default {
  calc,
};

class TreeNode {
  constructor(info, left, right) {
    this.info = info;
    this.left = left;
    this.right = right;
  }
}
