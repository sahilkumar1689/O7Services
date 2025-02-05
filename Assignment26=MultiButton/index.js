// Select the input tags:
let input1 =document.getElementById("input1");
let input2 =document.getElementById("input2");
let input3 =document.getElementById("input3");
let input4 =document.getElementById("input4");


// Select the buttons:
let inputButton1 =document.getElementById("1");
let inputButton2 =document.getElementById("2");
let inputButton3 =document.getElementById("3");
let inputButton4 =document.getElementById("4");
let inputButton5 =document.getElementById("5");

// Select the divs:
let div1 =document.getElementById("bottom1");
let div2 =document.getElementById("bottom2");


// Button 1 Functionality:
inputButton1.addEventListener("click",()=>{
    input2.value = input1.value;
});

// Button 2 Functionality:
inputButton2.addEventListener("click",()=>{
    let flag=1;
    for(let i=1;i<=3;i++){
        if(i==1) window.alert(`${input2.value}`);
        else if(i==2) window.alert(`${div1.innerText}`);
        else window.alert(`${div2.innerText}`);
    }
});

// Button 3 Functionality:
inputButton3.addEventListener("click",()=>{
    div2.innerText = input2.value;
});

// Button 4 Functionality:
inputButton4.addEventListener("click",()=>{
    div1.innerText += `${input2.value}${div2.innerText}`;
});
// Button 5 Functionality:
inputButton5.addEventListener("click",()=>{
    input1.classList.add("button5");
    input2.classList.add("button5");

    input3.classList.remove("button5");
    input4.classList.remove("button5");

    div2.style.backgroundImage = "url('heroImage.jpg')";

});





