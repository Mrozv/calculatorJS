const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
import calculate from "./calculate.js";

function program() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.value) {
        case "back":
          display.textContent = display.textContent.slice(0, -1);
          break;
        case "divide":
          display.textContent += "/";
          break;
        case "multiply":
          display.textContent += "*";
          break;
        default:
          break;
      }
      if (
        button.classList.contains("number") ||
        button.classList.contains("operation") ||
        button.classList.contains("dot")
      ) {
        display.textContent += button.textContent;
      }
      if (button.textContent === "C") {
        display.textContent = "";
      }
      if (button.textContent === "=") {
        display.textContent = calculate(display);
      }
    });
  });
}

program();
