const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector("#value");

// var1
// increment.addEventListener("click", handleClick);
// decrement.addEventListener("click", handleClick);

// function handleClick(event) {
//   if (event.currentTarget.dataset.action === "increment") {
//     counterValue.textContent = Number(counterValue.textContent) + 1;
//     return;
//   }
//   if (event.currentTarget.dataset.action === "decrement") {
//     if (Number(counterValue.textContent) === 0) {
//       return;
//     }
//     counterValue.textContent = Number(counterValue.textContent) - 1;
//     return;
//   }
// }

// var 2
increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click", handleDecrement);

function convertToNumber() {
  const value = Number(counterValue.textContent);
  return value;
}

function handleIncrement() {
  const value = convertToNumber();
  counterValue.textContent = value + 1;
}

function handleDecrement() {
  const value = convertToNumber();
  if (value === 0) {
    return;
  }
  counterValue.textContent = value - 1;
}
