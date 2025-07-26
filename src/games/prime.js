import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const MIN_NUMBER = -100
const MAX_NUMBER = 100

export const isPrime = (number) => {
  if (number < 2) return false

  const maxDivisor = Math.sqrt(number)

  for (let i = 2; i <= maxDivisor; i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const generateRound = () => {
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [String(number), correctAnswer]
}

const runPrimeGame = () => runGame(description, generateRound)

export default runPrimeGame
