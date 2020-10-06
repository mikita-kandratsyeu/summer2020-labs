import axios from 'axios';

const outputTable = document.querySelector('.output-table');
const loader = document.querySelector('.output-data > p');

export default async function postRequest(link, header) {
  try {
    loader.textContent = 'Loading...';

    loader.classList.remove('hidden');
    outputTable.classList.add('hidden');

    const response = await axios.get(link);

    loader.textContent = '';
    outputTable.innerHTML = '';

    loader.classList.add('hidden');
    outputTable.classList.remove('hidden');

    const { data } = response;

    const trHeader = document.createElement('tr');

    Object.keys(header)
      .forEach((key) => {
        const th = document.createElement('th');
        th.textContent = header[key];
        trHeader.append(th);
      });

    outputTable.append(trHeader);

    Object.keys(data)
      .forEach((key) => {
        const tr = document.createElement('tr');

        Object.keys(header)
          .forEach((item) => {
            const td = document.createElement('td');
            td.textContent = data[key][header[item]];
            tr.append(td);
          });

        outputTable.append(tr);
      });
  } catch (error) {
    console.log(error);

    loader.textContent = 'Error';
  }
}
