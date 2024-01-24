let displayValue = '';
let operator = '';
let firstOperand = '';
let mode = 'normal';
let darkmode = false;

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  operator = op;
  firstOperand = displayValue;
  displayValue = '';
  updateDisplay();
}

function calculate() {
  let result;
  const secondOperand = displayValue;

  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }

  displayValue = result.toString();
  updateDisplay();
}

function clearAll() {
  displayValue = '';
  operator = '';
  firstOperand = '';
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function toggleMode() {
  mode = mode === 'normal' ? 'scientific' : 'normal';
  // Implement mode-specific changes if needed
}

function calculatePercentage() {
    if (displayValue !== '') {
      const percentageValue = parseFloat(displayValue) / 100;
      displayValue = percentageValue.toString();
      updateDisplay();
    }
  }
  function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
   }
   
  

// You can customize this calculator further based on your requirements and design preferences.
