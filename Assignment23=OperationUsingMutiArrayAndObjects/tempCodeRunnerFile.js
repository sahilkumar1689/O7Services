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
//         song_name: "Despacito",
//         singer: "Luis Fonsi",
//         language: "Spanish"
//     },
//     {
//         song_name: "Nadania",
//         singer: "Arijit Singh",
//         language: "Hindi"
//     },
//     {
//         song_name: "Blinding Lights",
//         singer: "The Weeknd",
//         language: "English"
//     },
//     {
//         song_name: "Senorita",
//         singer: "Shawn Mendes",
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

let foodItems = {
    veg:{
        w:"wheat",
        c:"cheese",
    },
    non_Veg:{
        ck:"chicken Kabaab",
        ec:"Egg Curry",
    },
}

console.log(foodItems.veg.c);