"use strict";

const chess = (n) => {
  if (n <= 1) {
    return null;
  }

  let result = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 == 0) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\n";
  }

  return result;
};
