const inputText = document.querySelector('#validation-input');
const requiredTextLength = Number(inputText.dataset.length);

console.log(requiredTextLength);

inputText.addEventListener('blur', () => {
    if (inputText.value.length === requiredTextLength) {
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    } else {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    }     
});