const cityData = `Jerusalem is ancient, famous and a capital
Tel Aviv is famous and coastal
Acre is coastal and ancient
Katzrin is ancient
Zikim is coastal
Musmus is not any of the above
`;

const values = ["capital", "coastal", "famus", "ancient"];

//parsing the verbal city data
function parseCityData(data) {
  let parsedData = {};
  data.split("\n").forEach((cityLine) => {
    const cityName = cityLine.split("is")[0].trim();

    parsedData[cityName] = {};

    for (value of values)
      parsedData[cityName][value] = cityLine.includes(value);
  });
  return parsedData;
}

function guessCity(capital, coastal, famous, ancient) {
  const parsedData = parseCityData(cityData); // returns object with bool for each value ofa city

  let best = { name: "No City", score: -1 };

  for (city in parsedData) {
    let curretScore = 0;
    if (capital && parsedData[city].capital) curretScore++;
    if (coastal && parsedData[city].coastal) curretScore++;
    if (famous && parsedData[city].famous) curretScore++;
    if (ancient && parsedData[city].ancient) curretScore++;

    if (curretScore > best.score) best = { name: city, score: curretScore };
  }

  return best.name;
}

console.log(guessCity(0, 1, 1, 0));
