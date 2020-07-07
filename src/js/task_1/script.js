/**
 * Task 1.1
 * Implementing the following functions without any libs
 */

function sum(a, b) {
  // (1, 2) => 3

  return a + b;
}

console.log(sum(1, 2));

function sub(a, b) {
  // (2, 1) => 1

  return a - b;
}

console.log(sub(2, 1));

function multiply(a, b) {
  // (5, 3) => 15

  return a * b;
}

console.log(multiply(5, 3));

function percentage(a, percent) {
  // (10, 5) => 0.5

  return a * (percent / 100);
}

console.log(percentage(10, 5));

function div(a, b) {
  // (1, 2) => 0.5

  return (b !== 0) ? a / b : 'Division by zero';
}

console.log(div(1, 2));

function integerDiv(a, b) {
  // (9, 2) => 4

  return +(`${a / b}`).split('.')[0];
}

console.log(integerDiv(4656, 2));

function abs(a) {
  // (-1) => 1

  return (a >= 0) ? a : +(`${a}`).split('-')[1];
}

console.log(abs(-1));

function sqr(x) {
  // (5) => 25

  return x ** 2;
}

console.log(sqr(5));

function sqrN(x, n) {
  // (2, 4) => 16
  // (2, 0) => 1
  // (2, -1) => 0.5

  return x ** n;
}

console.log(sqrN(2, -1));

function factorialRecursion(x) {
  // (4) => 24

  return (x === 1) ? x : x * factorialRecursion(x - 1);
}

console.log(factorialRecursion(4));

function factorialLoop(x) {
  // (4) => 24
  let result = 1;
  for (let i = 1; i <= x; i += 1) {
    result *= i;
  }

  return result;
}

console.log(factorialLoop(5));

function round(x) {
  // (5.8) => 6
  // (5.2) => 5
  // (-2.8) => -3
  // (-2.2) => -2

  const a = +(`${x}`.split('.')[0]);
  const b = +(`${x}`.split('.')[1][0]);

  if (b >= 5) {
    return (a < 0) ? a - 1 : a + 1;
  }

  return a;
}

console.log(round(-2.8));

/**
 * Task 1.2
 Using the loops, draw in the console with spaces (& nbsp) and
 asterisks (*):
 - Rectangle;
 - Right triangle;
 - Equilateral triangle;
 - Rhombus.
 */

function rectangle(width, height) {
  // function should return string

  let temp = '';
  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      temp += '* ';
    }
    temp += '\n';
  }

  return temp;
}

console.log(rectangle(10, 5));

function rightTriangle(lines) {
  // function should return string

  let temp = '';
  for (let i = 0; i <= lines; i += 1) {
    for (let j = 0; j < i; j += 1) {
      temp += '* ';
    }

    temp += '\n';
  }

  return temp;
}

console.log(rightTriangle(10));

function equilateralTriangle(lines) {
  // function should return string

  let temp = '';
  for (let i = 0; i < lines; i += 1) {
    for (let j = 0; j < lines - i - 1; j += 1) {
      temp += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j += 1) {
      temp += '*';
    }

    temp += '\n';
  }

  return temp;
}

console.log(equilateralTriangle(10));

function rhombus(lines) {
// function should return string
// (2) =>
//   *
//  ***
// *****
//  ***
//   *

  let temp = '';
  for (let i = 0; i < lines + 1; i += 1) {
    for (let j = 0; j < lines - i; j += 1) {
      temp += ' ';
    }
    for (let j = 0; j < i * 2 + 1; j += 1) {
      temp += '*';
    }

    temp += '\n';
  }

  for (let i = lines; i > 0; i -= 1) {
    for (let j = 1; j < lines - i + 2; j += 1) {
      temp += ' ';
    }

    for (let j = 1; j < i * 2; j += 1) {
      temp += '*';
    }

    temp += '\n';
  }

  return temp;
}

console.log(rhombus(10));
