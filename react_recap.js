/*
How to use map method : 
Easiest way of understand 

print the array of square of the values from the numbers array

example : 

let numbers = [1, 2, 3, 4, 5, 8, 9];

function squarer(value, index, array){
    return value ** 2; //  [1, 4, 9, 16, 25, 64, 81]
    // return index; // print only the index
    // return array[index]; // [1, 2, 3, 4, 5, 8, 9]
}

console.log(numbers.map(squarer));

// Different ways to execute this code compatability and code review

let second_way = (value, index, array) => {
    return array[index] ** 3
}

console.log(numbers.map(second_way));
// o/p : [1, 8, 27, 64, 125, 512, 729]

//Third way : still reducing code lines

let third_way = numbers.map((value, index, array) => array[index] ** 3);
console.log("Third way :", third_way)

//o/p : 
// Third way : [1, 8, 27, 64, 125, 512, 729]

---------------------------------------------------------
Another example : 

let fruits = ['apple', 'banana', 'orange', 'grapes', 'pineapple', 'pomegranate', 'mangoes'];

// to find the length of the fruit name
//This is one way

let fruitLen = fruits.map((fruitName) =>  `${fruitName} : It has ${fruitName.length} words`);
console.log(fruitLen)

o/p : 
['apple : It has 5 words', 'banana : It has 6 words', 'orange : It has 6 words', 
'grapes : It has 6 words', 'pineapple : It has 9 words', 'pomegranate : It has 11 words', 
'mangoes : It has 7 words']

//This is second way

let fruitLength = [];

for (fruitName of fruits){
    fruitLength.push(fruitName.length);
}

console.log(fruitLength);

o/p  : [5, 6, 6, 6, 9, 11, 7]
---------------------------------------------------------

Reduce method : 


let numbers = [1, 2, 3, 4, 5, 8, 9];
// find sum of all the numbers in the 'numbers' array

Note : Should return the previous value if not it will print it as undefined

function sumReducer(previousValue, currentValue){
    console.log(`Previous Value : ${previousValue} and Current Value : ${currentValue}`);
    return previousValue + currentValue; --> must return the previous value
}


console.log(`The sum of all numbers is : ${numbers.reduce(sumReducer)}`);

How it will works : 

previousValue = 1
currentValue = 2

previousValue = PreviousValue + currentValue; 1 + 2
previousValue = PreviousValue + currentValue; 3 + 3
previousValue = PreviousValue + currentValue; 6 + 4 
previousValue = PreviousValue + currentValue; 10 + 5
previousValue = PreviousValue + currentValue; 15 + 8
previousValue = PreviousValue + currentValue; 23 + 9

o/p : 

Previous Value : 1 and Current Value : 2
Previous Value : 3 and Current Value : 3
Previous Value : 6 and Current Value : 4
Previous Value : 10 and Current Value : 5
Previous Value : 15 and Current Value : 8
Previous Value : 23 and Current Value : 9
The sum of all numbers is : 32

.................................................................

let numbers = [1, 2, 3, 4, 5, 8, 9]; --> it represents currentValue
// find sum of all the numbers in the 'numbers' array

function sumReducer(previousValue, currentValue, index, array){
    console.log(`Previous Value : ${previousValue} and Current Value : ${currentValue} 
    and the index : ${index} and the Array is ${array}`);
    return previousValue + currentValue;
}


console.log(`The sum of all numbers is : ${numbers.reduce(sumReducer, 10)}`);

Note : this '10' will take it as initialValue

o/p : 

Previous Value : 10 and Current Value : 1 and the index : 0 and the Array is 1,2,3,4,5
Previous Value : 11 and Current Value : 2 and the index : 1 and the Array is 1,2,3,4,5
Previous Value : 13 and Current Value : 3 and the index : 2 and the Array is 1,2,3,4,5
Previous Value : 16 and Current Value : 4 and the index : 3 and the Array is 1,2,3,4,5
Previous Value : 20 and Current Value : 5 and the index : 4 and the Array is 1,2,3,4,5
The sum of all numbers is : 25
................................................................................

Problem : If duplicate is found then dont push it or else push it

note : .includes will return boolean value


let numbers = [1, 2, 3, 4, 5, 4, 8, 9, 2, 1, 6, 3, 7, 2, 8, 7];
// remove all the duplicates from the array


function removeDuplicates(previousValue, currentValue){
    if(!previousValue.includes(currentValue)){
        // console.log(...previousValue.sort((a, b) => a - b))
        return [...previousValue, currentValue];
    } else {
        return previousValue;
    }
}


console.log(numbers.reduce(removeDuplicates, []).sort((a, b) => a - b));

here we give empty array as previous value '(numbers.reduce(removeDuplicates, []), 
the we are sorting it.

o/p : 

[1, 2, 3, 4, 5, 6, 7, 8, 9]

-------------------------------------------------------------------
filter : 

problem : seperate the even number and return it as array


let numbers = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10];

let displayEven = (value) => {
    if(value % 2 == 0){
        return value;
    }
}

console.log(numbers.filter(displayEven));

o/p : [2, 4, 6, 8, 10]

console.log(numbers.filter((value) => value % 2 != 0));

o/p : [1, 3, 5, 7, 9]
...........................................

let fruits = ['apple', 'banana', 'orange', 'grapes', 'pineapple', 'pomegranate', 'mangoes'];

console.log(fruits.filter(fruit => fruit.includes('ap')));

it will check for the word which contains 'ap' and will print it

o/p : ['apple', 'grapes', 'pineapple']
----------------------------------------------------------

Classes : It means a template or blue print

2 types it can be used : 
1. function prototype
2. class syntax

This is class syntax : 

class Student {
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    isEligible(){
        if(this.age > 18){
            return true;
        } else {
            return false;
        }
    }

    printDetails(){
        console.log('The student Details : ');
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Vote Eligibilty : ${this.isEligible() ? 'Eligible' : 'Not Eligible'}`);
        console.log('-----------------------------')
    }
}

//create a new student

let student01 = new Student('kalil', 24);
let student02 = new Student('kasheef', 14);

student01.printDetails();
student02.printDetails();

o/p : 

The student Details : 
Name : kalil
Age : 24
Vote Eligibilty : Eligible
 -----------------------------
The student Details : 
Name : kasheef
Age : 14
Vote Eligibilty : Not Eligible
-----------------------------

------------------------------------------------------------------------------
Promises : May be it will get resolved in the future
The object represent a value that is not available yet, but is expected
to become available at some point in the future

promises states : 
1. Pending
2. Fulfilled
3. rejected


Example : 


let delayBySomeSec = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds)
    })
}


delayBySomeSec(2000).then(() => console.log('One second completed'))
o/p :
One second completed

................................................................


*/







