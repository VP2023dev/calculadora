function appendToScreen(value) {
    document.getElementById('screen').value += value;
  }
  
  function clearScreen() {
    document.getElementById('screen').value = '';
  }
  
  function calculate() {
    const expression = document.getElementById('screen').value;
    try {
      const result = eval(expression);
      document.getElementById('screen').value = result;
    } catch (error) {
      document.getElementById('screen').value = 'Error';
    }
  }
  // Adicionando funcionalidade de entrada de teclado, incluindo a tecla Backspace
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
      appendToScreen(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearScreen();
    } else if (key === 'Backspace') {
      removeFromScreen();
    }
  });
  
  function removeFromScreen() {
    const screenValue = document.getElementById('screen').value;
    document.getElementById('screen').value = screenValue.slice(0, -1);
  }
  
  
  // Adicionando funcionalidade de entrada de teclado
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
      appendToScreen(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearScreen();
    }
  });
  
