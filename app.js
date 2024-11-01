const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
let calculation = [];
let accumalitiveCalculation;

function calculate(button) {
  const value = button.textContent;

  if (value === "CLEAR") {
    // Reset calculation and display
    calculation = [];
    accumalitiveCalculation = ""; // Reset accumulative calculation
    screenDisplay.textContent = "0";
  } else if (value === "=") {
    // Only evaluate if there's something to calculate
    if (calculation.length > 0) {
      accumalitiveCalculation = calculation.join("");
      try {
        // Evaluate and display result
        const result = eval(accumalitiveCalculation);
        screenDisplay.textContent = result;
      } catch (error) {
        screenDisplay.textContent = "Error"; // Handle invalid expressions
      }
      // Reset calculation for a new calculation
      calculation = [];
      accumalitiveCalculation = ""; // Clear accumulated calculation
    }
  } else {
    // If there was a previous calculation, clear the current input
    if (screenDisplay.textContent === "0" || accumalitiveCalculation === "") {
      calculation = []; // Start fresh
      screenDisplay.textContent = ""; // Clear display
    }

    // Add value to calculation
    calculation.push(value);
    accumalitiveCalculation = calculation.join("");
    screenDisplay.textContent = accumalitiveCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
