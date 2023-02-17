const inputUserName = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

inputUserName.addEventListener('input', () => {
    if (inputUserName.value === '') {
        userName.textContent = 'Anonymous';
    } else {
        userName.textContent = inputUserName.value
    }
});

