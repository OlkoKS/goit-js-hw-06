const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
}

const { inputEl, outputEl } = refs;

inputEl.addEventListener('input', onNameInput);

function onNameInput() {
    outputEl.textContent = inputEl.value;
    if (!inputEl.value) {
        outputEl.textContent = 'Anonymous';
    }
}