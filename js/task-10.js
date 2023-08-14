function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const resf = {
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
  amountInput: document.querySelector('input[type="number"]')
};

resf.createButton.addEventListener('click', () => {
  const amount = Number(resf.amountInput.value);
  const step = Number(resf.amountInput.step);
  const minValue = Number(resf.amountInput.min);
  const maxValue = Number(resf.amountInput.max); 

  if (amount < minValue || amount > maxValue) {
    alert(`Значення не може бути меньше від ${minValue} та більше за ${maxValue}`);
    return;
  }

  createBoxes(amount, step);
});

resf.destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount, step) {
  const boxes = [];

  for (let i = 0; i < amount; i += step) {
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
  resf.amountInput.value = '';
}
