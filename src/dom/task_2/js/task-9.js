/**
 * Task - 9
 * @description: Create a Simple JS Carousel with N images
 * and two arrows for image control
 */

const store = [
  {
    url: 'https://fastly.4sqi.net/img/general/699x268/R69VKDw1QoGZ2mY8EjkhvYsMbSGrdagnbh51KuHa89s.jpg',
    description: 'Twin Peaks Summit',
  },
  {
    url: 'https://fastly.4sqi.net/img/general/699x268/52455040_uNyoKVakKKSbYe_ePzw_7p56Ja3FK_PpXdnKa18QlT4.jpg',
    description: 'Mission Dolores Park',
  },
  {
    url: 'https://fastly.4sqi.net/img/general/699x268/186753_bXWfu1hl2seDr5TizbL0X-3EuuNWkKLKoDnmJ_YgvwE.jpg',
    description: 'Lands End',
  },
  {
    url: 'https://fastly.4sqi.net/img/general/699x268/35447144_dvTiCz6KF2nGmZpVdGH5I5VgV-HHOP90X1ptwA2_J_M.jpg',
    description: 'Alamo Square',
  },
];

const counter = document.querySelector('.counter');
const image = document.querySelector('.image');
const descriptionElement = document.querySelector('.description');

let idx = 0;

function showImages(n) {
  const len = store.length;

  if (n > len - 1) {
    idx = 0;
  }

  if (n < 0) {
    idx = len;
  }

  // Object.keys(images)
  //   .forEach((item) => images[item].setAttribute('style', 'display: none'));
  //
  // images[imageIdx - 1].setAttribute('style', 'display: block');

  const { url, description } = store[idx];

  counter.innerHTML = `${idx + 1} / ${len}`;
  image.setAttribute('src', url);
  descriptionElement.innerHTML = description;
}

function plusImage(n) {
  showImages(idx += n);
}

function clickHandler(e) {
  const { action } = e.target.dataset;

  if (action === 'prev') {
    plusImage(-1);
  }

  if (action === 'next') {
    plusImage(1);
  }
}

showImages(idx);

document.querySelector('.content__task-9')
  .addEventListener('click', clickHandler);
