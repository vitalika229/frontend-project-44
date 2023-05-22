#!/usr/bin/env node
import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
export default function calculator() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let rounds = 1;
  while (rounds <= 3) {
    let roundAnswer;
    let calculatorSign;

    const minNum = 0;
    const maxNum = 50;
    const randomNumbers1 = `${Math.floor(Math.random() * (maxNum - minNum) + minNum)}`;
    const randomNumbers2 = `${Math.floor(Math.random() * (maxNum - minNum) + minNum)}`;

    const values = ['+', '-', '*'];

    // eslint-disable-next-line max-len, no-inner-declarations, no-shadow
    function random(values) { const radious = Math.floor(Math.random() * values.length); return values[radious]; }

    const randomExample = random(values);
    const example = `${randomNumbers1} ${randomExample} ${randomNumbers2}`;
    console.log(`Question: ${example}`);

    if (randomExample === '+') {
      calculatorSign = `${(randomNumbers1 * 1) + (randomNumbers2 * 1)}`;
    } else if (randomExample === '*') {
      calculatorSign = `${randomNumbers1 * randomNumbers2}`;
    } else { calculatorSign = `${randomNumbers1 - randomNumbers2}`; }

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === calculatorSign) {
      roundAnswer = 'Correct!';
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calculatorSign}'."`);
      return console.log(`Let's try again, ${name}!`);
    }

    if (roundAnswer !== 'Correct!') { rounds = 0; }
    console.log(roundAnswer);
    rounds += 1;
  }
  console.log(`Congratulations, ${name}!`);
}
