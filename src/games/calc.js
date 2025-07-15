import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'What is the result of the expression?'

const generateRound = () => {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomNumber(0, operators.length - 1)]

  const result = (() => {
    switch (operator) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      default:
        throw new Error(`Unknown operator: ${operator}`)
    }
  })()

  const question = `${num1} ${operator} ${num2}`
  return [question, String(result)]
}

const runCalcGame = () => runGame(description, generateRound)

export default runCalcGame
