
setInterval(()=>{
    let obj = new Date();
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    };
    const dayName = (obj.toLocaleDateString('en-US', options)).replaceAll(",","");
    document.querySelector(".dateContainer").innerHTML = `
        <p>${dayName} GMT+0530 (India Standard Time)</p>
        <p>${obj.getHours()} Hours</p>
        <p>${obj.getMinutes()} Minutes</p>
        <p>${obj.getSeconds()} Seconds</p>
    `;
},1000);
