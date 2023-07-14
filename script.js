const menuOpen = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const sideBar = document.querySelector('.nav');
const header =  document.querySelector('header');
const html = `<div class="nav">
<div class="menu-close">
    <img src="img/icon-menu-close.svg">
</div>
<nav class="navigation">
<ul class="nav__links-mobile">
    <li class="nav__item"><a class="nav__link" href="#section--1">home</a></li>
    <li class="nav__item"><a class="nav__link" href="#section__news-2">new</a></li>
    <li class="nav__item"><a class="nav__link" href="#">popular</a></li>
    <li class="nav__item"><a class="nav__link" href="#section__trending--3">trending</a></li>
    <li class="nav__item"><a class="nav__link" href="#">categories</a></li>
</ul>
</nav>
</div>`;
header.insertAdjacentHTML('afterbegin', html);

const menuClose = document.querySelector('.menu-close');

function closeMenu() {
    document.querySelector('.nav').classList.add('nav-hidden')
    document.querySelector('.overlay').classList.add('hidden')
}

closeMenu();

menuOpen.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('nav-hidden');
    document.querySelector('.overlay').classList.remove('hidden')
 });
 
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

const links = document.querySelectorAll('.nav__link');
/* 
links.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('href')
        console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: "smooth" })
    })
}) */

document.querySelector('.nav__links-mobile').addEventListener("click", function (e) {
    e.preventDefault();
  
    // MATCHING STRATEGY
    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      closeMenu()
    }
  });

document.querySelector('.nav__links-desktop').addEventListener("click", function (e) {
    e.preventDefault();
  
    // MATCHING STRATEGY
    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      closeMenu()
    }
  });

