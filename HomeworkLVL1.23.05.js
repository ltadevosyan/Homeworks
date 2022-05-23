/*1. Create a function that builds a tree.
const treeNodes = [
    {id: 'root', children: [1, 2]},
    {id: 1, children: [3,]},
    {id: 2, children: [4, 5]},
    {id: 3, children: [6]},
    {id: 4, children: [7]},
    {id: 5, children: []},
    {id: 6, children: []},
    {id: 7, children: [8, 9]},
    {id: 8, children: []},
    {id: 9, children: [10]},
    {id: 10, children: []},
]
*/


function toGrowTree (treeNodes, id = "root") {
    const tree = {};
    const child = treeNodes.filter(el => el.id === id)
    tree[id] = {}
    child[0].children.forEach (elem => {tree[id][elem] = toGrowTree(treeNodes, elem)})
    if (id === "root") {
        return tree
    } 
    return tree[id]
}


/*2. Write a JavaScript function to get all possible subsets of given length of the given array. Assume that all elements in the array are unique.*/


function findSubarraysOfArray (arr,currLength, resultArray = [], i) {
    for (i  = arr.length-1; i >= 0; i--) {
        let curr = [...arr];
        curr.splice(i, 1);
        if (curr.length !== currLength) {
            findSubarraysOfArray (curr,currLength, resultArray, i-1);
        } else {
            resultArray.push(curr);
        } 
    }
    return resultArray;
}


/*3. Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.
*/

/*Չգիտեմ ճիշտ եմ գրել, թե ոչ, բայց խնդրի պահանջը այսպես եմ հասկացել։*/

let searchText
function getDelayDecorator (f, ms) {
    if (searchText !== undefined) {
        clearTimeout(searchText)
    }
    searchText = setTimeout(() => {f()}, ms)
}


/*4. Implement Debounce decorator*/


function implementTheDebounceDecorator (fn, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {fn.apply(this, args)}, timeout);
  };
}

/*կամ՝*/


function implementTheDebounceDecorator (callback, timeout) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {callback.apply(null, args)}, timeout)
  };
}


/*Աայս տարբերակն արդեն համացանցից եմ նայել*/

function implementTheDebounceDecorator(timeout: number) {
    let timeoutRef = null;
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function(...args) {
            clearTimeout(timeoutRef);
            setTimeout(() => {
                original.apply(this, args);
            }, timeout);
        }
        return descriptor;
    }
}

