    // Map

// Question: Double all numbers in the array [1, 2, 3, 4, 5];

/* let array = [1,2,3,4,5];
let double = array.map(function(num){
    return num * 2;
})
console.log(double);

// Convert all strings in the array ['a', 'b', 'c'] to uppercase

let array = ['a' , 'b', 'c'];
let covertToUpperCse = array.map((x) => {
    return x.toUpperCase()
})
console.log(covertToUpperCse); 

      
           // Filter

 // Question: Get all even numbers from the array [1, 2, 3, 4, 5]

 let numbers = [1,2,3,4,5,6,7,8,9,10];
 let findEvenNum = numbers.filter((x) => {
    return x % 2 === 0
 })
 console.log(findEvenNum); 

 // Question: Get all strings in the array ['a', 'bb', 'ccc'] that have more than 2 characters

 let str = ['a', 'bb', 'ccc'];
 let getStr = str.filter((x) => {
    return x.length > 2
 })
 console.log(getStr);  

 // Calculate the sum of all numbers in the array [1, 2, 3, 4, 5]

 let numbers = [,2,3,4,5];
 let sumOfArray = numbers.reduce((acc , curr) => { // accumulator and currentValue
    return acc + curr
 },1) // initial value
 console.log(sumOfArray); 

 // Question: Concatenate all strings in the array ['a', 'b', 'c']

 let str  = ['a', 'b', 'c'];
 let addThem = str.reduce((acc, curr) => {
    return acc + curr
 })
 console.log(addThem);  */


              // Closures

function outer(){
    let username = 'suhail';
    console.log(secret);
    function inner(){
        console.log(username);
        let secret = 'ahmed'
    }
    function innerTwo(){
        console.log(secret);
    }
     inner()
     innerTwo()
}
console.log(outer());
