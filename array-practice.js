const findMinimum = arr => {
  /*
  Given an Array of numbers,
  return the smallest number in the array.
  Do this in O(n) Time.
  */
if (arr.length === 0) {return undefined};
return arr.reduce((min, element) => Math.min(min, element))
};


const runningSum = arr => {
  /*
  Given an array of numbers, return the running sum of its elements.
  */
 let sum = 0;
 let sums = [];
 for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  sums.push(sum);
 }
 return sums;
};

const evenNumOfChars = arr => {
  /*
  Given an array of strings,
  return the number of strings with an even number of characters
  */
  return arr.filter(
    str => str.length % 2 === 0
  ).length;
};

const smallerThanCurr = arr => {
  /*
  Given an array of numbers,
  return a new array containing the number of elements smaller
  than the current element at each position.
  */
  return arr.map(
    current => {
      return arr.filter(
        element => element < current
      ).length;
    }
  );
};

const twoSum = (arr, target) => {

  /*
  Given an array of numbers and a target sum,
  your function should return a boolean value (true or false)
  if there are two elements in the array that add up to the target value.
  */
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i+1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {return true};
  }
}

return false;
};

const secondLargest = arr => {
  /*
  Given an array of numbers,
  return the second largest number in the array.
  */


if (arr.length < 2) {return undefined};

let largest = Math.max(arr[0], arr[1]);
let second = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > largest) {
    second = largest
    largest = arr[i];
  } else if (arr[i] > second) {
    second = arr[i];
  }
}
return second;
};

const shuffle = (arr) => {

  /*
  Given an array,
  return an array containing those elements
  in random order. Your function should return a new array
  and NOT mutate the original.
  */
  if(arr.length === 0) {return []};
  if(arr.length === 1) {return [arr[0]]};
  let randomized = [];

  let index = Math.floor(Math.random() * arr.length);
  randomized.push(arr[index]);

  let sliced = [...arr.slice(0, index), ...arr.slice(index+1)];

  randomized = [...randomized, ...(shuffle(sliced))]

  return randomized;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
