import axios from 'axios';

const id = document.querySelector('#id-user');

const button = document.querySelector('button[data-action="delete"]');

export default async function deleteRequest(link) {
  try {
    button.textContent = 'Deleting...';

    const response = await axios.delete(`${link}/${id.value}`);

    button.textContent = 'DELETE';

    alert(`Status: ${response.status}`);
  } catch (error) {
    button.textContent = 'DELETE';

    alert('Error! Try again');
  }
}
