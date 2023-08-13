function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} const resf = {
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
}
resf.createButton.addEventListener('click', () => {
  const amount = Number(document.querySelector('input').value);
  createBoxes(amount);
});
resf.destroyButton.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box');
    boxes.push(box);
  }

  resf.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  resf.boxesContainer.innerHTML = '';
};