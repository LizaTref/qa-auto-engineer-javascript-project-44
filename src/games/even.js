import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".'
const MIN_NUMBER = 1
const MAX_NUMBER = 100

const isEven = number => number % 2 === 0

const generateRound = () => {
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [String(number), correctAnswer]
}

const runEvenGame = () => runGame(DESCRIPTION, generateRound)

export default runEvenGame
