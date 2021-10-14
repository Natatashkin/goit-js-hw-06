const input = document.querySelector("#name-input");
console.log(input);
const spanOutput = document.querySelector("#name-output");
console.log(spanOutput);

input.addEventListener("input", simbolInputHandler);

function simbolInputHandler(event) {
  spanOutput.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    spanOutput.textContent = "Anonymous";
    console.log("Это пустая строка");
  }
}
