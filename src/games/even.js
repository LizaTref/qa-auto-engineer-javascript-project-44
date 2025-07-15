import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return [number.toString(), correctAnswer]
}

const runEvenGame = () => runGame(description, generateRound)

export default runEvenGame
