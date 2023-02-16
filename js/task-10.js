function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const collection = [];
  for (let i = 0; i < amount; i += 1) {
    collection.push('<div></div>');
  }
  boxes.insertAdjacentHTML('afterbegin', collection.join(''));
};

function setBoxesSize() {
  boxes.querySelectorAll('div').forEach((child, index) => {
     child.style.width = `${30 + (index * 10)}px`;
    child.style.height = `${30 + (index * 10)}px`;
    child.style.backgroundColor = getRandomHexColor();
  })
}

btnCreate.addEventListener('click', () => {
  const boxesAmount = input.value;
  createBoxes(boxesAmount);
  setBoxesSize();
  input.value = '';
});


btnDestroy.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  boxes.querySelectorAll('div').forEach(child => child.remove());
}

