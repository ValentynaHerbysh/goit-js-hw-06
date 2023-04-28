const fontSizeControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

fontSizeControl.addEventListener('input', (event) => {
    fontSizeControl.value === textSize.value;
textSize.style.fontSize = `${fontSizeControl.value}px`;
});

