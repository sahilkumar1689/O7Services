/*

1. Create an array named i_am_array of 20 elements,  
a) Print i_am_array
b) Print each element of i_am_array
c) Create a new array named teen_guna which stores each element of i_am_array multiplied
by 3
d) Print teen_guna array
e) Print the total length of teen_guna array
f) Print the type of teen_guna array as well as i_am_array
e.g. (teen_guna type is: _________) Print in this way
(use Map for the question)

*/

// let i_am_array = Array(20).fill().map((elem,idx)=>idx+1);
// let teen_guna = [];

// console.log(i_am_array);
// i_am_array.forEach(it=>console.log(it));

// teen_guna = i_am_array.map(it=>it*3);
// console.log(teen_guna);
// console.log("Length of teen_guna is:",teen_guna.length);
// console.log("teen_guna type is:",typeof(teen_guna));
// console.log("i_am_array type is:",typeof(i_am_array));


/*

2. Create an array of 40 elements named as array_forty
a) Print array_forty with its length
b) Create a new array named as chotu_array which stores only the element of array_forty
which are even
c) Print chotu_array and its length
(use Filter for the question)

*/

// let array_forty = Array(40).fill().map((elem,ind)=>ind+1);

// let chotu_array = array_forty.filter(it=>{
//     if(it%2==0) return it;
// });

// console.log(chotu_array);
// console.log("Length of chotu array is:",chotu_array.length);


/*

3. Create an array of country and use foreach to print the country name

*/

// let country = ["India","Australia","England","Russia","Germany","Italy","America","Japan","China"];

// country.forEach(it=>console.log(it));

/*

5. Create a digital timer which prints time on console with each second.

*/

// setInterval(()=>{
//     let customDate = new Date();
//     console.log(customDate.getHours()," : ",customDate.getMinutes()," : ",customDate.getSeconds());
// },1000);

// 4. Zomato data question lies in the zomato.js file due to large content.