/**
 * Task - 1
 * @description: Write a script that selects all the div nodes that are
 * directly inside other div elements:
 * 1. Create a function using querySelectorAll()
 * 2. Create a function using getElementsByTagName()
 */

function viaSelectorAll() {
  const items = document.querySelectorAll('div > div');

  Object.keys(items)
    .forEach((item) => items[item].classList.toggle('border-white'));
}

function viaElementsByTagName() {
  const divs = document.getElementsByTagName('div');

  Object.keys(divs)
    .forEach((item) => {
      if (divs[item].parentNode.tagName === 'DIV') {
        divs[item].classList.toggle('border-lightblue');
      }
    });
}

document.querySelector('#task-1-btn-1')
  .addEventListener('click', viaSelectorAll);

document.querySelector('#task-1-btn-2')
  .addEventListener('click', viaElementsByTagName);
