// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueRef = document.querySelector('#value');

let counterValue = 0;

const btnIncrementRef = document.querySelector(
  '#counter button[data-action="increment"]',
);

btnIncrementRef.addEventListener('click', onIncrementClick);

function onIncrementClick(click) {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

const btnDecrementRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);

btnDecrementRef.addEventListener('click', onDecrementClick);

function onDecrementClick(click) {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
