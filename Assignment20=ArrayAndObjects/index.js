/*
 
1. Create an array named country having 5 countries name in it and perform following operation:
Print the entire array and its length
Print the country at position 3
Remove first country
Add a new country in the end
Traverse the array

*/ 

let country = ["India","Australia","England","Japan","China"];

console.log("Array is:",country);
console.log("Lenght is:",country.length);
console.log("Country at position 3 is:",country[2]);
console.log("After Removing The first country:");
country.shift();
console.log(country);
console.log("After adding new Country in the end:");
country.push("Russia");
console.log(country);
console.log("Start Traversing the array:");
for(let it of country) console.log(it);



/*

2. Create an object named employee with keys employee_name, dept, and join_year
Print object 
Print dept of the employee
delete join_year
replace employee_name with your own name

*/

// let employee = {
//     employeeName:"Anonamous",
//     dept:"IT",
//     join_year:"2025"
// }

console.log("Start Traversing the Object");
// console.log(employee);
for(let it in employee){
    console.log("Key is:",it," and Value is:",employee[it]);
}

console.log("Print Department of the Employee:",employee.dept);

console.log("After delete the join year:");
delete employee.join_year;
console.log(employee);

console.log("After replacing the employee name with your own name:");
employee["employeeName"]= "Sahil Kumar";
console.log(employee);
 


/*

3. Create a function with rest parameter and print traverse each element present in the argument
*/ 

function sum(...num){
    let total=0;
    num.forEach(it => {
        total+=it;
    });
    return total;
}

console.log("Sum of two number is:",sum(1,2));
console.log("Sum of three number is:",sum(1,2,3));
console.log("Sum of four number is:",sum(1,2,3,4));


/*

4. Create an array named numbers containing 50 numbers. Then, create a smaller array that includes all the numbers from the numbers array that are divisible by three.
*/

let arr1 = Array(50).fill().map((element,index)=>index+1);
let arr2 = [];
arr2 = arr1.filter(it=>it%3===0)

console.log(arr2);


/*

5. Create an array named i_am_array of 20 elements,
a) Print i_am_array
b) Print each element of i_am_array
c) Create a new array named teen_guna which stores each element of i_am_array multiplied
by 3
d) Print teen_guna array
e) Print the total length of teen_guna array
f) Print the type of teen_guna array as well as i_am_array
e.g. (teen_guna type is: _________) Print in this way
*/


let i_am_array = Array(20).fill().map((elem,index)=>index+1);

console.log(i_am_array);

console.log("Print Each Element of an array:");
i_am_array.forEach(it=>console.log(it));

let teen_guna = i_am_array.map(it=>it*3);
console.log(teen_guna);
console.log("Lenght of teen_guna is:",teen_guna.length);

console.log("teen_guna type is:",typeof(teen_guna));
console.log("i_am_array type is:",typeof(i_am_array));
