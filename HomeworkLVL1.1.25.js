/* 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
where sorting order is violated.
Ես շատ փորձեցի findIndex() մեթոդի օգտագործմամբ լուծեմ, բայց այդպես էլ չկարողացա հասկանալ, թե callback ֆունկցիայի արգումենտն ինչպես օգտագործեմ։*/


function isAscendingOrder(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < arr[i - 1]) {
      return i
    }
  }
}
isAscendingOrder([-9, -4, -4, 3, 12, 4, 5])


/* 2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array.*/


let arr= [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];
let findArrayComposedOfSumOfEachRow = arr.map(function SumOfEachRow(element, i) {
  let sumElements = 0;
  for (let j = 0; j < element.length; j++) {
    sumElements += element[j]
  }
  return sumElements;
})
findArrayComposedOfSumOfEachRow


/* 3. Given an array of integers. Write a function that return new array from first array,
where removed even numbers, and odd numbers was multiplied with new array length.*/


function oddsMultipliedOddsArrayLength(arr) {
  let odds = arr.filter(n => n % 2);
  for (let i = 0; i < odds.length; i++) {
    odds[i] *= odds.length;
  }
  return odds
}
oddsMultipliedOddsArrayLength ([5, 4, 78, 0, -3, 7])

/* 4. Given a number. Write a function that calculates its sum of the digits and if that sum
has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
return the result.*/


function sumOfDigitsNumber(num) {
  let sum = 0;
  for (; num !== 0; num = (num - num % 10) / 10) {
    sum += num % 10
  }
  if (sum > 9) {
    let sum1 = 0;
    for (; sum !== 0; sum = (sum - sum % 10) / 10) {
      sum1 += sum % 10
    }
    return sum1;
  } else {
    return sum
  }
}
sumOfDigitsNumber (14)


/* 5. Write a recursive function which receives  a number as arguments and returns the
fibonacci sequence as array.*/


function getFibonacciSequenceAsArray(num) {
  const arr = [1, 1]
  if (num === 0) {
    return [];
  }
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}
getFibonacciSequenceAsArray(10)

