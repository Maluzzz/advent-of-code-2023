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
const exampleInput = readFile('puzzles/day-01/input.txt');
const VALID_NUMBERS = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const PARSE = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};
const parseInput = (rawInput) => rawInput;

export const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const array = input.split('\n');
  const onlyNumbers = array.map((n) => {
    const allNumbers = n.replace(/[^0-9]/g, '');
    const onlyTwoDigits = allNumbers.slice(0, 1) + allNumbers.slice(-1);
    return onlyTwoDigits;
  });
  return onlyNumbers.reduce((acc, curr) => acc + parseInt(curr), 0);
};

const findFirstNumber = (n) => {
  let numberString = '';
  let needle = 0;
  let message = n;

  while (needle < n.length) {
    if (parseInt(n[needle])) {
      message = message.slice(1);
      numberString = n[needle];
      needle = n.length;
    } else {
      const number = VALID_NUMBERS.find((h) => message.startsWith(h));
      if (number) {
        message = message.slice(number.length);
        numberString = PARSE[number];
        needle = needle + n.length;
      } else {
        message = message.slice(1);
        needle = needle + 1;
      }
    }
  }
  return numberString;
};
const findSecondNumber = (n) => {
  let numberString = '';
  let needle = n.length - 1;
  let message = n.slice(-1);

  while (needle >= 0) {

    if (parseInt(n[needle])) {
      numberString = n[needle];
      needle = -1;
    } else {
      const number = VALID_NUMBERS.find((h) => message.startsWith(h));
      if (number) {
        numberString = PARSE[number];
        needle = -1;
      } else {
        needle = needle - 1;
        message= n.slice(needle, n.length)
      
      }
    }
  }
  return numberString;
};

export const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const array = input.split('\n');
  const onlyNumbers = array.map((n) => {
    const numbers = findFirstNumber(n) + findSecondNumber(n);
    return numbers;
  });

  return onlyNumbers.reduce((acc, curr) => acc + parseInt(curr), 0);
};


// You can use the dev mode adding a console log here

console.log(part2(exampleInput));
