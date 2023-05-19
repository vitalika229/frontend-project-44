#!/usr/bin/env node
import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
export default function calc() {
  console.log('Welcome to the Brain Games!');
  const nameAnswer = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameAnswer}!`);
  console.log('What is the result of the expression?');

  let matches = 1;
  while (matches <= 3) {
    let linterAnswer;
    let calculatorSign;

    const floor = 0;
    const top = 50;
    const num1 = `${Math.floor(Math.random() * (top - floor) + floor)}`;
    const num2 = `${Math.floor(Math.random() * (top - floor) + floor)}`;

    const values = ['+', '-', '*'];

    // eslint-disable-next-line max-len, no-inner-declarations, no-shadow
    function random(values) { const radious = Math.floor(Math.random() * values.length); return values[radious]; }

    const randomSign = random(values);
    const example = `${num1} ${randomSign} ${num2}`;
    console.log(`Question: ${example}`);

    if (randomSign === '+') {
      calculatorSign = `${(num1 * 1) + (num2 * 1)}`;
    } else if (randomSign === '*') {
      calculatorSign = `${num1 * num2}`;
    } else { calculatorSign = `${num1 - num2}`; }

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === calculatorSign) {
      linterAnswer = 'Correct!';
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calculatorSign}'."`);
      return console.log(`Let's try again, ${nameAnswer}!`);
    }

    if (linterAnswer !== 'Correct!') { matches = 0; }
    console.log(linterAnswer);
    matches += 1;
  }
  console.log(`Congratulations, ${nameAnswer}!`);
}
