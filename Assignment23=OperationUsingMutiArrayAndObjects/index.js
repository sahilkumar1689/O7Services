/*

1. create an array named songs which have common object keys: 'song_name', 'singer', 'language':
(a) add 5 different songs using the push method.
(b) print all song names with their singers and language.
(c) print song name at location 3 of the array.

*/

// let songs = [];

// songs.push(
//     {
//         song_name: "Shape of You",
//         singer: "Ed Sheeran",
//         language: "English"
//     },
//     {
//         song_name: "See You Again",
//         singer: "Charlie Puth",
//         language: "English"
//     },
//     {
//         song_name: "Joh Tum Mere Ho",
//         singer: "Anuv Jain",
//         language: "Hindi"
//     },
//     {
//         song_name: "We Don't Talk AnyMore",
//         singer: "Charlie Puth",
//         language: "English"
//     },
//     {
//         song_name: "Cheap Thrill",
//         singer: "Sia",
//         language: "English"
//     }
// );

// // (b) print all song names with their singers and language.
// songs.forEach(song => {
//     console.log(`Song: ${song.song_name}, Singer: ${song.singer}, Language: ${song.language}`);
// });

// // (c) print song name at location 3 of the array.
// console.log(`Song at location 3: ${songs[2].song_name}`);



/*

2. Create a three dimensional array of your own choice (array-in array-in array).

*/ 

// let threeDimensionalArray = [
//     [
//         [1,2,3],[4,5,6]
//     ],
//     [
//         [7,8,9],[10,11,12]
//     ],
//     [
//         [13,14,15],[16,17,18]
//     ],
// ];


/*

3. Create an object of food items having 2 keys: veg & non_veg. the 'veg' key contains again an object with the keys 'w' for wheat and 'c' for cheese, whereas 'non_veg' key contains an object having keys 'ck' for chicken kabaab and 'ec' for egg curry.
(a) write syntax for printing cheese.

*/ 

// let foodItems = {
//     veg:{
//         w:"wheat",
//         c:"cheese",
//     },
//     non_Veg:{
//         ck:"chicken Kabaab",
//         ec:"Egg Curry",
//     },
// }

// console.log(foodItems.veg.c);


/*

4. Write a function that takes a nested array and returns a flattened array (an array without any nested arrays).
Example: if we pass this array const nestedArray = [1, [2, [3, [4, 5]]]]; we get [1,2,3,4,5] flattened array 

*/

// function getFlatArray(arr){
//     return arr.flat(Infinity);
// }

// let flatArr = getFlatArray([1, [2, [3, [4, 5]]]]);
// console.log(flatArr);


// 5. Shallow Copy = It is the mechanism in which the two arrays or objects are pointed to the same memory location.Hence,the result is the if we try do some modification in one array or object it will automatically reflected in the other also beacuse internally they pointed the same memory location."=" symbol is used to create the shallow copy.

// Deep Copy = It is the mechanism in which the two arrays or objects are not pointed to the same memory location they pointed to the independent memory loaction.Hence the reuslt is the changes in one not reflected in the changes in other.
// There are two ways to implement deep copy:
// 1. Using JSON.parse() and JSON.stringify().
// 2. Using lodash library method name called clonedeep().

// Hoisting = In javascript it is simply a mechanism by using which the variable or function declaration are moved to the top of their scope during the compilation process.The "var" variable is hoisted but the "let or const" are not hoisted similarly the "function declaration" is hoisted but the f"unction expression" cannot be hoisted.


