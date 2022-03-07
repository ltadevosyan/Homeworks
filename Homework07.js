//1. For a given number calculate the sum of its digits.
let number
let sum=0
for( ;number!==0;number=(number-number % 10)/10) {
    sum=sum+number%10
}
console.log(sum)

/*2. Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
and “no&quot; otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).
a,b,c-ով եմ նշանակել կողմերը, քանի որ դեռ դպրոցից սովորական դարձած նշանակում է*/
let a
let b
let c
if(a+b>c && a+c>b && b+c>a){
    console.log('yes')
}else{
    console.log('no')
}

//3. Given a number print its digits count.
let number
let qanak=0
if(number!==0){
    for( ;number!==0;number=(number-number % 10)/10) {
    qanak=qanak+1
}
console.log(qanak)
}else{
    console.log(1)
}

//4. Count numbers of digit 9 in a number.
let number
let qanak=0
for( ;number!==0;number=(number-number % 10)/10) {
    if(number%10===9){
        qanak+=1  
    }else{
        console.log()
    }
}console.log(qanak)

//5 Given a positive number. Print it in reverse order.
let number
let reverseNumber=0
for( ;number!==0;number=(number-number % 10)/10) {
reverseNumber=reverseNumber*10+number%10
}
console.log(reverseNumber)