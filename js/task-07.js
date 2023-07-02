const inputEl = document.querySelector('#font-size-control');
const markupEl = document.querySelector('#text');

inputEl.addEventListener('input', onSizeTextChange);

function onSizeTextChange() {
    markupEl.style.fontSize = inputEl.value + "px";
}