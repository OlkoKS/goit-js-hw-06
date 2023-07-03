const refs = {
    formEl: document.querySelector('form'),
    btnEl: document.querySelector('button'),
}

refs.formEl.addEventListener('submit', onBtnClick);

function onBtnClick(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
}
const resultObj = { email: email.value, password: password.value };
console.log(resultObj);
event.currentTarget.reset();
}