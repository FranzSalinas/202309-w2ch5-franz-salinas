import { tableGenerator } from "./tools.js";
import { theGameOfLife } from "./tools.js";
import { celularCounter } from "./tools.js";

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
