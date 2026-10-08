import './style.css'

export function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

export function subtractNumbers(firstNumber, secondNumber) {
  return firstNumber - secondNumber
}

export function multiplyNumbers(firstNumber, secondNumber) {
  return firstNumber * secondNumber
}

export function divideNumbers(firstNumber, secondNumber) {
  return firstNumber / secondNumber
}

export function validateInputs(firstValue, secondValue, operation) {
  const firstNumber = Number(firstValue)
  const secondNumber = Number(secondValue)

  if (
    firstValue.trim() === '' ||
    secondValue.trim() === '' ||
    !Number.isFinite(firstNumber) ||
    !Number.isFinite(secondNumber)
  ) {
    return 'Please enter a valid number in both fields.'
  }

  if (operation === 'divide' && secondNumber === 0) {
    return 'Cannot divide by zero.'
  }

  return null
}

const app = typeof document === 'undefined' ? null : document.querySelector('#app')

if (app) {
  const firstNumberInput = app.querySelector('#first-number')
  const secondNumberInput = app.querySelector('#second-number')
  const result = app.querySelector('#result')
  const error = app.querySelector('#error')

  app.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      const operation = button.dataset.operation

      if (operation === 'reset') {
        firstNumberInput.value = ''
        secondNumberInput.value = ''
        result.textContent = ''
        error.textContent = ''
        return
      }

      error.textContent = ''
      result.textContent = ''

      const firstValue = firstNumberInput.value.trim()
      const secondValue = secondNumberInput.value.trim()
      const validationError = validateInputs(firstValue, secondValue, operation)

      if (validationError) {
        error.textContent = validationError
        return
      }

      const firstNumber = Number(firstValue)
      const secondNumber = Number(secondValue)

      let answer
      if (operation === 'add') answer = addNumbers(firstNumber, secondNumber)
      if (operation === 'subtract') answer = subtractNumbers(firstNumber, secondNumber)
      if (operation === 'multiply') answer = multiplyNumbers(firstNumber, secondNumber)
      if (operation === 'divide') answer = divideNumbers(firstNumber, secondNumber)

      result.textContent = String(answer)
    })
  })
}