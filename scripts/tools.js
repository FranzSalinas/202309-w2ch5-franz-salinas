export const tableGenerator = (xSize, ySize) => {
  const array = [];
  for (let i = 0; i < ySize; i++) {
    array.push([]);
    for (let j = 0; j < xSize; j++) {
      array[i].push(Math.round(Math.random()));
    }
  }

  return array;
};

export const celularCounter = (xAxis, yAxis, arrayTable) => {
  let counter1 = 0;
  for (let i = xAxis - 1; i <= xAxis + 1; i++) {
    for (let j = yAxis - 1; j <= yAxis + 1; j++) {
      if (i !== xAxis || j !== yAxis) {
        if (arrayTable[i] && arrayTable[i][j] === 1) {
          counter1++;
        }
      }
    }
  }

  return counter1;
};

/* Console.table(arrayTable);
console.log(celularCounter(4, 1, arrayTable)); */

export const theGameOfLife = (arrayTable) => {
  const arrayTable2 = structuredClone(arrayTable);

  let value;

  for (let i = 0; i < arrayTable2.length; i++) {
    for (let j = 0; j < arrayTable2[i].length; j++) {
      value = celularCounter(i, j, arrayTable);
      if (arrayTable[i][j] === 0) {
        if (celularCounter(i, j, arrayTable) === 3) {
          arrayTable2[i][j] = 1;
        }
      } else if (value < 2 || value > 3) {
        arrayTable2[i][j] = 0;
      }
    }
  }

  return arrayTable2;
};

export const playTheGame = (loops, arrayTable) => {
  console.clear();
  console.table(arrayTable);
  if (loops < 50) {
    const newTable = theGameOfLife(arrayTable);
    setTimeout(() => {
      playTheGame(loops + 1, newTable);
    }, 800);
  }
};

playTheGame(2, tableGenerator(10, 9));
