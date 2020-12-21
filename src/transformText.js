var cursed = require("./cursed.json");

const getChar = (options, char) => {
  if (options.radio1 === "normal") {
    return char;
  }
  let num = Math.floor(Math.random() * cursed[char].length);
  return cursed[char][num];
};

export default function transformText(input, options) {
  input = input.toUpperCase();
  let output = "";

  if (options.radio2 === "random") {
    for (let i = 0; i < input.length; i++) {
      let c = input[i];
      if (c >= "A" && c <= "Z") {
        output += getChar(options, Math.random() > 0.5 ? c : c.toLowerCase());
      } else {
        output += c;
      }
    }
    return output;
  }

  let alt = true;
  if (options.startUpper) {
    alt = false;
  }

  for (let i = 0; i < input.length; i++) {
    let c = input[i];
    if (c >= "A" && c <= "Z") {
      if (alt) {
        c = c.toLowerCase();
      }
      alt = !alt;
      output += getChar(options, c);
    } else if (c === " ") {
      output += c;
      if (options.startLower) {
        alt = true;
      }
      if (options.startUpper) {
        alt = false;
      }
    } else {
      output += c;
    }
  }

  return output;
}
