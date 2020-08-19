/**
 * Task -2
 * @description: Create a function that gets the value of <input type="text">
 *   ands prints its value to the console
 */

function getTextFromInput(input) {
  const container = document.querySelector('#task-2-container');

  container.innerHTML = input.value;

  console.log(input.value);
}

const input = document.querySelector('#task-2-input');

input.addEventListener('input', () => getTextFromInput(input));
