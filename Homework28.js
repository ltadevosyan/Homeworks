// 1. Declare 2 variables a and b, such that a > b, and define values for them. 
//Exampl 1.
let a=14
let b=5
let sum=a+b
console.log(sum)
let difference=a-b
console.log(difference)
let product=a*b
console.log(product)
let quotient=a/b
console.log(quotient)
confirm('a>b?')
let remainder=a%b
console.log(remainder)
//Exampl 2.
let a=99
let b=11
let sum=a+b
console.log(sum)
let difference=a-b
console.log(difference)
let product=a*b
console.log(product)
let quotient=a/b
console.log(quotient)
confirm('a>b?')
let remainder=a%b
console.log(remainder)
//Exampl 3.
let a=81
let b=16
let sum=a+b
console.log(sum)
let difference=a-b
console.log(difference)
let product=a*b
console.log(product)
let quotient=a/b
console.log(quotient)
confirm('a>b?')
let remainder=a%b
console.log(remainder)

//2. Print your name and age in the following format: “My name is ____, I am ____ .”
const question1=prompt('What is your name?')
const question2=prompt('How old are you?')
if(question1==='Lida'&& question2==='26'){
    console.log('My name is Lida, I am 26.')
}else if(question1==='Lida'||question2==='26'){
    alert('Partly true')
}else {
    alert("I'ts wrong")
}

//3. Declare a variable with defined value. Print the last digit of the number.
//Exampl 1.
let a=78756
a=a%10
console.log(a)
//Exampl 2.
let a=-122
a=a%10
console.log(a)
//Exampl 3.
let a=8
a=a%10
console.log(a)
//Exampl 4.
let a=0
a=a%10
console.log(a)

//4. Check whether a given number is negative. Print “yes”, if it is negative, print “no”
//otherwise.
//Exampl 1.
let number=0
if(number<0){
    alert('yes')
}else{
    alert('no')
}
//Exampl 2.
let number=-71
if(number<0){
    alert('yes')
}else{
    alert('no')
}
//Exampl 3.
let number=89
if(number<0){
    alert('yes')
}else{
    alert('no')
}

//5. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
let number1=+prompt('First number')
let number2=+prompt('Second number')
if(number1%number2===0 || number2%number1===0){
    console.log(1)
}else{
    console.log(0)
}

//6. Given any number between 1 and 12. Print the name of the respective month.
const number = +prompt()
switch (number){
    case 1:{
        console.log('January')
        break;
    }
        case 2:{
        console.log('February')
        break;
    }
        case 3:{
        console.log('March')
        break;
    }
        case 4:{
        console.log('April')
        break;
    }
        case 5:{
        console.log('May')
        break;
    }
        case 6:{
        console.log('June')
        break;
    }
        case 7:{
        console.log('July')
        break;
    }
        case 8:{
        console.log('August')
        break;
    }
        case 9:{
        console.log('September')
        break;
    }
        case 10:{
        console.log('October')
        break;
    }
        case 11:{
        console.log('November')
        break;
    }
        case 12:{
        console.log('December')
        break;
    }
}

//7. Given three numbers. Find the maximum one.
let number1=+prompt()
let number2=+prompt()
let number3=+prompt()
if(number1>number2 && number1>number3){
    console.log(number1)
}else if (number2>number1 && number2>number3){
    console.log(number2)
}else{
    console.log(number3)
}
//kam
let number1=+prompt()
let number2=+prompt()
let number3=+prompt()
if(number1>=number2 && number1>=number3){
    console.log(number1)
}else if (number2>=number1 && number2>=number3){
    console.log(number2)
}else{
    console.log(number3)
}