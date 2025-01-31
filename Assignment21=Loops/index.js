/*

1. Create a function which takes one argument and prints its table For E.g 2*1=2, 2*2=4...
*/


let printTable = (num)=>{
    console.log("Table of ",num," are as follow:");
    for(let i=1;i<=10;i++){
        console.log(num," * ",i," = ",num*i);
    }
}


printTable(2);


/*

2. Create a function in which we can pass any string and it prints each letter of that string 
              For ex.  printName("ajay") 
              output - 
              a
              j
             a
             y


*/

let printName = (name)=>{
    for(let it of name) console.log(it);
}

printName("ajay");


/*

3. Create a loop which gives the following output - 
            1,1,1 
            1,1,2
            1,1,3
            1,2,1
            1,2,2
            1,2,3
*/

let i=0;
let num1=1;
let num2=1;

while(i!=6){
    if(num1<=3){
        console.log("1 , 1 ,",num1);
        num1++;
    }
    else{
        console.log("1 , 2 ,",num2);
        num2++;
    }
    i++;
}   
