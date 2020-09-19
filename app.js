//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions

function addTodo(event){
    //Prevent form from submiting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Creating List
    const newTodo= document.createElement("li");
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //Delete button
    const dltButton = document.createElement('button');
    dltButton.innerHTML = '<i class="fas fa-trash"></i>';
    dltButton.classList.add("dlt-btn");
    todoDiv.appendChild(dltButton);
    //Append to List
    todoList.appendChild(todoDiv);
    //Clear todo input value
    todoInput.value = "";
}


function deleteCheck(e){
    const item = e.target;
    //Delete 
    if(item.classList[0]=== "dlt-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });    
    }

    //Check
    if(item.classList[0]==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('complete');
    }
}