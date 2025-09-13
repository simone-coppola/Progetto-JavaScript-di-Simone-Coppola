const container = document.querySelector('.container');

const title = document.createElement('h1');
title.textContent = 'Counter';
container.appendChild(title);

const valueCounter = document.createElement('div');
valueCounter.textContent = '0';
valueCounter.classList.add('valueCounter');
container.appendChild(valueCounter);

const decrementButton = document.createElement('button');
decrementButton.textContent = '-';
decrementButton.classList.add('decrementButton');
container.appendChild(decrementButton);

const incrementButton = document.createElement('button');
incrementButton.textContent = '+';
incrementButton.classList.add('incrementButton');
container.appendChild(incrementButton);

let counter = 0;

decrementButton.addEventListener('click', () => {
    counter--;
    valueCounter.textContent = counter;
});

incrementButton.addEventListener('click', () => {
    counter++;
    valueCounter.textContent = counter;
});