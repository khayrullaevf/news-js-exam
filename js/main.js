


const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown__menu");

toggleBtn.addEventListener('click',()=>{
    dropdownMenu.classList.toggle('open')
    const isOpen=dropdownMenu.classList.contains('open')

   
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
 
    

}) 