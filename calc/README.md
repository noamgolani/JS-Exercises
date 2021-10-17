# Calc POC

## My solution

### Binary tree parsing

The most interesting part of this assignment, is the **Equation parsing**.
To solve this problem i used a **binary tree recursive algorithm**, that recives a string finds the "lowest order" operation aveliable for split and calls to child processes of the function. Left and right for the chosen operator.

Lets say we recive an equation: `5 + 6 X (4 + Sqrt(3 + 12)) + 4`
The binary tree algorithm will parse it in this way:

```
Operator: `+`
Left: `5`
Right: `6 X (4 + Sqrt(3 + 12)) + 4`: {
  Operator: `+`
  Left: `6 X (4 + Sqrt(3 + 12))`:{
    Operator: `X`
    Left: `6`
    Right: `4 + Sqrt(3 + 12)`:{
      Operator: `+`
      Left: `4`
      Right: `Sqrt(3 + 12)`:{
        Operator: `Sqrt`
        Left: ``
        Right: `3 + 12`:{
          Operator: `+`
          Left: `3`
          Right: 12
        }
      }
    }
  }
  Right: `4`
}
```

### [Link](./dist/index.html) to final product

## Assignment

- Copy the contents of the assignment directory (in this repo) to a new dir in your short assignments repo, to use as a baseline for the Calc project
- In the newly created directory, create a new project using npm init
- Config project to use ES6 moduling method (in package.json: "type": "module" )
- Build a simple math module math.js, implementing the following methods:
  - add(n1, n2)
  - sub(n1, n2)
  - multiply(n1, n2)
  - divide(n1, n2)
  - equals(n1, n2, callback)
- Attach methods to buttons in the DOM
