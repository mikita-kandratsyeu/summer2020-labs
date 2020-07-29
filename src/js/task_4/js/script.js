/**
 * Task - 1
 * @description - Implement function ‘spawn’, which will take
 * Constructor and arguments and return
 * a new object, same as if we used ‘new’ keyword;
 */

const Mammal = {
  eat() {
    alert(`${this.name} is eating`);
  },
};
const Human = {
  run() {
    alert(`${this.name} is running`);
  },
};

function Man(name, age) {
  this.name = name;
  this.age = age;
}

Man.prototype = {
  ...Mammal,
  ...Human,
};

document.querySelector('#btn-1').addEventListener('click', () => {
  const al = new Man('Alex', 29);
  alert(al.name); // 'Alex'
  alert(al.age); // 29
  al.run(); // Alex is running
  al.eat(); // Alex is eating
});

/**
 * Solution
 * @param constructor
 * @param rest
 * @returns {{}}
 */

function spawn(constructor, ...rest) {
  const tmp = {};

  constructor.call(tmp, ...rest);

  Object.setPrototypeOf(tmp, constructor.prototype);

  return tmp;
}

document.querySelector('#btn-2').addEventListener('click', () => {
  const al = spawn(Man, 'Alex', 29);
  alert(al.name); // 'Alex'
  alert(al.age); // 29
  al.run(); // Alex is running
  al.eat(); // Alex is eating
});

/**
 * Task - 2
 * @description - Assign prototypes in a way that any property lookup will follow the
 * path: webdev → architect → fullstack → junior.
 */

const junior = {
  experience: 1,
};

const fullstack = {
  salary: 3000,
};

const architect = {
  knowledge: 100500,
};

const webdev = {
  efficiency: 100,
};

/**
 * Solution
 */

Object.setPrototypeOf(webdev, architect);
Object.setPrototypeOf(architect, fullstack);
Object.setPrototypeOf(fullstack, junior);

/**
 * Task - 3
 * @description - Change the code, so that alerting any object will output it’s own properties, e.g:
 */

const obj = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
};

/**
 * Solution
 */

Object.prototype.toString = () => {
  let tmp = '';

  Object.keys(obj).forEach((item) => {
    tmp += `${item}: ${obj[item]}, `;
  });

  return tmp;
};

document.querySelector('#btn-3').addEventListener('click', () => {
  alert(obj); // prop1: 1 prop2: 2 prop3: 3
});
