const LOWER_CASE_A_CODE = 97,
      LOWER_CASE_Z_CODE = 122,
      UPPER_CASE_A_CODE = 65,
      UPPER_CASE_Z_CODE = 90,
      ALPHABET_LENGTH = 26;

function getCharCode(ch) {
  return ch.charCodeAt(0);
}

function getChar(charCode) {
  return String.fromCharCode(charCode);
}

function isUpperCaseAlpha(ch) {
  const charCode = getCharCode(ch);
  return charCode >= UPPER_CASE_A_CODE && 
         charCode <= UPPER_CASE_Z_CODE;
}

function isLowerCaseAlpha(ch) {
  const charCode = getCharCode(ch);
  return charCode >= LOWER_CASE_A_CODE && 
         charCode <= LOWER_CASE_Z_CODE;
}

function caesarCipher(str, shift) {
  const result = [];
  for (const ch of str) {
    const charCode = getCharCode(ch);
    if (isLowerCaseAlpha(ch)) { 
      result.push(
        getChar(
          ((charCode - LOWER_CASE_A_CODE + shift) % ALPHABET_LENGTH) + LOWER_CASE_A_CODE
        )
      );
    } else if (isUpperCaseAlpha(ch)) {
      result.push(
        getChar(
          ((charCode - UPPER_CASE_A_CODE + shift) % ALPHABET_LENGTH) + UPPER_CASE_A_CODE
        )
      );
    } else {
      result.push(ch);
    }
  }
  return result.join("");
}

export { caesarCipher };