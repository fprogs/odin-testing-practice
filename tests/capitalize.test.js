import { capitalize } from "../src/capitalize";

test("Capitalize strings", () => {
  expect(capitalize("string")).toBe("String");
});

test("Capitalize empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Capitalize single character", () => {
  expect(capitalize("s")).toBe("S");
});

