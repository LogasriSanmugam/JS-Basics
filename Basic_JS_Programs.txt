1. Print even numbers in an array

function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

2. Find the maximum element in an array

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

3. Count vowels in an array

function countVowels(arr) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (arr[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}

4. Count consonants in an array

function countConsonants(arr) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 'a' && arr[i] <= 'z' && vowels.indexOf(arr[i]) === -1) {
            count++;
        }
    }
    return count;
}

5. Reverse a string

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

6. Find the first occurrence of a specific number in an array

function findFirstOccurrence(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

7. Find the first even number in an array

function findFirstEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return arr[i];
        }
    }
    return -1; // If no even number is found
}

8. Sum of squares in an array

function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

9. Find the first non-zero number in an array

function findFirstNonZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            return arr[i];
        }
    }
    return -1; // If no non-zero number is found
}

10. Count the uppercase letters in a string

function countUppercase(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
        }
    }
    return count;
}

11. Number of spaces in a sentence

function countSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
    return count;
}

12. Return special characters in a string

function findSpecialCharacters(str) {
    let specialChars = '';
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] >= 'A' && str[i] <= 'Z') && 
            !(str[i] >= 'a' && str[i] <= 'z') && 
            !(str[i] >= '0' && str[i] <= '9')) {
            specialChars += str[i];
        }
    }
    return specialChars;
}

13. Check if an array is a palindrome

function isPalindromeArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
14. Check if a character is a numeric digit or not

function isNumericDigit(char) {
    return (char >= '0' && char <= '9');
}
 
15. Find the first repeated character in a string

function findFirstRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return str[i];
            }
        }
    }
    return null; // If no repeated character is found
}

16. Find lowercase letters in an array

function findLowerCaseLetters(arr) {
    let lowerCaseLetters = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 'a' && arr[i] <= 'z') {
            lowerCaseLetters.push(arr[i]);
        }
    }
    return lowerCaseLetters;
}
17. Find the first negative number in an array
function findFirstNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return arr[i];
        }
    }
    return null; // If no negative number is found
}
18. Find the longest string in an array
function findLongestString(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
19. Find numbers divisible by 3 and 5 in an array
function findDivisibleBy3And5(arr) {
    let divisibleNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            divisibleNumbers.push(arr[i]);
        }
    }
    return divisibleNumbers;
}
20. Print non-repeated characters in a string
function printNonRepeatedCharacters(str) {
    for (let i = 0; i < str.length; i++) {
        let isRepeated = false;
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                isRepeated = true;
                break;
            }
        }
        if (!isRepeated) {
            console.log(str[i]);
        }
    }
}
21. Find multiples of numbers in an array
function findMultiples(arr, multipleOf) {
    let multiples = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % multipleOf === 0) {
            multiples.push(arr[i]);
        }
    }
    return multiples;
}
22. Find the first repeated character in a string
function findFirstRepeatedCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return str[i];
            }
        }
    }
    return null; // If no repeated character is found
}
23. Find the product of all elements in an array
function productOfArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}
24. Check if all elements in an array are positive
function allPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            return false;
        }
    }
    return true;
}
25. Count the number of words in a sentence
function countWords(sentence) {
    let wordCount = 0;
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            if (!inWord) {
                inWord = true;
                wordCount++;
            }
        } else {
            inWord = false;
        }
    }

    return wordCount;
}

