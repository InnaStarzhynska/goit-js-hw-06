const inputSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputSizeControl.addEventListener('input', () => {
    const newFontSize = String(inputSizeControl.value);
    text.style.fontSize = `${newFontSize}px`;
})