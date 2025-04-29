/*
1. Выбор элементов на странице
1.1. Выбор по ID
*/
const h1 = document.getElementById("title");
console.log(h1);

/*
1.2. Выбор одного элемента по селектору (по классу, по id, по тегу...)
*/
const menu = document.querySelector(".menu");
console.log(menu);

/*
1.3. Выбор нескольких элементов по селектору
*/
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

/*
2. Прочитать или изменить содержимое тега
*/
console.log(h1.textContent); //только содержимое. Заголовок страницы
console.log(h1.innerHTML); //содержимое с тегами внутри. Заголовок <i>страницы</i>
console.log(h1.outerHTML); // <h1 id="title">Заголовок <i>страницы</i></h1>
console.log(h1.innerText); // Заголовок страницы
console.log(h1.outerText); // Заголовок страницы


// h1.textContent = 'Новый заголовок! <i class="bi bi-unity"></i>';
h1.innerHTML = 'Новый заголовок! <i class="bi bi-unity"></i>';


/*
3. Работа со стилями (атрибут style)
*/
h1.style.color = "red";
h1.style.fontSize = "30px";
h1.style.backgroundColor = "green";

/*
4. Работа с классами (атриибут class)
*/
menu.classList.add("border");

// const h2 = document.querySelector(".blue");
// h2.classList.remove("blue");

console.log(menu.classList.contains("border")); // проверка на наличие классов у элемента


/*
5. Работа с атрибутами
*/
const firstLink = document.querySelector(".menu li:first-child a");

console.log(firstLink.getAttribute("href"));//узнать значение атрибута

firstLink.setAttribute("href", "https://midis.ru/");
firstLink.setAttribute("target","_blank");

firstLink.removeAttribute("target");

/*
6. Создание нового элемента
*/
const image = document.createElement("img");
image.setAttribute("src","img/html5_css3_logo.png");
image.classList.add("border");

const block = document.getElementById("block");
block.classList.add("border");
block.append(image);

/*
7. Работа с предками
*/
console.log(firstLink.closest("li"));

/*
8. Работа с потомками
*/
console.log(document.querySelectorAll("a"));

console.log(menu.querySelectorAll("a"));

/*
9. События
*/
const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");

btn.addEventListener("click",function(){
    //circle.style.backgroundColor = "blue";
    circle.classList.add("draw");
});