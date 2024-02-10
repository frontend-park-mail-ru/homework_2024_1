"use strict";

const chess = (boardSize) => {
  boardSize = parseInt(boardSize);

  if (boardSize && boardSize <= 1) return null;

  return Array(boardSize)
    .fill("")
    .reduce((acc, _, idx) => {
      let line = "";
      if (idx % 2 === 0) {
        line = "* ".repeat(boardSize / 2);
        if (boardSize % 2 !== 0) {
          line += "*";
        }
      } else {
        line = " *".repeat(boardSize / 2);
        if (boardSize % 2 !== 0) {
          line += " ";
        }
      }
      return acc + line + "\n";
    }, "");
};
