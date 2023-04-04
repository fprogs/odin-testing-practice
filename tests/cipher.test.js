import { caesarCipher } from "../src/cipher";

// lower case strings
test("Shift lower case string by 1", () => {
  expect(caesarCipher("attack at dawn", 1)).toBe("buubdl bu ebxo");
});

test("Shift lower case string by 3", () => {
  expect(caesarCipher("attack at dawn", 3)).toBe("dwwdfn dw gdzq");
});

// upper case strings
test("Shift upper case string by 1", () => {
  expect(caesarCipher("ATTACK AT DAWN", 1)).toBe("BUUBDL BU EBXO");
});

test("Shift upper case string by 3", () => {
  expect(caesarCipher("ATTACK AT DAWN", 3)).toBe("DWWDFN DW GDZQ");
});

// other test cases
test("Shift empty string", () => {
  expect(caesarCipher("", 1)).toBe("");
});

test("Shift string by 0 leaving it unchanged", () => {
  expect(caesarCipher("Attack At Dawn", 0)).toBe("Attack At Dawn");
});

test("Shift string by factors of 26 leaving it unchanged", () => {
  expect(caesarCipher("attack at dawn", 26)).toBe("attack at dawn");
  expect(caesarCipher("attack at dawn", 26 * 2)).toBe("attack at dawn");
  expect(caesarCipher("attack at dawn", 26 * 10)).toBe("attack at dawn");
});

test("Shift mixed case string with punctuation", () => {
  expect(caesarCipher("The animals had a nonchalant air of \"What are you doing here, humans?\" about them.", 5))
    .toBe("Ymj fsnrfqx mfi f stshmfqfsy fnw tk \"Bmfy fwj dtz itnsl mjwj, mzrfsx?\" fgtzy ymjr.");
});

test("Shift string by 3 making it wrap", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 3)).toBe("defghijklmnopqrstuvwxyzabc");
});
