const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks when page opens
window.onload = loadTasks;

// Add button
addBtn.addEventListener("click", addTask);

function addTask() {

    let task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task!");
        return;
    }

    createTask(task);

    saveTasks();

    taskInput.value="";
}

// Function to create a task
function createTask(task){

    let li=document.createElement("li");

    li.innerHTML=`
        <span>${task}</span>

        <div class="actions">
            <button class="complete-btn">✔</button>
            <button class="edit-btn">✏</button>
            <button class="delete-btn">🗑</button>
        </div>
    `;

    taskList.appendChild(li);

    // Complete
    li.querySelector(".complete-btn").addEventListener("click",function(){

        li.classList.toggle("completed");
        saveTasks();

    });

    // Delete
    li.querySelector(".delete-btn").addEventListener("click",function(){

        li.remove();
        saveTasks();

    });

    // Edit
    li.querySelector(".edit-btn").addEventListener("click",function(){

        let span=li.querySelector("span");

        let updated=prompt("Edit Task",span.innerText);

        if(updated!==null && updated.trim()!==""){

            span.innerText=updated.trim();
            saveTasks();

        }

    });

}

// Save Tasks
function saveTasks(){

    localStorage.setItem("tasks",taskList.innerHTML);

}

// Load Tasks
function loadTasks(){

    taskList.innerHTML=localStorage.getItem("tasks") || "";

    // Reattach button events
    let allTasks=document.querySelectorAll("#taskList li");

    allTasks.forEach(function(li){

        li.querySelector(".complete-btn").addEventListener("click",function(){

            li.classList.toggle("completed");
            saveTasks();

        });

        li.querySelector(".delete-btn").addEventListener("click",function(){

            li.remove();
            saveTasks();

        });

        li.querySelector(".edit-btn").addEventListener("click",function(){

            let span=li.querySelector("span");

            let updated=prompt("Edit Task",span.innerText);

            if(updated!==null && updated.trim()!==""){

                span.innerText=updated.trim();
                saveTasks();

            }

        });

    });

}