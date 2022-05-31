/*1. Get array of node ids from tree (keys). You need to print [ 0, 1, 2, 3, 4, 5, 6 ]. Order doesn't matter.*/


let tree = {
    0: {
        1: {
            3: {
                
            },
            4: {
                6: {
                    
                }
            }
        },
        2: {
            5: {
                
            }
        }
    }
}

function getArrayFromTree (object, array = []) {
    for (let key in object) {
        if(typeof object[key] === "object" && object[key] !== null) {
            array.push(+key);
            getArrayFromTree (object[key], array)
        }
    }
    return array.sort((a,b) => a-b);
}
getArrayFromTree(tree)


/*2. Get array of nodes from tree. You need to print [ { id: 0, children: [1, 2] }, { id: 1, children: [ 3, 4 ] }, …….. ]. Order doesn't matter.*/


let tree = {
    0: {
        1: {
            3: {
                
            },
            4: {
                6: {
                    
                }
            }
        },
        2: {
            5: {
                
            }
        }
    }
}

function getArrayFromTree (object, array = []) {
    for (let key in object) {
        if(typeof object[key] === "object" && object[key] !== null) {
            array.push({id:+key, children: Object.keys(object[key])});
            getArrayFromTree (object[key], array);
        } 
    }
    return array;
}
getArrayFromTree(tree)

/* 3.Implement binary search. First you need to research binary search WITHOUT the implementation itself.*/


function binarySearchElement (arr, element) {
    let left = -1;
    let right = arr.length;
    while (right - left > 1) {
        const mid = Math.floor((left + right)/2);
        if (arr[mid] === element) {
            return mid; // կամ՝ return element;
        }
        if (arr[mid] > element) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return -1;
}
