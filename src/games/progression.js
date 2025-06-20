import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const number = start + i * step;
    progression.push(number);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const length = 10;

  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  const questionParts = [];
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hiddenIndex) {
      questionParts.push('..');
    }
    else {
      questionParts.push(String(progression[i]));
    }
  }

  const question = questionParts.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => runGame(description, generateRound);

export default runProgressionGame;
