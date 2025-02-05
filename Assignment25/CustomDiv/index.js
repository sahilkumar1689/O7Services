let submitBtn = document.getElementById("submitButton")

submitBtn.addEventListener("click",()=>{
    let customContainer = document.getElementById("customContainer");
    let inputDivs = document.getElementsByClassName("userValues");

    let userValuesArr = [];
    for(let i=0;i<inputDivs.length;i++){
        userValuesArr.push(inputDivs[i].value);
        inputDivs[i].value = "";
    };

    customContainer.style.color = userValuesArr[0];
    customContainer.style.backgroundColor = userValuesArr[1];
    customContainer.style.width = userValuesArr[2];
    customContainer.style.height = userValuesArr[3];
    customContainer.innerText = userValuesArr[4];

});
