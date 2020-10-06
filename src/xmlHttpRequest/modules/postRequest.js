import axios from 'axios';
import uuid from 'uniqid';

const name = document.querySelector('#name');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const website = document.querySelector('#website');

const button = document.querySelector('button[data-action="post"]');

export default async function postRequest(link) {
  try {
    button.textContent = 'Loading...';

    const response = await axios.post(link, {
      id: uuid(),
      name: name.value,
      username: username.value,
      email: email.value,
      address: {},
      phone: phone.value,
      website: website.value,
      company: {},
    });

    button.textContent = 'POST';

    alert(`Status: ${response.status}`);
  } catch (error) {
    button.textContent = 'POST';

    alert('Error! Try again');
  }
}
