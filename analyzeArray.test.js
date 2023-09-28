const analyzeArray = require('./analyzeArray');

test('calculates average', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({ avg: 3, min: 1, max: 5, length: 5 });
});

test('handles negative numbers', () => {
  expect(analyzeArray([-1, -2, -3, -4, -5])).toEqual({ avg: -3, min: -5, max: -1, length: 5 });
});

test('handles decimal numbers', () => {
  expect(analyzeArray([1.5, 2.5, 3.5, 4.5, 5.5])).toEqual({ avg: 3.5, min: 1.5, max: 5.5, length: 5 });
});

test('handles arrays with one element', () => {
  expect(analyzeArray([1])).toEqual({ avg: 1, min: 1, max: 1, length: 1 });
});

test('handles empty arrays', () => {
  expect(analyzeArray([])).toEqual({ avg: NaN, min: Infinity, max: -Infinity, length: 0 });
});