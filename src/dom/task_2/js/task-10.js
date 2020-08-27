/**
 * Task - 10
 * @description:  Create a TODO list with the following UI controls:
 * - Form input for new Item
 * - Button for adding the new Item
 * - Button for deleting some item
 * - "Show all items" and "Hide item" Buttons
 */

const list = document.querySelector('.list');

let idx = 0;

function addItem() {
  const value = document.querySelector('input[type="text"]');

  if (!value.value.length) {
    return;
  }

  const li = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');

  const id = `item-${idx}`;

  input.type = 'checkbox';
  input.id = id;
  label.htmlFor = id;

  label.appendChild(document.createTextNode(`${value.value}`));

  li.appendChild(input);
  li.appendChild(label);

  list.appendChild(li);

  idx += 1;
}

function removeItems() {
  const inputs = list.getElementsByTagName('input');
  const items = list.getElementsByTagName('li');

  const data = [];

  Object.keys(inputs)
    .forEach((key) => {
      if (inputs[key].checked) {
        data.push(items[key]);
      }
    });

  data.forEach((item) => item.remove());
}

function hideItems() {
  const inputs = list.getElementsByTagName('input');
  const items = list.getElementsByTagName('li');

  const data = [];

  Object.keys(inputs)
    .forEach((key) => {
      if (inputs[key].checked) {
        data.push(items[key]);
      }
    });

  data.forEach((item) => item.setAttribute('style', 'display: none'));
}

function showAllItems() {
  const items = list.getElementsByTagName('li');

  const data = [];

  Object.keys(items)
    .forEach((key) => {
      if (items[key].style.display === 'none') {
        data.push(items[key]);
      }
    });

  data.forEach((item) => item.setAttribute('style', 'display: block'));
}

const actions = {
  add: addItem,
  remove: removeItems,
  hide: hideItems,
  showAll: showAllItems,
};

function clickHandler(e) {
  const { action } = e.target.dataset;

  if (action) {
    actions[action]();
  }
}

document.querySelector('.content__task-10')
  .addEventListener('click', clickHandler);
