const refs = {
    decrementBtnEl: document.querySelector('[data-action="decrement"]'),
    valueEl: document.querySelector('#value'),
    incrementBtnEl: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

refs.decrementBtnEl.addEventListener('click', onDecreaseAmount);
refs.incrementBtnEl.addEventListener('click', onIncreaseAmount);


function onDecreaseAmount() {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
}

function onIncreaseAmount() {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
}
