function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector('.color'); 
const changeColorEl = document.querySelector('.change-color');

changeColorEl.addEventListener('click', changeColor);

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = document.body.getAttribute('backgroundColor');
}
