import { getRequest, postRequest, deleteRequest } from './modules';

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


document.querySelector('body')
  .addEventListener('click', clickHandler);
