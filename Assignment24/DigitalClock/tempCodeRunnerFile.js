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

console.log(dayName);
// setInterval(()=>{

// },1000);
