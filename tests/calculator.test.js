import { Calculator } from "../src/calculator";

test("Addition with two positive integers", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test("Addition with two negative integers", () => {
  expect(Calculator.add(-1, -2)).toBe(-3);
});

test("Addition with a positive and a negative integer", () => {
  expect(Calculator.add(-1, 2)).toBe(1);
});

test("Addition with two floating point numbers", () => {
  expect(Calculator.add(1.5, 2.2)).toBeCloseTo(3.7);
});

test("Addition with two negative integer", () => {
  expect(Calculator.add(-1.5, -2.2)).toBeCloseTo(-3.7);
});

test("Addition with a positive and a negative floating point number", () => {
  expect(Calculator.add(-1.5, 2.2)).toBeCloseTo(0.7);
});

test("Addition with 0", () => {
  expect(Calculator.add(1, 0)).toBe(1);
});
