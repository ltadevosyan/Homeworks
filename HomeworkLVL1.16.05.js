/*1.   Create a function that builds a tree like object given an array with object which contains parent and id properties.
*/

/*Այս լուծումը որոնմամբ եմ գտել փոփոխություններ արել, հասկանում եմ ինչ է գրված, բայց կարծես լուծած չլինեմ, էլի կփորձեմ ինքնուրույն այլ կերպ լուծել։*/
function tree (arr,options) {
    options = options  || {}
    let idKey = options.idKey || 'id'
    let parentKey = options.parentKey || 'parent'
    let childrenKey = options.childrenKey || 'children'

    let map = {}
    for(let i = 0; i < arr.length; i++ ) { 
        if(arr[i][idKey]){
          map[arr[i][idKey]] = arr[i]
          arr[i][childrenKey] = []
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][parentKey]) { 
          if(map[arr[i][parentKey]]) {
            map[arr[i][parentKey]][childrenKey].push(arr[i])
            arr.splice( i, 1 )
            i--
          } else {
            arr[i][parentKey] = 0
          }
        }
    }
    return arr
}

let treeNodes = [
    { parent: null, id: 0 },
    { parent: 0, id: 1 },
    { parent: 0, id: 2 },
    { parent: 1, id: 3 },
    { parent: 1, id: 4 },
    { parent: 2, id: 5 },
    { parent: 4, id: 6 },
]
tree(treeNodes)

/*2. Write a JavaScript function to get all possible subsets of given length of the given array.
Assume that all elements in the array are unique.*/


/*Թերացումներով է։*/
function findSubarraysOfArray (arr,currLength) {
    if (currLength === arr.length){
        return arr;
    }
    let resultArray = [];
    for (let i = 0; i < arr.length-currLength+1; i++) {
        let curr = [];
        curr.push(arr[i]);
        let j =i+1;
        while(curr.length !== currLength) {
            curr.push(arr[j]);
            j++;
        }
        resultArray.push(curr);
    }
    return resultArray;
}


/*3. Write a recursive function to determine whether all digits of the number are odd or` not.*/


function allDigitsOdd (num) {
    if (num%2 === 0) {
        return false;
    } 
    let num1 = (num-num%10)/10
    if(num1!== 0) {
        return allDigitsOdd(num1)
    }
    return true
}


/*4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if
such element does not exist, return -1)․*/


/*Առանց ռեկուրսիայի եմ գրել։*/
function findMinPositiveElement (arr) {
    const positivesArr = arr.sort((a,b) => a-b).filter (function (el) {
        if (el > 0) {
            return el;
        }
    })[0]
    if (positivesArr === undefined) {
        return -1
    }
    return positivesArr
}


/*Սա էլ փորձել եմ ռեկուրսիայով, սակայն հավանաբար այդքան էլ օպտիմալ լուծում չէ։*/

function findMinPositiveElement (arr) {
    const positiveEl = arr.filter (function (el) {
        if (el > -1) {
            return el
        }
    })
    if(positiveEl[0] === undefined ) {
        return -1;
    }
    if (positiveEl.length === 1 ) {
        return arr[0];
    }
    return Math.min(positiveEl.shift(), findMinPositiveElement(positiveEl));
}

/*Սա էլ ռեկուրսիայով է, բայց ամենափոքր էլեմենտն է գնտում։*/

function findMinPositiveElement (arr) {
    if (arr.length === 1 ) {
        return arr[0];
    }
    return Math.min(arr.shift(), findMinPositiveElement(arr));
}

