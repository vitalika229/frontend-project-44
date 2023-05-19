#!/usr/bin/env node
import readlineSync from 'readline-sync';

function func(a, b) {
  if (b === 0) {
    return a;
  }
  return func(b, a % b);
}

// eslint-disable-next-line consistent-return
export default function gcd() {
  console.log('Welcome to the Brain Games!');
  const userAnswer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userAnswer}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let matches = 1;
  while (matches <= 3) {
    let linterAnswer;

    const floor = 0;
    const top = 100;

    const num1 = `${Math.floor(Math.random() * (top - floor) + floor)}`;
    const num2 = `${Math.floor(Math.random() * (top - floor) + floor)}`;

    console.log(`Question: ${num1} ${num2}`);

    const personAnswer = readlineSync.question('Your answer: ');

    if (personAnswer === `${func(num1, num2)}`) { linterAnswer = 'Correct!'; } else if (personAnswer !== `${func(num1, num2)}`) {
      console.log(`'${personAnswer}' is wrong answer ;(. Correct answer was '${func(num1, num2)}'.`);
      return console.log(`Let's try again, ${personAnswer}!`);
    }

    if (linterAnswer !== 'Correct!') { matches = 0; }
    console.log(linterAnswer);
    matches += 1;
  }
  console.log(`Congratulations, ${userAnswer}!`);
}
