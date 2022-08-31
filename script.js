var buttons = document.getElementsByTagName("button");
var inputText = "";
var outputText = "";
var operatorsArray = [];
var operantsArray = [];
var isLastOperator = true;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", click);
}

function click(event) {
  calculate(
    event.target.innerText,
    event.target.classList.contains("action-button")
  );
  display();
}

function calculate(input, isOperator) {
  if (input === "=") {
    if (!isLastOperator) calculateResult();
    return;
  }
  if (isOperator) {
    if (isLastOperator) return;
    operatorsArray.push(input);
  } else {
    if (isLastOperator) {
      operantsArray.push(input);
    } else {
      if (
        input === "." &&
        operantsArray[operantsArray.length - 1].includes(".")
      )
        return;
      operantsArray[operantsArray.length - 1] += input;
    }
  }
  isLastOperator = isOperator;
  inputText += input;
}

function calculateResult() {
  console.log(operatorsArray, operantsArray);
  console.log("Calculate");
}

function display() {
  getByClass("question").innerHTML = inputText || 0;
  getByClass("answer").innerHTML = outputText || 0;
}

function getByClass(className) {
  return document.getElementsByClassName(className)[0];
}
