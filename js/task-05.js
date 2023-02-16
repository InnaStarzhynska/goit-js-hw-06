const inputUserName = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

inputUserName.addEventListener('input', () => {
    userName.textContent = inputUserName.value;
});

