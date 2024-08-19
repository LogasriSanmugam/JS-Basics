function filterNamesByLetter(userNames, letter) {
    return userNames.filter(name => name.startsWith(letter));
}

// Example usage:
const userNames = ['Alice', 'Bob', 'Charlie', 'Aiden', 'Briana'];
const letter = 'A';
const result = filterNamesByLetter(userNames, letter);

console.log(result); // Output: ['Alice', 'Aiden']
