/**
 * Task - 6
 * @description:  Create a "textarea" and two "input"s with "type="color":
 *  - Make the font "color" of the text area as the value of the first color "input"
 *  - Make the "background-color" of the "textarea" as the value of the second "input"
 */

const textArea = document.querySelector('#task-6-text');

function setColor(value) {
  textArea.style.color = value;
}

function setBackgroundColor(value) {
  textArea.style.backgroundColor = value;
}

const colorPicker1 = document.querySelector('#task-6-color-1');
const colorPicker2 = document.querySelector('#task-6-color-2');

colorPicker1.addEventListener('input', () => setColor(colorPicker1.value));
colorPicker2.addEventListener('input', () => setBackgroundColor(colorPicker2.value));
