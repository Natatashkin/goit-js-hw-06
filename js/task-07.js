const fontSizeSwithcer = document.querySelector("#font-size-control");
const outputSize = document.querySelector("#text");

fontSizeSwithcer.addEventListener("input", hamdleFontSize);

function hamdleFontSize(event) {
  const switcher = event.currentTarget;

  outputSize.style.fontSize = `${switcher.value}px`;
}
