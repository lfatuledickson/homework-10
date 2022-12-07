const formTodo = document.querySelector("#todoForm");
const todoInput = document.querySelector("#newElement");
const todoList = document.querySelector("#todoList");

formTodo.addEventListener("submit", function(event) {
event.preventDefault();

const todoElement = todoInput.value;
console.log(todoElement);

if(todoElement == "" || todoElement == " ") {
    alert("Don't submit without typing something in!");
    alert("BTW, if you try to type only spaces you'll just be making your IQ drop.");
    return;
}

const li= document.createElement("li");
li.textContent = todoElement;
todoList.appendChild(li);
});