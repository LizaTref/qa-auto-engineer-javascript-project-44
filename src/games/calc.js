import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'What is the result of the expression?'

const MIN_NUMBER = 1
const MAX_NUMBER = 50
const OPERATORS = ['+', '-', '*']

export const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const number1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER)
  const number2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER)
  const operator = OPERATORS[getRandomNumber(0, OPERATORS.length - 1)]

  const question = `${number1} ${operator} ${number2}`
  const result = calc(number1, number2, operator)
  return [question, String(result)]
}

const runCalcGame = () => runGame(description, generateRound)

export default runCalcGame
