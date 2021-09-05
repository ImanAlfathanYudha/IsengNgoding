// Fundamentals Assessment
// Instructions
// Do not google for solutions
// Use any programming languages that you are comfortable with
// Write syntactically correct solutions
// Write readable, production quality code (e.g. use readable variable names, short functions, ...)
// Do not use libraries that immediately give you the solutions like arr.Min()
// Consider edge cases
// Write some tests for your solution

// Logic [25mins]
// [1] Given an array of integers, find the smallest integer [10 mins]

let test = [1,2,3,4,5]
let test2 = [2,4,1,3,5]
let test3 = [5,4,3,2,1]
let test4 = [1,1,1,1,0,1,1,1,1]
console.log("Tes result ", findSmallestInteger(test))

function findSmallestInteger(arrayOfInteger) {
let smallestInteger=arrayOfInteger.length>0 ? arrayOfInteger[0]:nil;
    for(let i=1;i<arrayOfInteger.length();i++){
        if(smallestInteger>arrayOfInteger[i]){
            smallestInteger=arrayOfInteger[i]
}
return smallestInteger;
}

// Logic [2] Given an array of integers, count the number of times, each integer occurs. Store the counts in a suitable data structure and return it. [5mins]

// let test = [1,1,1,2,3,3]

// 1=3, 2=1, 3=2

function countNumberofTimesInArray(arrayOfInteger) {
    if (arrayOfInteger.length()==0){    
        return nil;
}
    let mapOfInteger = new Map();
    for (let i=1;i<arrayOfInteger.length();i++){
        if (mapOfInteger.has(arrayOfInteger[i])) {
mapOfInteger.setValue(arrayOfInteger[i],mapOfInteger.getValue(arrayOfInteger[i])+1)
        } else {
            mapOfInteger.set(arrayOfInteger[i], 1)
        }
}
return mapOfInteger
}



// Logic
// [3] Calculate the checksum of an integer array given the following criteria: Sum all the integers that have the same integer immediately after it. Compare the last integer to the first integer. [10mins]

// e.g.
// In the following array, the 1st integer is equal to the 2nd integer and the 3rd integer is equal to the 4th integer.
// 1     1     2     2
// 1  =   1     2   =   2  
// Answer: 1 + 2 = 3

// There are no integers where the integer after it is equal to it
// 1     2     1     2
// Answer: 0

// Every integer is equal to the integer after it, including the last integer that is equal to the first integer.
// 1     1     1     1
// 1   =  1  =   1  =   1  =  (first integer)
// Answer: 1 + 1 + 1 + 1 = 4

// In the following array, the second integer is equal to the third integer and the 4th integer is equal to the first integer.
// 3     2     2     3
// 3     2  =   2     3 =  (first integer)
// Answer: 2 + 3 = 5

// 1 1 1 2 => 2
// 2 1 1 1 2 => 4
// 2 1 1 1 2 2 =>?

function checkSumArrayofInteger(arrayOfInteger) {
    if (arrayOfInteger.length()==0){    
        return nil;
} else if (arrayOfInteger.length()==1) {
    return 0
}
let checkSum=0
    for(let i=0;i<arrayOfInteger.length()-1;i++) {
        if (i==arrayOfInteger.length()-1){
            if(arrayOfInteger[i] == arrayOfInteger[0]){
    Checksum +=arrayOfInteger[i]
}
} else {
if(arrayOfInteger[i]==arrayOfInteger[i+1]){
                Checksum +=arrayOfInteger[i]
}
}
        }
    return checkSum
}}

// function checkSumArrayofInteger(arrayOfInteger) {
//     if (arrayOfInteger.length()==0){    
//         return nil;
// } else if (arrayOfInteger.length()==1) {
//     Return 0
// }
// let checkSum=0
//     for(let i=0;i<arrayOfInteger.length()-1;i++) {
//         nextIdx = ? //abstraction
//         if(arrayOfInteger[i] == arrayOfInteger[nextIdx]){
// Checksum +=arrayOfInteger[i]
// }
//     return checkSum
// }
