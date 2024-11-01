const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
// console.log(screenDisplay);
// console.log(buttons);

function calculate(button) {
  console.log("clicked", button);
}
buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
