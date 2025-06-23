import runGame from '../index.js'

const description = 'What is the result of the expression?'

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generateRound = () => {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomNumber(0, operators.length - 1)]

  let result
  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }

  const question = `${num1} ${operator} ${num2}`
  return [question, String(result)]
}

const runCalcGame = () => runGame(description, generateRound)

export default runCalcGame
