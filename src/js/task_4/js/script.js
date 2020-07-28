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

// const al = new Man('Alex', 29);
// alert(al.name); // 'Alex'
// alert(al.age); // 29
// al.run(); // Alex is running
// al.eat(); // Alex is eating

function spawn(constructor, ...rest) {
  const tmp = {};

  constructor.call(tmp, ...rest);

  Object.setPrototypeOf(tmp, constructor.prototype);

  return tmp;
}

const al2 = spawn(Man, 'Alex', 29);
alert(al2.name);
alert(al2.age);
al2.run();
al2.eat();
