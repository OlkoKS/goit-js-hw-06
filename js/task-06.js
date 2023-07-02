const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputCheck);

function onInputCheck() {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
    }
}
