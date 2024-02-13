"use strict";

function chess(n) {
  if (n < 2 || isNaN(n) || n === Infinity) {
    return null;
  }

  let matrix = "";
  for (let i = 0; i < n * n; i++) {
    matrix += (i % n + Math.floor(i / n)) % 2 === 0 ? '*' : ' ';
    if ((i + 1) % n === 0) {
      matrix += '\n';
    }
  }
  return matrix;
}