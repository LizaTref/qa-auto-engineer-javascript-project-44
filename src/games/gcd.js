import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'

const MIN_NUMBER = 1
const MAX_NUMBER = 100

export const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1
  }
  return getGcd(number2, number1 % number2)
}

const generateRound = () => {
  const number1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER)
  const number2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER)
  const question = `${number1} ${number2}`
  const correctAnswer = String(getGcd(number1, number2))
  return [question, correctAnswer]
}

const runGcdGame = () => runGame(description, generateRound)

export default runGcdGame
