/*Write a function that takes an array and a chunk size as arguments and splits the array into smaller arrays (chunks) of
 the given size. If the array can't be split evenly, the last chunk should contain the remaining elements. */

 function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}


const array = [1, 2, 3, 4, 5, 6, 7];
const chunkSize = 3;
const chunkedArray = chunkArray(array, chunkSize);
console.log(chunkedArray); 
// Output: [[1, 2, 3], [4, 5, 6], [7]]
