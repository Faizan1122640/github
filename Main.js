// Problem 1: Reverse a String

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// let reversed = reverseString("hello");
// console.log(reversed);


//Problem 2: Count Vowels in a String.

// function countVowels(str) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u',];
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// let vowelCount = countVowels("Hello World");
// console.log(vowelCount);


// Problem 3: Sum of Positive Numbers in an Array

// function sumOfPositiveNumbers(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         if (num > 0) {
//             sum += num;
//         }
//     }
//     return sum;
// }
// let positiveSum = sumOfPositiveNumbers([1, -4, 7, 12]);
// console.log(positiveSum);


// Problem 4: Filter Odd or Even Numbers from an Array

// function filterOddOrEven(arr) {
//     let evenNumbers = [];
//     let oddNumbers = [];
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             evenNumbers.push(num);
//         } else {
//             oddNumbers.push(num);
//         }
//     }
//     return { even: evenNumbers, odd: oddNumbers };
// }
// let filteredNumbers = filterOddOrEven([1, 2, 3, 4, 5]);
// console.log(filteredNumbers);


// Problem 5: Flatten a One-Level Nested Array

// function flattenArray(arr) {
//     let flatarr = arr.flat();
//     return flatarr;
// }
// let flatten = flattenArray([1, [2, 3], [4, 5], 6]);
// console.log(flatten);


// Problem 6: Remove Duplicates from an Array 

// function removeDuplicates(arr) {
//     let removed = [...new Set(arr)];
//     return removed;
// }
// let uniqueValues = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// console.log(uniqueValues);


// Problem 7: Find the Longest Word in a Sentence 

// function findLongestWord(str) {
//     let words = str.split(' ');
//     let longestWord = '';
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// let longest = findLongestWord("Web development is fun");
// console.log(longest);


