const btnOpen = document.querySelector(".btn--open");
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".modal__button");

const modalViewHandler = () =>{
    modal.classList.toggle('modal--open');
}

btnOpen.addEventListener('click',modalViewHandler);
modal.addEventListener('click',modalViewHandler);