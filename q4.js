function range(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

function median(arr) {
  return arr.slice().sort((a, b) => a - b)[Math.floor((arr.length - 1) / 2)];
}

function halfRange(arr) {
  return range(arr.slice(Math.floor((arr.length - 1) / 2)));
}

function doStatistics(arr) {
  console.log(
    `Stats:\n\tRange: ${range(arr)}\n\tMedian: ${median(
      arr
    )}\n\tHalf Range: ${halfRange(arr)}`
  );
}

const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
doStatistics(grades);
