const root = document.querySelector('#root');
const textContainer = document.querySelector('#text-container');

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

  root.append(text, number, buttonCallback, buttonPromise, buttonAsync);
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
      console.log(new Error('Something went wrong!'));
    }
  }, +delay);
};

const clickHandler = (e) => {
  const { action } = e.target.dataset;

  const delay = document.querySelector('#delay').value;
  const data = document.querySelector('#data').value;

  switch (action) {
    case 'callback':
      loadDataCallback(data, (error, result) => {
        setTimeout(() => {
          if (error) {
            console.log(error);
          } else {
            alert(result);
          }
        }, +delay);
      });
      break;
    case 'promise':
      loadDataPromise(delay, data)
        .then((res) => alert(res))
        .catch((rej) => console.log(rej));
      break;
    case 'async':
      loadDataAsync(delay, data);
      break;
    default:
      console.log('Not found!');
  }
};

root.addEventListener('click', clickHandler);
