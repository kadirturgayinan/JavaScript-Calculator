// Prompt the user to enter the first number
var number1 = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var number2 = parseFloat(prompt("Enter the second number:"));

// Prompt the user to choose the operation
var operation = prompt("Choose the operation: +, -, *, /");

// Perform the selected operation

var result;

switch (operation) {
        
    case "+":
        
        // Addition
        result = number1 + number2;
        console.log("Sum: " + result);
        
        break;
        
    case "-":
        
        // Subtraction
        
        result = number1 - number2;
        console.log("Difference: " + result);
        
        break;
        
    case "*":
        
        // Multiplication
        
        result = number1 * number2;
        console.log("Product: " + result);
        
        break;
        
    case "/":
        
        // Division
        
        if (number2 === 0) {
            console.log("Error: Division by zero!");
            
        } else {
            result = number1 / number2;
            console.log("Quotient: " + result);
            
        }
        break;
        
    default:
        console.log("Invalid operation!");
}
