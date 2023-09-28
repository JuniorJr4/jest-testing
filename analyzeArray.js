function analyzeArray(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return { avg, min, max, length };
  }
  module.exports = analyzeArray;