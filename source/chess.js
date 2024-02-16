"use strict";

const chess = (n) => {
  if (n < 2 || isNaN(n) || n === Infinity ) {
    return null;
  }

  let oddRow = '';
  let evenRow = '';
  let matrix = '';

  for (let i = 0; i < n; i++) {
    oddRow += i % 2 === 0 ? '*' : ' ';
    evenRow += i % 2 === 0 ? ' ' : '*';
  }

  oddRow += '\n';
  evenRow += '\n';
  
  for (let i = 0; i < n; i++) {
    matrix += i % 2 === 0 ? oddRow : evenRow;
  }

  return matrix;
}

