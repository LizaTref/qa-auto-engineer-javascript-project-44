import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const DESCRIPTION = 'What number is missing in the progression?'
const START_MIN = 1
const START_MAX = 10
const STEP_MIN = 1
const STEP_MAX = 5
const LENGTH = 10

export const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const start = getRandomNumber(START_MIN, START_MAX)
  const step = getRandomNumber(STEP_MIN, STEP_MAX)
  const progression = generateProgression(start, step, LENGTH)

  const hiddenIndex = getRandomNumber(0, LENGTH - 1)
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')
  return [question, correctAnswer]
}

const runProgressionGame = () => runGame(DESCRIPTION, generateRound)

export default runProgressionGame
