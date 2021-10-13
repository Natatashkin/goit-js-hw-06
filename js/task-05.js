const input = document.querySelector("#name-input");
console.log(input);
const span = document.querySelector("#name-output");
console.log(span);

document.addEventListener("keydown", (event) => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", (event) => {
  console.log("Keyup: ", event);
});
