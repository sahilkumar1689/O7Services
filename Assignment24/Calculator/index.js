let a = window.prompt("Please enter the first variable:");
let b = window.prompt("Please enter the second variable:");

let sum = parseInt(a)+parseInt(b);

console.log("Sum of ",a," and ",b," is:",sum);

document.querySelector(".sum").innerHTML = `Sum of ${a} and ${b} is: ${sum}`;
