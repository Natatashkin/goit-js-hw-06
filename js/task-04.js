// const increment = document.querySelector('button[data-action="increment"]');
// const decrement = document.querySelector('button[data-action="decrement"]');
// const number = document.querySelector('#value');

// increment.addEventListener('click', handleIncrement);
// decrement.addEventListener('click', handleDecrement);

// let counterValue = 0;

// function handleIncrement() {
//   number.textContent = ++counterValue;
// }

// function handleDecrement() {
//   number.textContent = --counterValue;
// }

const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

btnDecrement.addEventListener('click', function () {
  //   console.log(-1);
  counter.decrement();
  valueEl.textContent = counter.counterValue;
});

btnIncrement.addEventListener('click', function () {
  //   console.log(+1);
  counter.increment();
  valueEl.textContent = counter.counterValue;
});
