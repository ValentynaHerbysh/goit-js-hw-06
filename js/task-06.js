const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    const dataLength = event.target.value.trim().length;
    const currentValue = +input.dataset.length;
    console.log("currentValue:", currentValue);
    console.log("dataLength:", dataLength);
if (currentValue === dataLength) {
    input.classList.add("valid")
    input.classList.remove("invalid")
} else {
    input.classList.add("invalid")
    input.classList.remove("valid")
}


}