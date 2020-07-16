/** Strings
 * You shouldn't use internal functions e.g. String.prototype.startsWith()
 */

function reverseString(str) {
  // your logic here
  // can be several variants

  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }

  return result;
}

console.log(reverseString('nikita'));

function endsWith(str, substr) {
  // your logic here
  // can be several variants

  const regExp = new RegExp(`${substr}$`);
  return regExp.test(str);
}

console.log(endsWith('Mikita', 'a'));

function startsWith(str, substr) {
  // your logic here
  // can be several variants

  const regExp = new RegExp(`^${substr}`);
  return regExp.test(str);
}

console.log(startsWith('Mikita', 'Mв'));

function isCamelCase(str) {
  // your logic here
  // (‘email’) => false
  // (‘eMail’) => true
  // (‘e_mail’) => false

  const regExp = /([A-Z][a-z0-9]+)+/g;
  return regExp.test(str);
}

console.log(isCamelCase('camelCase'));

function isSnakeCase(str) {
  // your logic here

  const regExp = /([_][a-z0-9]+)+/g;
  return regExp.test(str);
}

console.log(isSnakeCase('snake_case'));

function isKebabCase(str) {
  // your logic here

  const regExp = /([-][a-z0-9]+)+/g;
  return regExp.test(str);
}

console.log(isKebabCase('kebab-case'));

function isNaN(value) {
  // your logic here

  return !(+value);
}

console.log(isNaN(NaN));

function isFinite(value) {
  // your logic here

  if (typeof value !== 'number') {
    return false;
  }

  return !(value === Infinity || value === -Infinity || value !== value);
}

console.log(isFinite(undefined));

function isFalsy(value) {
  // your logic here

  return !value;
}

console.log(isFalsy(null));


// Write a function that finds all the occurrences of word in a text
// The search can be case sensitive or case insensitive
// Use optional parameters

function matchAllOccurrences(str, substr, sensitive) {
  const regExp = new RegExp((sensitive) ? `${substr}` : `${substr.toLowerCase()}`, 'g');
  const result = [];

  const string = (sensitive) ? str : str.toLowerCase();
  let match;
  do {
    match = regExp.exec(string);
    if (match) {
      result.push(match.index);
    }
  } while (match);

  return result;
}

console.log(matchAllOccurrences('NiKnikNikniknik', 'nik', false));

/**
 *Functions
 */

// Given two numbers A and B, where (A <B).
// Write a function that displays all integer numbers in interval from A to B (including borders).

function getAllIntNumbersInInterval(a, b) {
  const result = [];

  for (let i = a; i <= b; i += 1) {
    result.push((Number.isInteger(i)) ? i : Math.floor(i));
  }

  return result;
}

console.log(getAllIntNumbersInInterval(1.6, 5.6));

// Write a function that displays all odd integer values located
// in the numerical interval from A to B.

function getAllOddIntegerValues(a, b) {
  const result = [];

  for (let i = a; i <= b; i += 1) {
    const integer = Math.floor(i);
    if (integer % 2 !== 0) {
      result.push(integer);
    }
  }

  return result;
}

console.log(getAllOddIntegerValues(1.6, 8.9));

// Write a function that returns the last digit of given integer
// as an English word.
// Examples: 512 -> "two",
// 1024 -> "four", 12309 -> "nine"

function getLastDigitIntoEnglishWord(value) {
  switch (value % 10) {
    case 0:
      return `${value} -> Zero`;
    case 1:
      return `${value} -> One`;
    case 2:
      return `${value} -> Two`;
    case 3:
      return `${value} -> Three`;
    case 4:
      return `${value} -> Four`;
    case 5:
      return `${value} -> Five`;
    case 6:
      return `${value} -> Six`;
    case 7:
      return `${value} -> Seven`;
    case 8:
      return `${value} -> Eight`;
    case 9:
      return `${value} -> Nine`;
    default:
      return `${value} -> Nothing`;
  }
}

console.log(getLastDigitIntoEnglishWord(512));
console.log(getLastDigitIntoEnglishWord(1024));
console.log(getLastDigitIntoEnglishWord(12039));

/**
 *Closures and Scopes
 */

// Create a function, which returns an array of functions,
// which return their index
// in the array.
// For better understanding, here is an example:
// var callbacks = createFunctions(5); // create an array, containing 5 functions
// callbacks[0](); // must return 0
// callbacks[3](); // must return 3

function createFunctions(amount) {
  const result = [];

  for (let i = 0; i < amount; i += 1) {
    result.push(() => i);
  }

  return result;
}

const callbacks = createFunctions(5);
console.log(callbacks[0]());
console.log(callbacks[3]());
