/*1. Given an object. Invert it (keys become values and values become keys). If there is
more than key for that given value create an array.*/

function inverse(obj) {
  let retobj = {};
  for (let key in obj) {
    retobj[obj[key]] = retobj[obj[key]] || [];
    retobj[obj[key]].push(key)
  }
  return retobj;
}

let object = {
  a: "1",
  b: "2",
  c: "2",
  d: "2"
}
console.log("Object before inversion");
console.log(object);
object = inverse(object);
console.log("Object after inversion");
console.log(object);


/*2. Given two objects. Write a function that performs shallow compare.*/

let a = {
  a: "1"
}
let b = {
  a: "1",
  b: "2"
}

function shallowCompare(a, b) {
  for (let key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }
  for (let key in b) {
    if (!(key in a) || a[key] !== b[key]) {
      return false;
    }
  }
  return true
}

shallowCompare(a, b)


/*3. Given an array. Determine whether it consists only from uniques or not.*/

let array1 = [1, 2, 3]
let array2 = [1, 1, 1]
let array3 = ["1", "arr", "at"]
let array4 = ["1", "arr", [1, 2, 5], "at"]
let array5 = ["1", "arr", [1, 2, 5], "at", true]
let array6 = ["1", "arr", [1, 2, 5], "at", true, {a: "1", b: "2"}, "1", "arr", [1, 2, 5], "at", true, ]

function isUnique(arr) {
  let unique = arr.filter(function(el, i, array) {
    return i === array.indexOf(el);
  });
  return unique.length === arr.length;
}


alert(isUnique(array1))
alert(isUnique(array2))
alert(isUnique(array3))
alert(isUnique(array4))
alert(isUnique(array5))
alert(isUnique(array6))


/*4. Determine if a word or phrase is an isogram. An isogram (also known as a (non pattern
word)) is a word or phrase without a repeating letter.*/

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length
}

console.log(isIsogram('potop'));
console.log(isIsogram('Armenia'));
console.log(isIsogram('red'));


/*5. Given an array of integers. All numbers are unique. Find the count of missing numbers
between minimum and maximum elements to make integers sequence.*/

function findMissing(num) {
  let max = Math.max(...num);
  let min = Math.min(...num);
  let missing = []
  for (let i = min; i <= max; i++) {
    if (!num.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}
