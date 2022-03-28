function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
}

function map(array, cb) {
  const newArray = [];
  for (element of array) {
    newArray.push(cb(element));
  }
  return newArray;
}

function filter(array, cb) {
  const newArray = [];
  for (element of array) {
    if (cb(element) === true) {
      newArray.push(element);
    }
  }
  return newArray;
}

function every(array, cb) {
  let test = true;
  for (element of array) {
    if (cb(element) === false)
      test = false;
  }
  return test;
}

function some(array, cb) {
  let test = false;
  for (element of array) {
    if (cb(element) === true)
      test = true;
  }
  return test;
}

function majority(array, cb) {
  let count = 0;
  for (element of array) {
    if (cb(element) === true)
      count++;
  }
  let test = false;
  if (count > (array.length / 2))
    test = true;
  return test;
}

function once(cb) {
  let called = false;
  let result;
  return function() {
    if (!called) {
      result = cb.apply(this, arguments);
      called = true;
    }
    return result;
  }
  
}

function groupBy(array, cb) {
  const myObject = {};
  for (element of array) {
    let key = cb(element);
    if (key in myObject)
      myObject[key].push(element);
    else
      myObject[key] = [element];
  }
  return myObject;
}

function arrayToObject(array, cb) {
  const myObject = {};
  for (element of array) {
    myObject[element] = cb(element);
  }
  return myObject;
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
