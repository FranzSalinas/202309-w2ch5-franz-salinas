import { tableGenerator } from "./tools.js";
import { theGameOfLife } from "./tools.js";
import { celularCounter } from "./tools.js";

describe("Testing theGameOfLife funtion", () => {
  describe("The funtion cumplies with the rules of the game of life ", () => {
    test("If a cero is surrounded by three number ones it becomes a number one", () => {
      const x = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];

      const expected = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];

      const result = theGameOfLife(x);
      // Asert
      expect(result).toStrictEqual(expected);
    });

    test("If a one is surrounded by more than three number ones it becomes a cero", () => {
      const x = [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ];

      const expected = [
        [1, 1, 1, 0],
        [1, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ];

      const result = theGameOfLife(x);
      // Asert
      expect(result).toStrictEqual(expected);
    });

    test("If a one is surrounded by two or three number ones it remains to be a number one", () => {
      const x = [
        [0, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0],
      ];

      const expected = [
        [0, 1, 0, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
      ];

      const result = theGameOfLife(x);
      // Asert
      expect(result).toStrictEqual(expected);
    });
  });
});

describe("Testing celularCounter funtion", () => {
  describe("The funtion has to count the number of ones surrounding the center axis ", () => {
    test("The result should be 2 ", () => {
      const testData = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];

      const expected = 2;

      const result = celularCounter(1, 1, testData);
      // Asert
      expect(result).toBe(expected);
    });
  });
});
