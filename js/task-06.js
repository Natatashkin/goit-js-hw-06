const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", onInputValid);
input.addEventListener("focus", onFocus);

// Обработчик добавлен чтобы не перегружать страницу
function onFocus(event) {
  const classList = event.currentTarget.classList;
  if (classList.length > 0) {
    classList.remove(classList.value);
  }
}

// Решение задачи
function onInputValid(event) {
  const targetInput = event.currentTarget;
  const targetInputLength = targetInput.value.length;
  const validation = Number(targetInput.dataset.length);

  if (targetInputLength !== validation) {
    return targetInput.classList.add("invalid");
  }
  return targetInput.classList.add("valid");
}
