/**
 * Task-3
 * @description: Crеate a function that gets the value of <input type="color">
 *   and sets the background of the body to this value
 */

function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

const colorPicker = document.querySelector('#task-3-input');

colorPicker.addEventListener('input', () => setBackgroundColor(colorPicker.value));
