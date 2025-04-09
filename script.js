
const chatOutput = document.getElementById('chat-output');
const userMessageInput = document.getElementById('user-message');

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}: </strong>${message}`;
  chatOutput.appendChild(messageElement);
  chatOutput.scrollTop = chatOutput.scrollHeight; 
}

function sendMessage() {
  const userMessage = userMessageInput.value.trim();
  if (userMessage !== '') {
    appendMessage('Annu', userMessage);
    userMessageInput.value = '';

    
    try {
      let result = math.evaluate(userMessage);

     
      if (typeof result === 'number' && result % 1 !== 0) {
        result = result.toFixed(2);
      }

      appendMessage('Bot', result);
    } catch (error) {
      let errorMessage = 'Bot: Error evaluating the expression.';

     
      if (error instanceof SyntaxError) {
        errorMessage = 'Bot: Invalid expression. Please check your input.';
      } else if (error instanceof TypeError) {
        errorMessage = 'Bot: Invalid math operation. Please check your input.';
      }

      appendMessage('Bot', errorMessage);
    }
  }
}