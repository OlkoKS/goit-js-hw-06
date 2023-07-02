const refs = {
  bodyEl: document.querySelector('body'),
  btnEl: document.querySelector('.change-color'),
  colorEl: document.querySelector('.color'),
};

const { bodyEl, btnEl, colorEl } = refs;

btnEl.addEventListener('click', onBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnClick() {
    const newColor = getRandomHexColor();
    bodyEl.style.backgroundColor = newColor;
    colorEl.textContent = newColor;
}
