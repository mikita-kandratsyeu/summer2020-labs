/**
 * Task - 5
 * @description: Write a script that creates 5 "div" elements and moves them in circular
 * path with interval of 100 milliseconds
 */

const node = document.querySelector('.content__task-5');

function generate() {
  for (let i = 0; i < 5; i += 1) {
    const div = document.createElement('div');

    node.appendChild(div);
  }

  const divs = node.getElementsByTagName('div');
  const delta = (Math.PI * 2) / divs.length;
  let angle = 0;

  for (let i = 0; i < divs.length; i += 1) {
    divs[i].style.top = `${150 * Math.sin(angle) + 250}px`;
    divs[i].style.left = `${150 * Math.cos(angle) + 250}px`;

    angle += delta;
  }
}

function move() {
  const timer = setInterval(() => {
    let time = (Date.now() - 5) * 0.0050;

    const divs = node.getElementsByTagName('div');

    for (let i = 0; i < divs.length; i += 1) {
      divs[i].style.top = `${150 * Math.sin(time) + 250}px`;
      divs[i].style.left = `${150 * Math.cos(time) + 250}px`;
      time += 100;
    }

    clearInterval(timer);

    move();
  }, 15);
}

generate();

move();
