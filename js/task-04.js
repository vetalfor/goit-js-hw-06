const refs = {
    decrementButton: document.querySelector('[data-action="decrement"]'),
    incrementButton: document.querySelector('[data-action="increment"]'),
    valueSpan: document.querySelector('#value'),
}
let counterValue = 0;
function updateCounterUI() {
    refs.valueSpan.textContent = counterValue;
};
refs.decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateCounterUI();
});
refs.incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateCounterUI();
});
updateCounterUI();