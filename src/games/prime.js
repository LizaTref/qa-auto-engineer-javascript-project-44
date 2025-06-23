import runGame from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

// Предикат для проверки простого числа
const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const generateRound = () => {
  const number = getRandomNumber(2, 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [String(number), correctAnswer]
}

const runPrimeGame = () => runGame(description, generateRound)

export default runPrimeGame
