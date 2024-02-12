"use strict";

function chess(n) {
  if (n < 2 || isNaN(n) || n == Infinity) {
    return null;
  }

  let matrix = "";
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 == 0) {
        line += "*";
      } else {
        line += " ";
      }
    }
    line += "\n";
    matrix += line;
  }
  return matrix;
}