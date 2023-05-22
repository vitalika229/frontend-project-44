#!/usr/bin/env node
import readlineSync from 'readline-sync';

// eslint-disable-next-line max-len
const arithmeticProgression = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);// https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/arithmeticProgression.md

// eslint-disable-next-line consistent-return
export default function progression() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let rounds = 1;
  while (rounds <= 3) {
    // eslint-disable-next-line max-len
    const line = arithmeticProgression(Math.floor(Math.random() * (20 - 10)) + 2, Math.floor(Math.random() * (200 - 50)) + 50);
    const trueNumber = line[3];
    line[3] = '..';
    console.log(`Question: ${line.join(' ')}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (Number(userAnswer) !== Number(trueNumber)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueNumber}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    rounds += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}