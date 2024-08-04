const add = document.querySelector("#done");
let del = document.querySelector("#delete");
add.addEventListener('click' , (e)=>{
    e.preventDefault()
    let taskEle = document.querySelector("#task_1")
    let task = taskEle.value.trim();

    const container = document.querySelector('.add-task-1')
    const todoTask = document.createElement('div')
    const del_b = document.createElement('div')
    
    
    if(taskEle.value === "" || taskEle.value === " "){
        alert("Please Enter Some Task")
    }else{
        todoTask.className = 'todoTask';
        todoTask.textContent = task;
        del_b.innerHTML = '<i class="fa-regular fa-trash-can" style="color: #000000;"></i>'

        container.appendChild(todoTask);
        todoTask.appendChild(del_b)
        console.log(todoTask);
        
        todoTask.addEventListener('click' , (e)=>{
            todoTask.classList.toggle('strikethrough');
        })
        taskEle.value = "";

        del_b.addEventListener('click' , ()=>{
            container.removeChild(todoTask)
        })
    }
})