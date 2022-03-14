/*1. Given an array․ Compute the length of the array. (without using .length)*/
let length=+prompt('Say a number')
let arr=[]
let el=0
while(length-el!==0){
    let startEl=+prompt('Say a number')
    arr.push(startEl)
    el++
}
console.log(el)

/*2. Given an array of numbers. Print the sum of the elements in array.*/
let length=+prompt('Say a number')
let arr=[]
let el=0
let sumOfEl=0
while(length-el!==0){
    let startEl=+prompt('Say a number')
    arr.push(startEl)
    el++
    sumOfEl+=startEl
}
console.log(sumOfEl)

/*3. Given two numbers. Print powers of 2 between that numbers. (without using
Math.pow)*/
let leftNumber=+prompt('Say a number')
let rightNumber=+prompt('Say a number')
for(let i=0;2**i<rightNumber;i++){
if(2**i>leftNumber && 2**i<rightNumber){
    console.log(2**i)
}else{
    console.log('There is no degree 2 between these numbers')
}
}

/*4.Given a number as input, insert dashes (-) between each two even numbers.
Ես որոնեցի ու գտա arr.join() մեթոդը (The array.join() method is an inbuilt function in JavaScript which is used to join the elements of an array into a string.The elements of the string will be separated by a specified separator and its default value is comma (, ).*/
), որի միջոցով էլ կարողացա ազատվել բ տարբերակում result.push()-ի միջի ,-ից, այլ տարբերակ փնտրեցի, բայց չգտա։ Բ տարբերակում նույն լուծումն է String()-ի միջոցով, բայց ,-ները մնացել են թվանշանների արանքում*/
//ա տարբերակ
let number=prompt('Say a number')
let result = [number[0]]
for(let i=1; i<number.length; i++){
    if((number[i-1]%2 === 0)&&(number[i]%2 === 0)){
    	result.push('-', number[i])
    }else{
    	result.push(number[i])
     }
}
console.log(result.join(''))

//բ տարբերակ
let number=prompt('Say a number')
let result = [number[0]]
for(let i=1; i<number.length; i++){
    if((number[i-1]%2 === 0)&&(number[i]%2 === 0)){
      result.push(-number[i])
     }else{
      result.push(number[i])
     }
}
console.log(String(result))

/*5.Insert a n positive number. Print the n-st prime number. Այդպես էլ չկարողացա ամբողջությամբ խելքի բերեմ այս վարժությունը, իմ գրած ծրագիրը մուտքագրածս թվի համար տպում է մինչև այդ թիվը եղած պարզ թվերը։Եթե մինչև չորեքշաբթի ստացվի լուծել կուղարկեմ։*/
let isPrime=true
function isPrimeNumbers(n){
if (n === 1) {
    return ('1 is neither prime nor composite number')
}else if (n > 1) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
           return false
        }
    } if (isPrime) {
        console.log(n)
    } else {
    console.log(`${n} is a not prime number`)
    }
} else {
    console.log('The number is not a prime number')
}
}
function printPrime(n){
    for (let i = 2; i <= n; i++){ 
        if (isPrimeNumbers(i)) 
        return(n)}
}

//let n=18
//printPrime(n)