import { analyzeArray } from "../src/analyze";

test("Analyze array of integers", () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test("Analyze array of floating point numbers", () => {
  expect(
    analyzeArray(
      [32.71, 0.51, 100.01, 35.00, 90.81, 31.62, 79.54, 90.30, 6.50, 57.60]
    )
  ).toEqual({
    average: 52.46,
    min: 0.51,
    max: 100.01,
    length: 10
  });
});

test("Analyze an array with a single integer", () => {
  expect(analyzeArray([100])).toEqual({
    average: 100,
    min: 100,
    max: 100,
    length: 1
  });
});

test("Analyze empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: 0,
    min: Infinity,
    max: -Infinity,
    length: 0
  });
});
