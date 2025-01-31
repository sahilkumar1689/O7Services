/*
 
1. Create an array named country having 5 countries name in it and perform following operation:
Print the entire array and its length
Print the country at position 3
Remove first country
Add a new country in the end
Traverse the array

*/ 

// let country = ["India","Australia","England","Japan","China"];

// console.log("Array is:",country);
// console.log("Lenght is:",country.length);
// console.log("Country at position 3 is:",country[2]);
// console.log("After Removing The first country:");
// country.shift();
// console.log(country);
// console.log("After adding new Country in the end:");
// country.push("Russia");
// console.log(country);
// console.log("Start Traversing the array:");
// for(let it of country) console.log(it);



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

// console.log("Start Traversing the Object");
// // console.log(employee);
// for(let it in employee){
//     console.log("Key is:",it," and Value is:",employee[it]);
// }

// console.log("Print Department of the Employee:",employee.dept);

// console.log("After delete the join year:");
// delete employee.join_year;
// console.log(employee);

// console.log("After replacing the employee name with your own name:");
// employee["employeeName"]= "Sahil Kumar";
// console.log(employee);
 


/*

3. Create a function with rest parameter and print traverse each element present in the argument
*/ 

// function sum(...num){
//     let total=0;
//     num.forEach(it => {
//         total+=it;
//     });
//     return total;
// }

// console.log("Sum of two number is:",sum(1,2));
// console.log("Sum of three number is:",sum(1,2,3));
// console.log("Sum of four number is:",sum(1,2,3,4));


/*

4. Create an array named numbers containing 50 numbers. Then, create a smaller array that includes all the numbers from the numbers array that are divisible by three.
*/

let arr1 = Array(5).fill().map((element,index)=>index+1);
console.log(arr1);