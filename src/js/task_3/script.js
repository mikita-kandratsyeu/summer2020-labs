/**
 * @description - should check if parameter is object, if not
 * should return false
 * @param obj - can be any data types
 * @return boolean - true or false
 */

function isObject(obj) {
  // your logic here

  return typeof obj === 'object' && obj !== null;
}

console.log(isObject([]));

/**
 * @description - should check if parameter is function, if not
 * should return false
 * @param obj - can be any data types
 * @return boolean - true or false
 */

function isFunction(obj) {
  // your logic here

  return typeof obj === 'function';
}

console.log(isFunction(function () {
  return null;
}));

/**
 * Example - 1
 * @type {{e: string, f: string, g: string, h: string}}
 */

const obj1 = {
  e: '5',
  f: '6',
  g: '7',
  h: '8',
};

/**
 * Example - 2
 * @type {{a: string, __proto__: {e: string, f: string, g: string, h: string},
 * b: string, c: string, d: string}}
 */

const obj2 = {
  a: '1',
  b: '2',
  c: '3',
  d: '4',
  __proto__: obj1,
};

/**
 * @description Custom implementation of the function Object.keys
 * but only for own properties
 * @param obj can be any data types
 * @return array of keys or error
 */

function keys(obj) {
  // your logic here

  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Error');
  }

  const result = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }

  return result;
}

console.log(keys(obj2));

/**
 * @description Custom implementation of the function Object.keys
 * for all properties
 * @param obj can be any data types
 * @return array of keys or error
 */

function allKeys(obj) {
  // your logic here

  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Error');
  }

  const result = [];

  for (const key in obj) {
    result.push(key);
  }

  return result.concat(Object.getOwnPropertySymbols(obj));
}

/**
 * Example - 3
 * @type {{a: string, __proto__: {e: string, f: string, g: string, h: string},
 * b: string, c: string, d: string}}
 */

const obj3 = {
  a: '1',
  b: '2',
  c: '3',
  d: '4',
  __proto__: obj1,
};

obj3[Symbol('i')] = 9;
obj3[Symbol('j')] = 10;


console.log(allKeys(obj3));

/**
 * @description Custom implementation of the function Object.values
 * @param obj can be any data types
 * @return array of values or error
 */

function values(obj) {
  // your logic here

  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Error');
  }

  const result = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(obj[key]);
    }
  }

  return result;
}

console.log(values(obj2));

/**
 * @description Custom implementation of the function Object.entries
 * @param obj can be any data types
 * @return array of pairs [key, value] or error
 */

function pairs(obj) {
  // your logic here

  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Error');
  }

  const result = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push([key, obj[key]]);
    }
  }

  return result;
}

console.log(pairs(obj2));

/**
 * @description Should find all properties in an object
 * value of which are functions and collect their names into array
 * @param obj can be any data types
 * @return sorted in alphabetic order array of function names or error
 */

function functions(obj) {
  // your logic here

  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Error');
  }

  const result = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && typeof obj[key] === 'function') {
      result.push(key);
    }
  }

  return result.sort();
}

/**
 * Example - 4
 * @type {{getName(): obj3.name, year: number, name: string, displayInfo(): void, sayHi(): void}}
 */

const obj4 = {
  name: 'Mikita',
  sayHi() {
    console.log('Hi everyone!');
  },
  displayInfo() {
    console.log(this.name);
  },
  getName() {
    return this.name;
  },
  year: 1998,
};

console.log(functions(obj4));

/**
 * @description Custom implementation of the function Function.prototype.bind
 * @param func
 * @param context
 * @param arg1, arg2, argN - comma separated parameters (no ES6, e.g. ...rest)
 */

function bind(func, context) {
  // your logic here

  const rest = [].slice.call(arguments, 2);

  return function () {
    return func.apply(context, rest);
  };
}

/**
 * Example - 5
 * @type {{firstName: string, surName: string}}
 */
const person = {
  firstName: 'Mikita',
  surName: 'Kandratsyeu',
};

/**
 * Example - 6
 * @param city
 * @param year
 */

function displayInfo(city, year) {
  console.log(`My name's ${this.firstName} and my surname's ${this.surName}. I was born in ${city} in ${year}`);
}

bind(displayInfo, person, 'Gomel', 1998)();
