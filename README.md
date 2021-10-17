# JS-Exercises

Cyber4s JS Exercises

- **[Calc](./calc/README.md)** | _17/10/21_ - Implement a calculator using es6 modules.

- **[Q1](./q1.js)** | _29/8/21_ - Write a piece of code that computes the sum of digits of a 3-digit number.

  - Test your code on several different 3-digit numbers (for example 666, 300, 725). Hint: you might need to use Math.floor...

- **[Q2](./q2.js)** | _29/8/21_ - Write a piece of code that finds the solutions for a quadratic equation.

  - You can find on Google the formula to find the solutions. Test your code on different a, b, c values (like 1, 5, 6 or 1, -1, -1)

- **[Q3](./q3.js)** | _29/8/21_ - Write a piece of code that calculates the absolute value of a given number, WITHOUT using Math.abs (though you still can use other Math methods).

  - Test your code on positive numbers, negative numbers, and zero

- **[Q4](./q4.js)** | _30/8/21_ - You are given an array of a student's grades during the school year. Your task is to compute the following statistics

  - The range of the grades (difference between highest and lowest)
  - The median grade (the grade in the middle)
  - The range of the grades from the second half of the school year

  - The output of your code (what console.log prints) should be in the following format (notice the line-breaks and indentation):

    Stats:

    - Range: 40
    - Median: 88
    - Half Range: 12

- **[Q5](./q5.js)** | _31/8/21_ - Write a function that plays city trivia:

  - function guessCity(capital, coastal, famous, ancient)
  - The arguments are all true or false. The return value is the name of the city.

        Jerusalem is ancient, famous and a capital
        Tel Aviv is famous and coastal
        Acre is coastal and ancient
        Katzrin is ancient
        Zikim is coastal
        Musmus is not any of the above

  - For example, guessCity(false, true, true, false) returns "Tel Aviv". No other cities are recognized.

- **[Q6](./q6.js)** | _31/8/21_ - Formula 1 races are cool! and there have been many champions over the years.
  We want to find out how many times each of them won the races.

      You are given the following code template:

      // list of Formula 1 champions since the year 2000
      const formula1Champions = [
      "Schumacher",
      "Schumacher",
      "Schumacher",
      "Schumacher",
      "Schumacher",
      "Alonso",
      "Alonso",
      "Räikkönen",
      "Hamilton",
      "Button",
      "Vettel",
      "Vettel",
      "Vettel",
      "Vettel",
      "Hamilton",
      "Hamilton",
      "Rosberg",
      "Hamilton",
      "Hamilton",
      "Hamilton",
      "Hamilton"
      ]
      let winners = {}

      function countWin(driver) {
      // your code goes here
      }

      formula1Champions.forEach(countWin)

- The above code calls the countWin function for each of the drivers in the list of champions.
- Your job is to write the function so that for each champion it will update the winners object and count how many times each driver won.

- By the end of the execution, winners should look like this (the order does not matter):
  {Schumacher: 5, Alonso: 2, Räikkönen: 1, Hamilton: 7, Button: 1, Vettel: 4, Rosberg: 1}
