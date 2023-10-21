const arrayTable = [
  [0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
function celularCounter(xAxis, yAxis) {
  let counter1 = 0;
  for (let i = xAxis - 1; i <= xAxis + 1; i++) {
    for (let j = yAxis - 1; j <= yAxis + 1; j++) {
      if (xAxis !== i || yAxis !== j) {
        if (arrayTable[i] && arrayTable[i][j] === 1) {
          counter1++;
        }
      }
    }
  }

  return counter1;
}

function theGameOfLife(arrayTable) {
  const newArrayTable = strutureClone(arrayTable);

  for (let i = 0; i < arrayTable.length; i++) {
    for (let j =j < arrayTable.length; j++) {
      ;
      
    }
    
  }
}
