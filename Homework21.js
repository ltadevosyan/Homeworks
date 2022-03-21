/*1) Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
starting from a to b spaced by step.*/ 

let a=+prompt('Ask a number')
let b=+prompt('Ask a number')
let step=+prompt('Ask a step')
let arr=[a,b]
function arrOfEvenlySpacedElements (a,b,step){
    while((a+step)<b) {
        arr.pop(b)
        arr.push(a+step,b)
        a=a+step
    }
return (arr)
}
arrOfEvenlySpacedElements (a,b,step)


/*2) Given a string and a symbol. Find the number of occurrences of the symbol in the string.*/

let counter = 0
let str = 'Some text here'
let symbol = prompt('Ask a symbol')
function count(str, symbol) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol){
        counter++
    }
  }
}
count(str, symbol)
console.log(counter)


/*3) Given a string. Check whether the string is palindrome or not.*/

let str = prompt('Ask a string')
function palindromeString (str) {
    for (let i = 0, j = str.length-1; i < str.length; i++, j--) {
        return (str[i] == str[j])? 'Yes' : 'No'
    }
}
console.log(palindromeString(str))


/*4) Given an array of numbers. Find the maximum element in array.*/

let arr=[1,4,43,-112]
let max=0
function maxElementOfArr (arr) {
    for(let i=0; i< arr.length; i++){
        if (arr[i]> max){
            max=arr[i]
        }
       
    }
}
maxElementOfArr (arr)
console.log(max)


/*5) Given an array. Create the array which elements are products between two neighbours.*/

let arr=[1,1,4,32,6]
let productsElem=[]
function productsElementOfArr (arr) {
    for(let i=0; i< arr.length-1; i++){
        productsElem.push(arr[i]*arr[i+1])     
    }
}
productsElementOfArr (arr)
console.log(productsElem)


/*6) Given a string and symbols. Change first symbol by the second one in the string.
ReplaceAll(a, b) str մեթոդը փոխարինում է str-ի բոլոր a-երը b-երով` առանց որևէ այլևայլությունների:*/

let str = 'The results are not recorded yet'
let symbol1 = prompt('Ask a symbol')
let symbol2= prompt('Ask a symbol')
function changeSymbol (str, symbol1, symbol2) {
    return str.replaceAll (symbol1 , symbol2)  
}
changeSymbol (str, symbol1, symbol2)


բ/ Այսպես էլ եմ փորձել գրել, բայց ինչ-որ բան այնպես չէ, չեմ հասկանում, թե ինչը պիտի շտկեմ։
let str = 'The results are not recorded yet'
let symbol1 = prompt('Ask a symbol')
let symbol2= prompt('Ask a symbol')
function changeSymbol (str, symbol1, symbol2) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol1){
            str[i]= symbol2
        } 
    }
    return str
}
changeSymbol (str, symbol1, symbol2)


/*7)6. Given a string and symbols. Change first symbol by the second one in the string.
Իմ գրած կոդը նույն դասավորությամբ 1-եր է տպում, չհասկացա, թե որտեղ պետք է 1+եմ։*/

function pattern (n){
    let row1
    for(let i=1; i<= n+1; i++) {
        for(j=1; j<i; j++) {
            row1 +='1'
        }
        console.log(row1)
        row1=''
    }
    let row2
    for(i=n+1; i>1; i--) {
        for(j=i; j>1; j--) {
            row2 +='1'
        }
        console.log(row2)
        row2=''
    }

}
pattern(5)