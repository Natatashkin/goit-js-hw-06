const form = document.querySelector("form.login-form");
console.log(form);

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email === "" || password === "") {
    alert("Все поля формы должны быть заполнены!");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  form.reset();
}
