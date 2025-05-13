const btnCreatTask = document.getElementById("btnCreatTask");
const textTask = document.getElementById("textTask");
const sortText = document.getElementById("sortText");
const container = document.querySelector(".container");

let tasks = document.querySelectorAll(".task");
// console.log(tasks);
const btn1 = document.getElementById("btnSortAlpha");
const btn2 = document.getElementById("btnSortRAlpha");
const btn3 = document.getElementById("btnSortImp");
const btn4 = document.getElementById("btnSortText");
const btn5 = document.getElementById("btnSortDelete");

function compare(a,b){
    if(a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1;
    if(a.querySelector("span").innerHTML == b.querySelector("span").innerHTML)return 0;
    if(a.querySelector("span").innerHTML < b.querySelector("span").innerHTML)return -1;
}
function compareReverse(a,b){
    if(a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return -1;
    if(a.querySelector("span").innerHTML == b.querySelector("span").innerHTML)return 0;
    if(a.querySelector("span").innerHTML < b.querySelector("span").innerHTML)return 1;
}
btn1.addEventListener("click",function(){
    let newTasks = [...tasks].sort(compare);
    container.innerHTML="";
    for(let i in newTasks){
        container.append(newTasks[i])
    }
})
btn2.addEventListener("click",function(){
    let newTasks = [...tasks].sort(compareReverse);
    container.innerHTML="";
    for(let i in newTasks){
        container.append(newTasks[i])
    }
})
btn3.addEventListener("click",function(){
    let newTasks = [...tasks];
    newTasks = newTasks.filter(function(item){
        return item.classList.contains("importent");
    });
    container.innerHTML="";
    for(let i in newTasks){
        container.append(newTasks[i])
    }
})
btn4.addEventListener("click",function(){
    let value = sortText.value;
    console.log(value);
    let newTasks = [...tasks];
    newTasks = newTasks.filter(function(item){
        return item.querySelector("span").innerHTML.indexOf(value) != -1;
    })
    container.innerHTML="";
    for(let i in newTasks){
        container.append(newTasks[i])
    }
})
btn5.addEventListener("click",function(){
    
})
// Добавление задачи
btnCreatTask.addEventListener("click",function(event){
    event.preventDefault();//отменяем действие браузера по умолчанию - перезагрузку страницы
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>
                <div class="btns">
                    <i tabindex="0" class="bi bi-pencil-fill btn-edit"></i>
                    <i tabindex="0" class="bi bi-trash-fill btn-remove"></i>
                </div>`;
    container.append(newTask);

    tasks = document.querySelectorAll(".task");
    // console.log(tasks);
});

/*------------Удаление и редактирование задачи--------------*/
container.addEventListener("click", (event)=>{
    const btn = event.target; //элемент, по которому кликнул пользователь
    if(btn.classList.contains("btn-remove")){ //Если это кнопка удаления, то удалаяем
        btn.closest(".task").outerHTML = "";
    }
    if(btn.classList.contains("btn-edit")){//Если это кнопка редактирования, то редактируем
        btn.closest(".task").querySelector("span").setAttribute("contenteditable","true");
    }
    tasks = document.querySelectorAll(".task");
});


/*-----------Пример всплытия-------------*/
// const tags = document.querySelectorAll("*");
// let i = 0;
// for (let tag of tags){
//     tag.addEventListener("click", (event)=>{
//         i++;
//         console.log("Этап " + i);
//         console.log("Целевой элемент ");
//         console.log(event.target);
//         console.log("Эелемент, который поймал событие");
//         console.log(event.currentTarget);
//     });
// }


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

// function MyMax(){
//     // console.log(arguments); // <-хранит параметры, которые пользователь передал
//     let max = arguments[0] || 0;
//     for(let i = 1;i < arguments.length;i++){
//         if(arguments[i]>max){
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(MyMax(4,-12,3,-5,-45,8));

