const root = document.querySelector('body');

const taskFirst = document.querySelector('#task-1');
const taskSecond = document.querySelector('#task-2');
const taskThird = document.querySelector('#task-3');

const textContent = document.querySelector('#text-content');

const generateDomElements = () => {
  const text = document.createElement('input');
  text.setAttribute('type', 'text');
  text.setAttribute('id', 'data');
  text.setAttribute('placeholder', 'Data');

  const number = document.createElement('input');
  number.setAttribute('type', 'number');
  number.setAttribute('id', 'delay');
  number.setAttribute('min', '0');
  number.setAttribute('placeholder', 'Delay(ms)');

  const buttonCallback = document.createElement('input');
  buttonCallback.setAttribute('type', 'button');
  buttonCallback.setAttribute('data-action', 'callback');
  buttonCallback.setAttribute('value', 'Callback');

  const buttonPromise = document.createElement('input');
  buttonPromise.setAttribute('type', 'button');
  buttonPromise.setAttribute('data-action', 'promise');
  buttonPromise.setAttribute('value', 'Promise');

  const buttonAsync = document.createElement('input');
  buttonAsync.setAttribute('type', 'button');
  buttonAsync.setAttribute('data-action', 'async');
  buttonAsync.setAttribute('value', 'Async/Await');

  const buttonHttpGet = document.createElement('input');
  buttonHttpGet.setAttribute('type', 'button');
  buttonHttpGet.setAttribute('data-action', 'http-get');
  buttonHttpGet.setAttribute('value', 'Http get');

  const buttonShowEmployees = document.createElement('input');
  buttonShowEmployees.setAttribute('type', 'button');
  buttonShowEmployees.setAttribute('data-action', 'employees');
  buttonShowEmployees.setAttribute('value', 'Show employees list');

  taskFirst.append(text, number, buttonCallback, buttonPromise, buttonAsync);
  taskSecond.append(buttonHttpGet);
  taskThird.append(buttonShowEmployees);
};

generateDomElements();

// Callback
const loadDataCallback = (data, callback) => {
  if (data.length) {
    callback(null, data);
  } else {
    callback(new Error('Something went wrong!'));
  }
};

// Promise
const loadDataPromise = (delay, data) => new Promise((res, rej) => {
  setTimeout(() => {
    if (data.length) {
      res(data);
    } else {
      rej(new Error('Something went wrong!'));
    }
  }, +delay);
});

// Async/Await
const loadDataAsync = (delay, data) => {
  setTimeout(async () => {
    if (data.length) {
      const res = await data;
      alert(res);
    } else {
      alert(new Error('Something went wrong!').message);
    }
  }, +delay);
};

// https://api.github.com/users/mikita-kandratsyeu/repos

// HTTP GET
const httpGet = (url, callback) => {
  const random = Math.round(Math.random());

  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = () => {
    if (random) {
      callback(null, xhr.response);
    } else {
      callback(new Error('Something went wrong!'));
    }
  };
};

// Promisified
const httpGetPromise = (url, delay) => new Promise((res, rej) => {
  httpGet(url, (err, result) => {
    setTimeout(() => {
      if (err) {
        rej(err);
      } else {
        res(result);
      }
    }, delay);
  });
});

// Get random number from min to max
const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const clickHandler = (e) => {
  const { action } = e.target.dataset;

  const delay = document.querySelector('#delay').value;
  const data = document.querySelector('#data').value;

  switch (action) {
    case 'callback':
      loadDataCallback(data, (err, result) => {
        setTimeout(() => {
          if (err) {
            alert(err.message);
          } else {
            alert(result);
          }
        }, +delay);
      });
      break;
    case 'promise':
      loadDataPromise(delay, data)
        .then((res) => alert(res))
        .catch((rej) => alert(rej.message));
      break;
    case 'async':
      loadDataAsync(delay, data);
      break;
    case 'http-get':
      textContent.textContent = 'Loading...';

      httpGetPromise('https://api.github.com/users/mikita-kandratsyeu/repos', random(1000, 3000))
        .then((res) => {
          textContent.textContent = res.map((item) => item.name);
        })
        .catch((rej) => {
          textContent.textContent = rej.message;
        });
      break;
    default:
      console.log('Try again!');
  }
};

root.addEventListener('click', clickHandler);
