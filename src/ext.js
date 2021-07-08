const menuBtn = document.querySelector('.menu-btn');
const menuContainer = document.querySelector('.menu-main-container');
menuBtn.addEventListener('onclick', show)

function show(){
  menuContainer.classList.add("active");
}