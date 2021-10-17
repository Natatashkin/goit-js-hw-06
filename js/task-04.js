const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

// var 4 c этим решением я не согласна, так мы не получаем значение спана, прописанное в html, и если руками в дкевтулзах заменить 0 на 25, счётчик продолжает считать от 0.

increment.addEventListener('click', handleIncrement);
decrement.addEventListener('click', handleDecrement);

let number = 0;

function handleIncrement() {
  counterValue.textContent = ++number;
}

function handleDecrement() {
  counterValue.textContent = --number;
}

// var 3 с переменной как просил ментор, но второй делает тоже самое с функцией вместо переменной. я проверяла

// increment.addEventListener('click', handleIncrement);
// decrement.addEventListener('click', handleDecrement);

// function handleIncrement() {
//   const value = Number(counterValue.textContent);
//   counterValue.textContent = value + 1;
// }

// function handleDecrement() {
//   const value = Number(counterValue.textContent);
//   counterValue.textContent = value - 1;
// }

// ===============================================================

// Вспомогательная функция для перевода строки в число в вариантах решения 2 и 3

// function convertToNumber() {
//   const value = Number(counterValue.textContent);
//   return value;
// }

// ================================================================

// var 2 - ну или двумя ))))
// increment.addEventListener('click', handleIncrement);
// decrement.addEventListener('click', handleDecrement);

// function handleIncrement() {
//   const value = convertToNumber();
//   counterValue.textContent = value + 1;
// }

// function handleDecrement() {
//   const value = convertToNumber();
//   counterValue.textContent = value - 1;
// }

// ================================================================
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
