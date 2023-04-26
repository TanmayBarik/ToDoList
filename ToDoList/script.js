let input = document.querySelector("#task");
let add = document.querySelector(".add");
let tick = document.querySelector(".tick");
let bin = document.querySelector(".bin");
let tasklist = document.querySelector(".task-list");

function AddTask() {
    if(input.value === ""){
        alert("enter a task!");
    }
    else{
        const li = document.createElement('li');
        tasklist.append(li);
        li.innerHTML = ` ${input.value}
        <i class="material-symbols-outlined tick">Done</i>
        <i class="material-symbols-outlined bin">Delete</i>`;
        input.value = "";
        li.getElementsByClassName('tick')[0].addEventListener("click",Strike);
        li.getElementsByClassName('bin')[0].addEventListener("click",Clear);
    }
}

function Strike(e) {
    let target = e.target;
    target.parentElement.style.color = '#3b313c';
 
}

function Clear(e){
    let target = e.target;
    target.parentElement.remove();
}


add.addEventListener("click",AddTask);
tick.addEventListener("click",Strike);
bin.addEventListener("click",Clear);