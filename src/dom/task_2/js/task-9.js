/**
 * Task - 9
 * @description: Create a Simple JS Carousel with N images
 * and two arrows for image control
 */

let imageIdx = 1;

function showImages(n) {
  const images = document.querySelectorAll('.images');
  const len = images.length;

  if (n > len) {
    imageIdx = 1;
  }

  if (n < 1) {
    imageIdx = len;
  }

  Object.keys(images)
    .forEach((item) => images[item].setAttribute('style', 'display: none'));

  images[imageIdx - 1].setAttribute('style', 'display: block');
}

function plusImage(n) {
  showImages(imageIdx += n);
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

showImages(imageIdx);

document.querySelector('.content__task-9')
  .addEventListener('click', clickHandler);
