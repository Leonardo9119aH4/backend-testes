const inputField = document.getElementById('input');
const outputDiv = document.getElementById('output');

// Funcionalidade principal do terminal
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Captura o comando do usuário
        const command = inputField.value.trim();
        inputField.value = '';  // Limpa o campo de entrada
        processCommand(command);
    }
});

// Função para processar comandos
function processCommand(command) {
    if (command === '') {
        return;
    }

    appendToOutput(`> ${command}`);

    // Simulando comandos
    switch(command.toLowerCase()) {
        case 'hello':
            appendToOutput('Hello! How can I assist you today?');
            break;
        case 'date':
            appendToOutput(`Current Date: ${new Date().toLocaleString()}`);
            break;
        case 'add':
            promptInput("Enter two numbers separated by a comma (e.g., 5, 10):", (input) => {
                const numbers = input.split(',').map(Number);
                if (numbers.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
                    const result = numbers[0] + numbers[1];
                    appendToOutput(`Result: ${result}`);
                } else {
                    appendToOutput('Invalid input. Please enter two numbers separated by a comma.');
                }
            });
            break;
        case 'clear':
            clearOutput();
            break;
        case 'help':
            appendToOutput("Available commands:\n - hello\n - date\n - add\n - clear\n - help");
            break;
        default:
            appendToOutput(`Command not found: ${command}`);
            break;
    }
}

// Função para adicionar texto ao output
function appendToOutput(text) {
    outputDiv.innerHTML += `${text}\n`;
    outputDiv.scrollTop = outputDiv.scrollHeight;  // Rolagem automática para o final
}

// Função para limpar o output
function clearOutput() {
    outputDiv.innerHTML = '';
}

// Função para simular a entrada via prompt
function promptInput(message, callback) {
    const userInput = prompt(message);
    if (userInput !== null) {
        callback(userInput);
    }
}

// Inicializa o terminal com uma mensagem de boas-vindas
appendToOutput('JavaScript Terminal Emulator\nType "help" for a list of commands.');

