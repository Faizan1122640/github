//  a function that finds the largest number in an array.
let array = [1, 2, 3, 4, 5, 60, 7, 8, 9, 10];
function Findlargestnumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Write a function that adds two numbers and returns the result.
   let n1 = prompt("Enter first number:");
   let n2 = prompt("Enter second number:");
   function addTwoNumbers(n1, n2) {
       return parseFloat(n1) + parseFloat(n2);
   }
   let sum = addTwoNumbers(n1, n2);
   return sum;
   