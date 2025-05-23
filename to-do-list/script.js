"use strict"

const tasks = [];

function addTask(){
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if(taskText !== ""){
        tasks.push ({name:  })
        const li = document.createElement("li");
        li.innerHTML = `
        <span onclick = "toggleComplement(this)">${taskText}</span>
        <div class="task-buttons">
            <button onclick="deleteTask(this)">Eliminar</button>
            </div>
        `;
        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }
}
function deleteTask(btn){
    for(let i=0; i < tasks.length; i++){

    }
    btn.closest("li").remove();
}

function toggleComplement(span){
    span.classList.toggle("task-complete");
}