/**
 * Welcome to in Advent of code
 * Use these comments to learn how to work on your solutions. You can later delete them and adjust this template to your liking at `/src/template/js`
 *
 * Go to https://adventofcode.com/<year>/day/<dayNum> (the link is at the README file in this same folder) and read the problem statement.
 * The problem includes an input example that you can use to work on your solution. You can copy that input example and use it to check you're on the right track.
 * The real input is much bigger and is downloaded automatically for you at input.txt.
 *
 * Create a input-example.txt and use the readFile function to read its contents.
 * You can use the dev mode `pnpm dev <dayNum>` and log the invoking of your function at the bottom of this file.
 *
 * Then, once you've solved the problem you can use send mode `pnpm send <dayNum>`.
 * The send mode gets your functions exported here (part1 and part2, DON'T CHANGE THE NAMES) and runs them automagically passing the real input to them.
 * You will see the result in the console and be able to submit it to Advent of code.
 *
 * Do you have questions? Join the AoC channel in Slack!
 *
 * Happy coding!
 */

import { readFile } from './utils.js';

// You can use readFile this way
const exampleInput = readFile('puzzles/day-02/input.txt');

const MAX_BLUE = 14;
const MAX_RED = 12;
const MAX_GREEN = 13;

const getCubesByColors = (gameSet) => {
  const blueCubes = gameSet
    .match(/\s(\d+)\sblue/g)
    .map((match) => match.replace(/\sblue/, ''));
  const redCubes = gameSet
    .match(/\s(\d+)\sred/g)
    .map((match) => match.replace(/\sred/, ''));
  const greenCubes = gameSet
    .match(/\s(\d+)\sgreen/g)
    .map((match) => match.replace(/\sgreen/, ''));
  return { blueCubes, redCubes, greenCubes };
};

const parseInput = (rawInput) => rawInput;

export const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const dataObject = input.split('\n').map((game, index) => {
    const gameData = game.split(':');
    const { blueCubes, redCubes, greenCubes } = getCubesByColors(gameData[1]);
    const isValidBlue = !blueCubes.find((cube) => cube > MAX_BLUE);
    const isValidRed = !redCubes.find((cube) => cube > MAX_RED);
    const isValidGreen = !greenCubes.find((cube) => cube > MAX_GREEN);
    console.log({ blueCubes, redCubes, greenCubes });
    return isValidBlue && isValidRed && isValidGreen;
  });
  return dataObject.reduce(
    (acc, curr, idx) => (curr ? acc + (idx + 1) : acc),
    0,
  );
};

export const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const dataObject = input.split('\n').map((game, index) => {
    const gameData = game.split(':');
    const { blueCubes, redCubes, greenCubes } = getCubesByColors(gameData[1]);
    const fewCubeOfBlue = Math.max(...blueCubes);
    const fewCubeOfRed = Math.max(...redCubes);
    const fewCubeOfGreen = Math.max(...greenCubes);

    return fewCubeOfBlue * fewCubeOfRed * fewCubeOfGreen;
  });
  return dataObject.reduce((acc, curr) => curr + acc, 0);
};

// You can use the dev mode adding a console log here
console.log(part2(exampleInput));
