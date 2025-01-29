
// 1. Create a function named remainder which take one argument y and prints the remainder of y if divided by 3:

function remainder(y){
    return (y%3);
}

// 2. Create a function which takes one argument as a number and tells if the number is even or odd:

function greater(x,y){
    return ((x>y)?x:y);
}

// 3. Create an arrow function named equal which takes two arguments and tells if the two arguments are equal or not:

const equals = (x,y)=>{
    if(x===y) console.log(x," and ",y," are equals.");
    else console.log(x," and ",y," are not equals.");
}

// 4. Create any pure function of your choice = A pure function is a function Always returns the same result for the same argument values.Has no side effects, such as modifying an argument or global variable.The only result of calling a pure function is the return value.Depends only on its declared inputs and internal algorithm to produce its output.Does not read or modify any values in the outside world.

function pureFunction(x){
    return x*x;
}

// 5. Create an arrow function which takes one argument as price and calculates the GST of the item, if the total is more than 1000 then there will be no shipping charge to the items, if the total is more than 500 then shipping charge will be 50 and if the total is less than 500 then shipping charge will be 100:

const gstCal = (price)=>{
    let ans = price + (price*0.18);
    return ans;
}

const totalCharges = (price)=>{
    let totalPrice = gstCal(price);

    if(totalPrice>=1000){
        console.log("Your total amount is greather that 1000 ,so you no need to pay Shipping charges.");
        console.log("Your total Payable amount becomes:",totalPrice);
    }
    else if(totalPrice>=500){
        console.log("Your total amount is greather that 500 but less that 1000,so you need to pay 50rs extra Shipping charges.");
        console.log("Your total Payable amount becomes:",totalPrice+50);
    }
    else{
        console.log("Your total amount is less that 500 ,so you need to pay 100rs extra Shipping charges.");
        console.log("Your total Payable amount becomes:",(totalPrice+100));
    }
}




// console.log(remainder(5));

// console.log("Greather Number is:",greater(4,5));

// equals(5,5);

// console.log(pureFunction(5));

totalCharges(1000);