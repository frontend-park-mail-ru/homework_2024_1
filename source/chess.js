"use strict";

const chess = (n) => {
  if (n < 2 || isNaN(n) || n === Infinity) {
    return null;
  }

  const oddRow = Array.from({ length: n }, (_, index) =>
    index % 2 === 0 ? "*" : " "
  ).join("");
  const evenRow = Array.from({ length: n }, (_, index) =>
    index % 2 === 0 ? " " : "*"
  ).join("");

  const matrixArray = Array.from({ length: n }, (_, index) =>
    index % 2 === 0 ? oddRow : evenRow
  );
  const matrix = matrixArray.join("\n") + "\n";

  return matrix;
};
