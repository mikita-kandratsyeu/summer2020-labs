/**
 * Task - 4
 * @description:  Write a script that creates a number of "div" elements.
 * Each "div" element must have the following:
 * - Random "width" and "height" between "20px" and "100px"
 * - Random "background-color"
 * - Random "color"
 * - Random "position" on the screen
 * - A "strong" element with text "div" inside the "div"
 * - Random "border-radius"
 * - Random "border-color"
 * - Random "border-width" between "1px" and "20px"
 */

function generateRandom(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';

  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

const node = document.querySelector('.content__task-4');

function createDivElements(n) {
  node.innerHTML = '';

  for (let i = 0; i < n; i += 1) {
    const div = document.createElement('div');

    const w = generateRandom(20, 100);
    const h = generateRandom(20, 100);

    div.style.width = `${w}px`;
    div.style.height = `${h}px`;
    div.style.backgroundColor = generateRandomColor();
    div.style.top = `${generateRandom(0, node.clientHeight - h)}px`;
    div.style.left = `${generateRandom(0, node.clientWidth - w)}px`;
    div.style.borderRadius = `${generateRandom(0, 50)}px`;
    div.style.borderColor = generateRandomColor();
    div.style.borderWidth = `${generateRandom(1, 20)}px`;

    const strong = document.createElement('strong');
    strong.innerHTML = 'div';

    div.append(strong);
    node.append(div);
  }
}

const range = document.querySelector('#task-4-range');

range.addEventListener('input', () => createDivElements(range.value));
