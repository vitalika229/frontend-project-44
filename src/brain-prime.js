#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomNumbers = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

function primeCalculator(num) {
  for (let i = 2; i < num; i += 1) { if (num % i === 0) return false; }
  return num > 1;
}

// eslint-disable-next-line consistent-return
export default function prime() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let rounds = 0;
  while (rounds <= 3) {
    if (rounds >= 3) {
      return console.log(`Congratulations, ${name}!`);
    }

    const Question = randomNumbers();
    console.log(`Question: ${Question}`);
    let userAnswer = readlineSync.question('Your answer: ');

    if (String(userAnswer) === 'yes') {
      userAnswer = true;
    } else if (String(userAnswer) === 'no') {
      userAnswer = false;
    } else {
      userAnswer = null;
    }

    if (primeCalculator(Question) === userAnswer) {
      rounds += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${primeCalculator(Question)}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
}
