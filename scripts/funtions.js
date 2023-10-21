const arrayTable = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];
function celularCounter(xAxis, yAxis) {
  let counter1 = 0;
  for (let i = xAxis - 1; i <= xAxis + 1; i++) {
    for (let j = yAxis - 1; j <= yAxis + 1; j++)
      if (arrayTable[i][j] === 1) {
        counter1++;
      }
  }

  return counter1;
}

console.log(celularCounter(1, 1));
