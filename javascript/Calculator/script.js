

// function press(element) {
//     // getelement.remove()
//     document.getElementById("display").innerText +=element;
   




var displayDiv = document.querySelector("#display");
var currentInput = "";
var currentOperator = "";
var result = 0;

function press(digit) {
  if (currentInput === "0" && digit === "0") {
    return;
  }
  if (currentInput === "0" || currentInput === "Error") {
    currentInput = digit;
  } else {
    currentInput += digit;
  }
  displayDiv.innerText = currentInput;
}

function setOP(operator) {
  if (currentInput !== "" && currentOperator === "") {
    currentOperator = operator;
    result = parseFloat(currentInput);
    currentInput = "";
  }
}

function calculate() {
  if (currentInput !== "" && currentOperator !== "") {
    switch (currentOperator) {
      case "+":
        result += parseFloat(currentInput);
        break;
      case "-":
        result -= parseFloat(currentInput);
        break;
      case "*":
        result *= parseFloat(currentInput);
        break;
      case "/":
        if (currentInput === "0") {
          displayDiv.innerText = "Error";
          currentInput = "Error";
          return;
        }
        result /= parseFloat(currentInput);
        break;
    }
    displayDiv.innerText = result;
    currentInput = result.toString();
    currentOperator = "";
  }
}

function clr() {
  currentInput = "0";
  currentOperator = "";
  result = 0;
  displayDiv.innerText = "0";
}


































// function setOP(element) {
//     document.querySelector(".operator") =element;
// }




// function appendToResult(value) {
//     document.getElementById('result').value += value;
//   }
  
//   function calculate() {
//     var result = document.getElementById('result').value;
//     var calculatedResult = eval(result); // Using eval to evaluate the expression
//     document.getElementById('result').value = calculatedResult;
//   }
  