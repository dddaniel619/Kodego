let result;

        const number1 = parseFloat(prompt('Number'));
        const operator = prompt('Operator');
        const number2 = parseFloat(prompt('Number'));
    
        switch(operator) {
          case '+':
          result = number1 + number2;
          console.log(`${number1} + ${number2} = ${result}`);
          break;
    
          case '-':
          result = number1 - number2;
          console.log(`${number1} - ${number2} = ${result}`);
          break;
    
          case '*':
          result = number1 * number2;
          console.log(`${number1} * ${number2} = ${result}`);
          break;
    
          case '/':
          result = number1 / number2;
          console.log(`${number1} / ${number2} = ${result}`);
          break;
    
          default:
          console.log('Invalid operator');
          break;
          
        }
        alert(result);