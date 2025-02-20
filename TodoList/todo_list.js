const taskInput = document.getElementById("taskInput");
const addtaskbtn = document.getElementById("addtaskbtn");
const tasklist = document.getElementById("tasklist")
const clearcompletedbtn = document.getElementById("clearcompletedbtn");

let tasks = []

function addtask(){
    const tasktext = taskInput.value.trim();
    if (tasktext !== ""){
        tasks.push({text : tasktext});
        taskInput.value = "";
        displayTasks();

    }
}
function displayTasks() {
    tasklist.innerHTML = "";
    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `<input type = "checkbox" id = "task-${index}" ${task.completed ? "checked" : ""}>
                 <label for = "task=${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change",() => toggletask(index));
        tasklist.appendChild(li);
    });
}
function toggletask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearcompletedtasks(){
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

addtaskbtn.addEventListener("click",addtask);
clearcompletedbtn.addEventListener("click",clearcompletedtasks);
const clear = document.getElementById("clear");

function cleartasks(){
    tasks=[];
    displayTasks();
    
}
clear.addEventListener("click",cleartasks);
displayTasks();