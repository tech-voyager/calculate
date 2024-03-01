const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculator() {
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
      rl.question('Enter the operation (+, -, *, /): ', (operator) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (isNaN(num1) || isNaN(num2)) {
          console.log('Invalid input. Please enter valid numbers.');
          rl.close();
          return;
        }

        let result;
        switch (operator) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            if (num2 === 0) {
              console.log('Error: Cannot divide by zero');
              rl.close();
              return;
            }
            result = num1 / num2;
            break;
          default:
            console.log('Invalid operation. Please enter a valid operator (+, -, *, /)');
            rl.close();
            return;
        }

        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
}

calculator();
