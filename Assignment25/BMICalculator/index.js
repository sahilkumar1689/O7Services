let weight = document.getElementById("weight");
let height = document.getElementById("height");

let submitBtn = document.getElementById("submitButton");

submitBtn.addEventListener("click",()=>{
    let bmiResult = (weight.value)/((height.value)/100)**2;

    weight.value = "";
    height.value = "";

   let userOutput = document.getElementById("userOutput");
   userOutput.innerHTML = `<p>Your BMI score is:${bmiResult}</p>`;
   
   if(bmiResult<18.5){
       userOutput.innerHTML += `<p style="color:red">Caution!your are underweight.</p>`;
   }
   else if(bmiResult>=18.5 && bmiResult<25){
       userOutput.innerHTML += `<p style="color:green" >Hurray!your BMI score is Normal.</p>`;
   }
   else if(bmiResult>=25 && bmiResult<30){
       userOutput.innerHTML += `<p style="color:yellow">Caution!your BMI are overweight.</p>`;
    }
    else{
        userOutput.innerHTML += `<p style="color:brown">Caution!your BMI are obesity .</p>`;
   }

});
