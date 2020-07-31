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

obj[Symbol('prop4')] = 4;

/**
 * Solution
 */

Object.prototype.toString = function () {
  let tmp = '';

  const symbolCollection = Object.getOwnPropertySymbols(this);

  Object.keys(this).forEach((item) => {
    tmp += `${item}: ${this[item]}, `;
  });

  symbolCollection.forEach((item) => {
    tmp += `${item.toString()}: ${this[item]}, `;
  });

  return tmp;
};

document.querySelector('#btn-3').addEventListener('click', () => {
  alert(obj); // prop1: 1 prop2: 2 prop3: 3
});

/**
 * Task - 4
 * @description - Add to the prototype of all functions the method delay(ms),
 * that returns a wrapper, delaying the call by ms milliseconds, e.g:
 */

function add(a, b) {
  alert(a + b);
}

/**
 * Solution
 */

Function.prototype.delay = function (ms) {
  return (a, b) => {
    setTimeout(() => this(a, b), ms);
  };
};

document.querySelector('#btn-4').addEventListener('click', () => {
  add.delay(1000)(1, 2); // shows 3 after 1 second
});

/**
 * Task - 5
 * @description - Implement following objects, using COMPOSITION approach.
 * Vehicle – starts, moves
 * Car – starts, moves, honks,
 * Tank – starts, moves, shoots,
 * Bicycle – moves
 */

/**
 * Solution
 */

const starts = (self) => ({
  starts: () => alert(`${self.name} starts!`),
});

const moves = (self) => ({
  moves: () => alert(
    `${self.name} moves!`,
  ),
});

const shoots = (self) => ({
  shoots: () => alert(
    `${self.name} shoots!`,
  ),
});

const honks = (self) => ({
  honks: () => alert(
    `${self.name} honks!`,
  ),
});

const Vehicle = (name) => {
  const vehicle = {
    name,
  };

  return {
    ...vehicle,
    ...starts(vehicle),
    ...moves(vehicle),
  };
};

const Car = (name) => {
  const car = {
    name,
  };

  return {
    ...car,
    ...starts(car),
    ...moves(car),
    ...honks(car),
  };
};

const Tank = (name) => {
  const tank = {
    name,
  };

  return {
    ...tank,
    ...starts(tank),
    ...moves(tank),
    ...shoots(tank),
  };
};

const Bicycle = (name) => {
  const bicycle = {
    name,
  };

  return {
    ...bicycle,
    ...moves(bicycle),
  };
};

document.querySelector('#btn-5').addEventListener('click', () => {
// Some examples
  const bmx = Bicycle('bmx');
  bmx.moves();

  const porsche = Car('Porsche 911');
  porsche.honks();
  porsche.starts();
});
