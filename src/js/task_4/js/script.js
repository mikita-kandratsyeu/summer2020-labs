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
