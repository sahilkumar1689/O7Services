let amount = parseInt(window.prompt("Please Enter the amount in order to calculate the gst:"));

let gst = amount*(0.18);
let total = amount+gst;

document.querySelector(".gstContainer").innerHTML = `<p>Your Amount is:${amount}</p>
    <p>Your gst is:${gst}</p>
    <p>Your total is:${total}</p>
`;
