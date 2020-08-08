/**
 * Additional functions
 */

const generateRandomIntValue = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const generateArray = (n) => {
  const array = [];

  for (let i = 0; i < n; i += 1) {
    array.push(generateRandomIntValue(-100, 100));
  }

  return array;
};

const generateTwoDimensionalArray = (n) => {
  const array = [];

  for (let i = 0; i < n; i += 1) {
    array[i] = [];
    for (let j = 0; j < n; j += 1) {
      array[i][j] = generateRandomIntValue(-100, 100);
    }
  }

  return array;
};

/**
 * Task - 1
 * @description - Create an array of N elements, populate it with arbitrary integer values.
 * Output the largest value of the array, the smallest value of the array, the total
 * sum of the elements, the arithmetic mean of all elements.
 */

console.log('== Task-1 ==');

const findMax = (array) => Math.max(...array);

const findMin = (array) => Math.min(...array);

const getTotal = (array) => array.reduce((sum, current) => sum + current, 0);

const getArithmeticMean = (array) => getTotal(array) / array.length;

// The largest value
console.log('Max:', findMax(generateArray(10)));

// The smallest value
console.log('Min:', findMin(generateArray(10)));

// The total sum of the items
console.log('Total:', getTotal(generateArray(10)));

// The arithmetic mean of all items
console.log('Arithmetic mean:', getArithmeticMean(generateArray(10)));


/**
 * Task - 2
 * @description - Create a two-dimensional array of 5x5 elements and populate
 * it with arbitrary integer values. On the main diagonal, replace all numbers
 * with the sign (-) by 10, and the numbers with the sign (+) by the number 20.
 */

console.log('\n== Task-2 ==\n');

const replaceNumbersOnTheMainDiagonal = (array) => {
  const len = array.length;

  const tempArray = array;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (i === j) {
        tempArray[i][j] = tempArray[i][j] < 0 ? 10 : 20;
      }
    }
  }

  return tempArray;
};

console.log(replaceNumbersOnTheMainDiagonal(generateTwoDimensionalArray(5)));

/**
 * Task - 3
 * @description - Write a function that allocates array of 20 integers and initializes
 * each element by its index multiplied by 5. Print the obtained array on the console.
 */

console.log('\n== Task-3 ==\n');

const multiplyByFive = (array) => array.map((item, idx) => idx * 5);

console.log(multiplyByFive(generateArray(20)));

/**
 * Task - 4
 * @description - Write a function that finds the maximal sequence of equal elements in an array.
 * [2, 1, 1, 2, 3, 3, 2, 2, 2, 1] // [2, 2, 2].
 */

console.log('\n== Task-4 ==\n');

const findMaxSequenceOfEqualItems = (array) => {
  const config = {};
  let count = 0;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i - 1] === array[i]) {
      count += 1;
      config[array[i]] = count + 1;
    } else {
      count = 0;
    }
  }

  const max = Math.max(...Object.values(config));

  let result = 0;

  for (const [key, value] of Object.entries(config)) {
    if (value === max) {
      result = +key;
      break;
    }
  }

  return new Array(max).fill(result, 0, max);
};

console.log(findMaxSequenceOfEqualItems([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));

/**
 * Task - 5
 * @description- Write a function that finds the maximal increasing sequence in an array.
 * [3, 2, 3, 4, 2, 2, 4] //[2, 3, 4].
 */

console.log('\n== Task-5 ==\n');

const findMaxIncreasingSequence = (array) => {
  const config = {};

  let temp = [];

  let count = 0;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i - 1] + 1 === array[i]) {
      temp.push(array[i - 1]);
    } else {
      temp.push(array[i - 1]);
      config[count] = temp;

      count += 1;

      temp = [];
    }
  }

  const maxCollection = Object.values(config)
    .map((item) => item.length);

  const max = Math.max(...maxCollection);

  let result = [];

  for (const value of Object.values(config)) {
    if (value.length === max) {
      result = value;
      break;
    }
  }

  return result;
};

console.log(findMaxIncreasingSequence([3, 2, 3, 4, 2, 2, 4]));

/**
 * Task - 6
 * @description - Write a function that finds the most frequent number in an array.
 * [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3] // 4 (5 times)
 */

console.log('\n== Task-6 ==\n');

const findMostFrequentNumber = (array) => {
  const config = {};

  const arr = array.filter((item, idx) => array.indexOf(item) === idx);

  for (let i = 0; i < arr.length; i += 1) {
    let count = 0;

    for (let j = 0; j < array.length; j += 1) {
      if (array[j] === arr[i]) {
        count += 1;
        config[array[j]] = count;
      }
    }
  }

  const max = Math.max(...Object.values(config));

  let result = 0;

  for (const [key, value] of Object.entries(config)) {
    if (value === max) {
      result = +key;
      break;
    }
  }

  return result;
};

console.log(findMostFrequentNumber([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));


/**
 * Task - 7
 * @description - Write a function that finds the index of given element in a sorted
 * array of integers by using the binary search algorithm.
 */

console.log('\n== Task-7 ==\n');

const binarySearch = (array, value) => {
  const arr = array.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === value) {
      return true;
    }

    if (arr[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return false;
};

console.log(binarySearch([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3], 9));

/**
 * Task - 8
 * @description - Sorting an array means to arrange its elements in increasing order.
 * Write a script to sort an array. Use the **"selection sort"** algorithm:
 * Find the smallest element, move it at the first position, find the smallest from the rest,
 * move it to the second position, etc.
 * Hint: Use a second array
 */

console.log('\n== Task-8 ==\n');

const selectionSort = (array) => {
  const tempArray = array;

  const len = tempArray.length;

  for (let i = 0; i < len - 1; i += 1) {
    let min = i;

    for (let j = i + 1; j < len; j += 1) {
      if (tempArray[j] < tempArray[min]) {
        min = j;
      }

      const value = tempArray[min];
      tempArray[min] = tempArray[i];
      tempArray[i] = value;
    }
  }

  return tempArray;
};

console.log(selectionSort([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
