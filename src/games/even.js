import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const MIN_NUMBER = 1
const MAX_NUMBER = 100

export const isEvenAnswer = number => (number % 2 === 0 ? 'yes' : 'no')

const generateRound = () => {
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER)
  const correctAnswer = isEvenAnswer(number)
  return [String(number), correctAnswer]
}

const runEvenGame = () => runGame(description, generateRound)

export default runEvenGame
