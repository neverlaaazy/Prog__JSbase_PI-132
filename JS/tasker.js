const btnCreatTask = document.getElementById("btnCreatTask");
const textTask = document.getElementById("textTask");
const container = document.querySelector(".container");

let tasks = document.querySelectorAll(".task");
// console.log(tasks);
const btn1 = document.getElementById("btnSortAlpha");
const btn2 = document.getElementById("btnSortRAlpha");

function compare(a,b){
    if(a.innerHTML > b.innerHTML) return 1;
    if(a.innerHTML == b.innerHTML)return 0;
    if(a.innerHTML < b.innerHTML)return -1;
}
function compareReverse(a,b){
    if(a.innerHTML > b.innerHTML) return -1;
    if(a.innerHTML == b.innerHTML)return 0;
    if(a.innerHTML < b.innerHTML)return 1;
}
btn1.addEventListener("click",function(){
    let newTasks = [...tasks].sort(compare);
    container.classList.remove();
    for(let i in newTasks){
        container.append(newTasks[i])
    }
})
btn2.addEventListener("click",function(){
    let newTasks = [...tasks].sort(compareReverse);
    container.classList.remove();
    for(let i in newTasks){
        container.append(newTasks[i])
    }
})
// Добавление задачи
btnCreatTask.addEventListener("click",function(event){
    event.preventDefault();//отменяем действие браузера по умолчанию - перезагрузку страницы
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>`;
    container.append(newTask);

    tasks = document.querySelectorAll(".task");
    console.log(tasks);
});

//  
// const btn = document.getElementById("btn");
// btn.addEventListener("click",function(){
//     let tasks = document.querySelectorAll(".task"); //nodelist
//     for(let task of tasks){
//         // if(task.classList.contains("importent")){
//         //     task.classList.remove("importent");
//         // }else{
//         //     task.classList.add("importent");
//         // }
//         task.classList.toggle("importent");
//     }
    
// })