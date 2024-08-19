//Write a JavaScript function that takes an array of user names and a letter, and returns a new array containing only the names that start with that letter.
function filterNamesByLetter(userNames, letter) {
    return userNames.filter(name => name.startsWith(letter));
}

const userNames = ['Alice', 'Bob', 'Charlie', 'Aiden', 'Briana'];
const letter = 'A';
const result = filterNamesByLetter(userNames, letter);

console.log(result); // Output: ['Alice', 'Aiden']
