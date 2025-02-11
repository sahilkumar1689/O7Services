// Admin Section:
let productName = document.querySelector("#productName");
let productPrice = document.querySelector("#productPrice");
let itemUnit = document.querySelector("#itemUnits");

let nameBtn = document.querySelector("#nameBtn");
let priceBtn = document.querySelector("#priceBtn");

let message1 = document.querySelector(".message1");

let ProductArr = [];

nameBtn.addEventListener("click",()=>{
    let name = productName.value;
    if(name==""){
        window.alert("Please Enter the Product Name.");
    }
    else{
        itemUnit.innerHTML += `<option value="${name}">${name}</option>`;
        productName.value = "";
        
        message1.innerHTML = `<p style="color:green">Product -${name} Added in the list.</p>`;
        setTimeout(()=>{
            message1.innerHTML = "";
        },2000);
    }
});

priceBtn.addEventListener("click",()=>{
    let price = productPrice.value;
    if(price==""){
        window.alert("Please Enter the Product Price.");
    }
    else{
        productPrice.value = "";
        
        let itemName = itemUnit.value;
        
        message1.innerHTML = `<p style="color:green">Successfully Set ${itemName} price to ${price}</p>`;
        ProductArr.push({ProductName:itemName,ProductPrice:price});
        console.log(ProductArr);
        setTimeout(()=>{
            message1.innerHTML = "";
        },2000);
    }
});


// CheckOut Section:

let transactionBtn = document.querySelector(".transactionBtn");
let cartBtn = document.querySelector(".cartBtn");
let message2 = document.querySelector(".message2");

let totalItmeUnit = document.querySelector("#itemUnit");
let unit = document.querySelector("#unit");

let unitsBtns = document.querySelector(".unitsBtns");

unitsBtns.addEventListener("click",(event)=>{
    unit.value += event.target.innerText;
});

transactionBtn.addEventListener("click",()=>{
    if(ProductArr.length == 0){
        window.alert("Please Enter the Products.");
    }
    else{
        ProductArr.forEach((it,ind)=>{
            totalItmeUnit.innerHTML += `<option value="${ind}">${it.ProductName} $ ${it.ProductPrice}Unit</option>`;
        });

        message2.innerHTML = '<p style="color:green; font-size:12px">All the Products add Successfully.Enter the total number of Units.</p>';

        setTimeout(()=>{
            message2.innerHTML = "";
        },2000);
    }
});

cartBtn.addEventListener("click",()=>{
    let totalUnit = unit.value;
    if(totalUnit==""){
        window.alert("Please enter the total number of Units.");
    }
    else{
        unit.value="";
        let selectItem = totalItmeUnit.value;

        ProductArr[selectItem].totalUnits = totalUnit;
        window.alert("Added to Cart.");
    }
});

// Receipt Section:

let payBtn = document.querySelector(".pay");
let message3 = document.querySelector(".message3");


payBtn.addEventListener("click",()=>{
    if(ProductArr.length == 0){
        window.alert("Please Enter the products to generate the receipt.");
    }
    else{
        document.querySelector("#temptable").style.display = "none";
        
        let totalPrice = 0;
        ProductArr.forEach(it=>{
            totalPrice += ((it.ProductPrice)*(it.totalUnits));
        });


        // Adding the date and time:
        let obj = new Date();

        message3.innerHTML = `
            <p>Date: ${obj.toLocaleDateString()}</p>
            <p>Time: ${obj.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</p>
            <table border="1">
              <thead>
                <tr>
                  <th>Products</th>
                  <th>$/Unit</th>
                  <th>Unit(s)</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody id="tableBody"></tbody>
            </table>
            <p>Total Amount: ${totalPrice}</p>
            <p>Taxes: ${totalPrice*0.18}</p>
            <p>Amount Due: ${(totalPrice*0.18)+totalPrice}</p>
        `;

        let tableBody = document.querySelector("#tableBody");
        ProductArr.forEach((it)=>{
            tableBody.innerHTML += `<tr>
                <td>${it.ProductName}</td>
                <td>${it.ProductPrice}</td>
                <td>${it.totalUnits}</td>
                <td>${(it.ProductPrice)*(it.totalUnits)}</td>
            </tr>`;
        });
    }
});


















