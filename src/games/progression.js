import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'What number is missing in the progression?'

const START_MIN = 1
const START_MAX = 10

const STEP_MIN = 1
const STEP_MAX = 5

const PROGRESSION_LENGTH = 10

export const generateProgression = (startNumber, stepNumber, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    const number = startNumber + i * stepNumber
    progression.push(number)
  }
  return progression
}

const generateRound = () => {
  const startNumber = getRandomNumber(START_MIN, START_MAX)
  const stepNumber = getRandomNumber(STEP_MIN, STEP_MAX)
  const length = PROGRESSION_LENGTH

  const progression = generateProgression(startNumber, stepNumber, length)
  const hiddenIndex = getRandomNumber(0, progression.length - 1)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return [question, correctAnswer]
}

const runProgressionGame = () => runGame(description, generateRound)

export default runProgressionGame
