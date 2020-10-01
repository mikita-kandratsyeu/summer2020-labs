import { getRequest, postRequest, deleteRequest } from './modules';

const body = document.querySelector('body');
const colorPicker = document.querySelector('#color-picker');
const font = document.querySelector('#select-font');

const bg = localStorage.getItem('backgroundColor');
const fontStyle = localStorage.getItem('font');

if (bg) {
  body.style.backgroundColor = bg;
}

if (fontStyle) {
  font.value = fontStyle;

  body.style.fontFamily = fontStyle;
}

function clickHandler(e) {
  const { action } = e.target.dataset;

  switch (action) {
    case 'delete':
      deleteRequest('https://jsonplaceholder.typicode.com/users');
      break;
    case 'post':
      postRequest('https://jsonplaceholder.typicode.com/users');
      break;
    case 'albums':
      getRequest(
        'https://jsonplaceholder.typicode.com/users/1/albums',
        {
          id: 'id',
          title: 'title',
        },
      );
      break;
    case 'todos':
      getRequest(
        'https://jsonplaceholder.typicode.com/users/1/todos',
        {
          id: 'id',
          title: 'title',
          completed: 'completed',
        },
      );
      break;
    case 'posts':
      getRequest(
        'https://jsonplaceholder.typicode.com/users/1/posts',
        {
          id: 'id',
          title: 'title',
          body: 'body',
        },
      );
      break;
    default:
      console.log('Missed');
  }
}

document.querySelector('#form-post')
  .addEventListener('submit', (e) => e.preventDefault());

document.querySelector('#form-delete')
  .addEventListener('submit', (e) => e.preventDefault());

body.addEventListener('click', clickHandler);


colorPicker.addEventListener('input', (e) => {
  body.style.backgroundColor = e.target.value;

  localStorage.setItem('backgroundColor', e.target.value);
});

font.addEventListener('input', (e) => {
  body.style.fontFamily = e.target.value;

  localStorage.setItem('font', e.target.value);
});
