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
  "Hamilton",
];

let winners = {};

function countWin(driver) {
  if (driver in winners) winners[driver]++;
  else winners[driver] = 1;
}

formula1Champions.forEach(countWin);

console.log(winners);
