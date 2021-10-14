const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector("#value");

//  var1 - все можно сделать одним обработчиком
// increment.addEventListener("click", handleClick);
// decrement.addEventListener("click", handleClick);

// function handleClick(event) {
//   const target = event.currentTarget.dataset.action;
//   const value = convertToNumber();
//   if (target === "increment") {
//     counterValue.textContent = value + 1;
//     return;
//   }
//   if (target === "decrement") {
//     if (value === 0) {
//       return;
//     }
//     counterValue.textContent = value - 1;
//     return;
//   }
// }

// Вспомогательная функция для перевода строки в число
function convertToNumber() {
  const value = Number(counterValue.textContent);
  return value;
}

// var 2 - ну или двумя ))))
increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click", handleDecrement);

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
