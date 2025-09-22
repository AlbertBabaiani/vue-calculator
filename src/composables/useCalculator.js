import { ref, computed } from 'vue'

export function useCalculator() {
  const currentInput = ref('0')
  const previousInput = ref(null)
  const operator = ref(null)
  const operatorClicked = ref(false)

  const formattedDisplay = computed(() => {
    if (isNaN(parseFloat(currentInput.value))) {
      return currentInput.value
    }
    return parseFloat(currentInput.value).toLocaleString('en-US', {
      maximumFractionDigits: 10
    })
  })

  const handleKeyPress = (key) => {
    if (/[0-9]/.test(key)) {
      appendNumber(key)
    } else if (key === '.') {
      appendDecimal()
    } else if (['+', '-', '*', '/'].includes(key)) {
      setOperator(key)
    } else if (key === '=') {
      calculate()
    } else if (key === 'DEL') {
      deleteLast()
    } else if (key === 'RESET') {
      reset()
    }
  }

  const appendNumber = (number) => {
    if (currentInput.value === '0' || operatorClicked.value) {
      currentInput.value = number
      operatorClicked.value = false
    } else if (currentInput.value.length < 15) {
      currentInput.value += number
    }
  }

  const appendDecimal = () => {
    if (!currentInput.value.includes('.')) {
      currentInput.value += '.'
    }
  }

  const setOperator = (op) => {
    if (previousInput.value !== null && !operatorClicked.value) {
      calculate()
    }
    previousInput.value = currentInput.value
    operator.value = op
    operatorClicked.value = true
  }

  const calculate = () => {
    if (previousInput.value === null || operator.value === null) return

    const prev = parseFloat(previousInput.value)
    const current = parseFloat(currentInput.value)
    let result

    switch (operator.value) {
      case '+': result = prev + current; break
      case '-': result = prev - current; break
      case '*': result = prev * current; break
      case '/':
        result = current === 0 ? 'Error' : prev / current
        break
    }

    currentInput.value = String(result)
    previousInput.value = null
    operator.value = null
    operatorClicked.value = false
  }

  const deleteLast = () => {
    currentInput.value = currentInput.value.length === 1 ? '0' : currentInput.value.slice(0, -1)
  }

  const reset = () => {
    currentInput.value = '0'
    previousInput.value = null
    operator.value = null
    operatorClicked.value = false
  }

  return {
    formattedDisplay,
    handleKeyPress
  }
}