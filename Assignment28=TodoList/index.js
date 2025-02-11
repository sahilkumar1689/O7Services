let todoInput = document.querySelector("#todo");
let addBtn = document.querySelector("#addToDo");
let todoContainer = document.querySelector(".todoContainer");

StarterFunction();

function StarterFunction(){
    setAllTask();
    setTask();
    strikeStyle();
}

function setAllTask(){
    let todoArr = JSON.parse(localStorage.getItem("todoArr")) || new Array();

    if(todoArr.length == 0){
        todoContainer.innerHTML = `<p>Hurry! No Task</p>`;
    }
    else{
        let html="";

        todoArr.forEach((elem,ind)=>{
            html += `<div class="todoItems">
            <div class="">
            <input type="checkbox" class="checkbox">
            <span class="todoName">${elem}</span>
            </div>
          <div class="btnContainer">
            <button id=${ind} onclick ="editBtn(this.id)">Edit</button>
            <button id=${ind} onclick ="deleteBtn(this.id)">Delete</button>
          </div>
        </div>
        <hr />`
        });
        todoContainer.innerHTML =html;
    }
};

function setTask(){
    addBtn.addEventListener("click",()=>{
        let userTask = todoInput.value;

        if(userTask==""){
            window.alert("Please enter any task.");
        }
        else{
            todoInput.value="";

            let todoArr = JSON.parse(localStorage.getItem("todoArr")) || new Array();

            todoArr.push(userTask);

            localStorage.setItem("todoArr",JSON.stringify(todoArr));
            
            setAllTask();
            strikeStyle();
        }
    });
};

function editBtn(ind){
    let newToDo =  window.prompt("Please Edit Your ToDo List:");

    let todoArr = JSON.parse(localStorage.getItem("todoArr"));
    todoArr[ind] = newToDo;
    localStorage.setItem("todoArr",JSON.stringify(todoArr));

    setAllTask();
    strikeStyle();
}

function deleteBtn(ind){
    let checkbox = document.querySelectorAll(".checkbox");
    if(!(checkbox[ind].checked)){
        window.alert("Your Task is not Completed Yet.");
        let userDecision = window.prompt("Are you Sure you want to delete press 1 or 0:");
    
        if(userDecision == "0"){
            return;
        }
    }

    let todoArr = JSON.parse(localStorage.getItem("todoArr"));
    todoArr.splice(ind,1);
    localStorage.setItem("todoArr",JSON.stringify(todoArr));
        
    setAllTask();
    strikeStyle();
}

function strikeStyle(){
    let checkbox = document.querySelectorAll(".checkbox");
    let todoName = document.querySelectorAll(".todoName");

    for(let i=0;i<checkbox.length;i++){
        checkbox[i].addEventListener("click",()=>{
            todoName[i].classList.toggle("toggleStyle");
        });
    }
}