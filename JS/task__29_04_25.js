//Задание 1
const testText = document.querySelector(".test-text");
testText.innerHTML = 'Привет, <b>мир!</b>';

testText.style.color = "#00BFFF";
testText.style.backgroundColor = "#191970";
testText.style.width = "100px";
testText.style.border = "2px blue solid";

//Задание 2
const email = document.getElementById("email");
const cb = document.getElementById("remember");
const btn = document.getElementById("btn");

email.setAttribute("value", "mail@mail.ru");
email.setAttribute("readonly","");

btn.textContent = '«Войти»';

cb.setAttribute("checked","");

//Задание 3
const link = document.createElement("a");
link.setAttribute("href", "https://midis.ru/");
link.setAttribute("target","_blank");
link.textContent = "ССЫЛКА НА САЙТ";
link.classList.add("link");

const linkA = document.getElementById("linkA");
linkA.append(link);

//Задание 4
const boxA = document.getElementById("boxA");
boxA.style.backgroundColor = "#FFF8DC";
boxA.style.width = "100px";
boxA.style.height = "400px";
boxA.style.border = "2px gray solid";

const btn2 = document.getElementById("btn2");
const circle = document.querySelector(".circle");

btn2.addEventListener("click",function(){
    //circle.style.backgroundColor = "blue";
    circle.classList.add("circleMove");
});
