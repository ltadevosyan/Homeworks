/*1. Given an array. Write a recursive function that removes the first element and returns the given
array. (without using arr.unshift(),assign second element to first, third element to second...)*/

//ա տարբերակ

const removesFirstElementFromArray = function(arr, i = 0) {
  if (i < arr.length) {
    arr[i] = arr[i + 1];
    if (i === arr.length - 1) {
      arr.pop(arr[i]);
    }
    removesFirstElementFromArray(arr, i + 1)
  }
  return arr
}

//բ տարբերակ

const removesFirstElementFromArray = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
    if (i === arr.length - 1) {
      arr.pop(arr[i]);
    }
  }
  return arr
}


/*2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
that concats arrays).*/


//ա տարբերակ 

let flatten = (arr) =>
  arr.reduce((flatten1, item) =>
    flatten1.concat(Array.isArray(item) ? flatten(item) : [item]), [])


//բ տարբերակ 

function toFlatArray(arr) {
  let flatArray = [];
  function flatArr(arr1) {
    if (!Array.isArray(arr1)) {
      flatArray.push(arr1);
    } else {
      for (let i = 0; i < arr1.length; i++) {
        flatArr(arr1[i]);
      }
    }
  }
  flatArr(arr);
  return flatArray;
}


//գ տարբերակ 

function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flattenArr = flatten(arr[i]);
      flattenArr.forEach(function(value) {
        newArr.push(value);
      })
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


/*3. Given an array and a number N.  Write a recursive function that rotates an array N places to the
left. (Hint: to add element to the beginning use arr.unshift())*/


function rotateArrayNPlaces(array, N) {

  for (var i = 0; i < N; i++) {
    array.unshift(array.pop());
  }

  return array;
}

/*4-րդ և 5-րդ վարժությունները նայել եմ, սակայն այնքան էլ չեն ստացվում, կարծես գրածս կոդն է սխալ, եթե մինչև չորեքշաբթի լուծեմ կուղարկեմ։*/
/*4.Given the list of the following readers:
[
{ book: "Catcher in the Rye, readStatus": true, percent: 40},
{ book: "Animal Farm, readStatus": true, percent: 20},
{ book: "Solaris, readStatus": false, percent: 90 },
{ book: "The Fall, readStatus": true, percent: 50 },
{ book: "White Nights, readStatus": false, percent: 60 } ,
{ book: "After Dark, readStatus": true, percent: 70 }
];
Output the books sorted by the percent in descending order which readStatus is true.*/


/*5.Implement “map” method for plain objects (same as Array map method.)*/