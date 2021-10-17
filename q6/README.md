# Q6

## [JS file](./q6.js)

Formula 1 races are cool! and there have been many champions over the years.
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
