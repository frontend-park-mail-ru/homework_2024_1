"use strict";

/**
 * Returns the chessboard
 * @param {int} boardSize - size of the chessboard
 * @returns {string} chessboard like "* \n *"
 */
const chess = (boardSize) => {
  boardSize = Number(boardSize);
  if (!boardSize) return null;
  if (boardSize <= 1 || boardSize > Number.MAX_VALUE || boardSize % 1) return null;

  return Array(boardSize)
    .fill("")
    .reduce((acc, _, idx) => {
      let line = "";
      if (idx % 2 == 0) {
        line = "* ".repeat(boardSize / 2);
        if (boardSize % 2) {
          line += "*";
        }
      } else {
        line = " *".repeat(boardSize / 2);
        if (boardSize % 2) {
          line += " ";
        }
      }
      return acc + line + "\n";
    }, "");
};
