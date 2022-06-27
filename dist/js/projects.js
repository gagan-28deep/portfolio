// Projects-section
// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Social-media icons
const twitter = document.querySelector(".fa-twitter");
const linkedin = document.querySelector(".fa-linkedin");
const github = document.querySelector(".fa-github");
const hashnode = document.querySelector(".fa-hashnode");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// Project1
const movies = document.querySelector(".movies-app");
const gitrepo = document.querySelector(".github-movies");

// Project2
const project2 = document.querySelector(".project-2");
const git2 = document.querySelector(".git-2");

// Project3
const project3 = document.querySelector(".project-3");
const git3 = document.querySelector(".git-3");


// Project 1
movies.addEventListener("click", () => {
  window.open("https://custom-movie-app.netlify.app/");
});

gitrepo.addEventListener("click", () => {
  window.open("https://github.com/gagan-28deep/movies-app");
});

// Project 2
project2.addEventListener("click", () => {
  window.open("https://react-firebase-github.vercel.app/signin");
});

git2.addEventListener("click", () => {
  window.open("https://github.com/gagan-28deep/react-firebase-github");
});

// Project 3
project3.addEventListener("click", () => {
  window.open("https://notes-board-app.herokuapp.com/")
})

git3.addEventListener("click", () => {
  window.open("https://github.com/gagan-28deep/openBoard-Clone")
})