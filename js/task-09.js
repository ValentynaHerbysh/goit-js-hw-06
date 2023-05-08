function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const textColor = document.querySelector('.color'); 
const changeColorEl = document.querySelector('.change-color');

changeColorEl.addEventListener('click', changeColor);

function changeColor(event) {
  const color = getRandomHexColor();
  textColor.textContent = color;
  document.body.style.backgroundColor = color;
}
