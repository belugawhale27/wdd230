const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//From responsive menu example
//function toggleMenu() {
//    document.getElementById("primaryNav").classList.toggle("open");
//    document.getElementById("hamburgerBtn").classList.toggle("open");
//}

//const x = document.getElementById("hamburgerBtn")
//x.onclick = toggleMenu;
