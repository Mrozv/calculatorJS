export default function calculate(display) {
  let operation = display.textContent;
  let result;

  try {
    result = eval(operation);
  } catch (e) {
    if (e instanceof SyntaxError) {
      handleError(display);
    }
  }
  if (typeof result === "number") {
    return result;
  } else {
    handleError(display);
  }
}

function handleError(display) {
  display.classList.add("error");
  setTimeout(() => {
    display.classList.remove("error");
  }, 500);
}
