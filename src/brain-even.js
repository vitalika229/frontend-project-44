#!/usr/bin/env node
import readlineSync from 'readline-sync';

function evenOrNot(numb) {
  const number = numb;
  if (Math.floor(number / 2) === number / 2) {
    // Чётное
    return true;
  }
  // Нечётное
  return false;
}

// eslint-disable-next-line consistent-return
export default function even() {
  console.log('Welcome to the Brain Games!');
  const nameAnswer = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameAnswer}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const floor = 0;
  const top = 100;

  let matches = 0;
  while (matches <= 2) {
    let linterAnswer;

    const randomNumbers = `${Math.floor(Math.random() * (top - floor)) + floor}`;

    console.log(`Question: ${randomNumbers}`);
    const personAnswer = readlineSync.question('Your answer:  ');

    if (evenOrNot(randomNumbers) === true && personAnswer === 'yes') {
      linterAnswer = ('Correct!');
    } else if (evenOrNot(randomNumbers) === false && personAnswer === 'no') {
      linterAnswer = ('Correct!');
    } else {
      console.log(`'${personAnswer}' is wrong answer ;(. Correct answer was '${Number(randomNumbers) % 2 === 0 ? 'yes' : 'no'}'.`);
      return console.log(`Let's try again, ${nameAnswer}!`);
    }

    if (linterAnswer !== 'Correct!') { matches = 0; }

    console.log(linterAnswer);
    matches += 1;
  }

  console.log(`Congratulations, ${nameAnswer}!`);
}
