let heroImage = document.getElementById("heroImage");
let childImages = document.getElementsByClassName("childImages");

for(let i=0;i<childImages.length;i++){
    childImages[i].addEventListener("mouseenter",(event)=>{
        heroImage.src = `${event.target.src}`;
    });
    childImages[i].addEventListener("mouseleave",(event)=>{
        heroImage.src = `Images/heroImage.jpg`;
    });
};