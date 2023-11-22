

const toggleBtn = document.querySelector(".nav__toggler");

const navbarMenu=document.querySelector('.navbar__menu')



toggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.add('active__menu');
    
})