const input = "hxbxwxba";
const aToZ = "abcdefghijklmnopqrstuvwxyz";

/**
 * Convert base 26 az num to decimal
 * @param {number} num
 * @returns string
 */
function toBase26(num) {
  let letters = "";
  while (num > 0) {
    letters = aToZ[num % 26] + letters;
    num = Math.floor(num / 26);
  }
  return letters
}

/**
 * Convert decimal to base 26 a-z num
 * @param {string} num A num in base 26 a-z
 * @returns string
 */
function toBase10(num) {
  const stringLength = num.length;
  let magnitude;
  let decimal = 0;
  for (let i = 0; i < stringLength; i++) {
    magnitude = stringLength - 1;
    const char = num[i];
    const charIndex = aToZ.indexOf(char);
    const pow = Math.pow(26, magnitude - i);
    decimal += charIndex * pow;
  }
  return decimal;
}

function containsIllegalVowels(password) {
  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char === 'i' || char === 'o' || char === 'u') {
      return true;
    }
    if (password[i + 2]) {

    }
  }
}

function checkPassword(password) {
  return !containsIllegalVowels(password)
}

const matched = false;
let dec = toBase10(input);
while (!matched) {
  const next = dec++;
  const password = toBase26(next);
  checkPassword(password);
  console.log(password);
}
