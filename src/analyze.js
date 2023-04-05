function average(arr) {
  if (!arr.length) return 0;
  return arr.reduce((sum, val) => sum + val, 0) / arr.length;
}

function analyzeArray(arr) {
  return {
    average: average(arr),
    min: Math.min(...arr, Infinity),
    max: Math.max(-Infinity, ...arr),
    length: arr.length
  };
}

export { analyzeArray };