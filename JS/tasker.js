const btnCreatTask = document.getElementById("btnCreatTask");
const textTask = document.getElementById("textTask");
const container = document.querySelector(".container");

let tasks = document.querySelectorAll(".task span");
console.log(tasks);


// Добавление задачи
btnCreatTask.addEventListener("click",function(event){
    event.preventDefault();//отменяем действие браузера по умолчанию - перезагрузку страницы
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>`;
    container.append(newTask);

    tasks = document.querySelectorAll(".task span");
    console.log(tasks);
});

//  
const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    let tasks = document.querySelectorAll(".task"); //nodelist
    for(let task of tasks){
        // if(task.classList.contains("importent")){
        //     task.classList.remove("importent");
        // }else{
        //     task.classList.add("importent");
        // }
        task.classList.toggle("importent");
    }
    
})