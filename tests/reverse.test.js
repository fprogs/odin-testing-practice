import { reverseString } from "../src/reverse";

test("Reverse string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("Reverse string with unicode characters", () => {
  expect(reverseString("네, 그래, 맞아")).toBe("아맞 ,래그 ,네");
});

test("Reverse empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Reverse single character", () => {
  expect(reverseString("s")).toBe("s");
});