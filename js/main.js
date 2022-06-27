// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Social-media icons
const twitter = document.querySelector('.fa-twitter');
const linkedin = document.querySelector('.fa-linkedin');
const github = document.querySelector('.fa-github');
const hashnode = document.querySelector('.fa-hashnode');


// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

twitter.addEventListener('click', () => {
  window.open('https://twitter.com/gagan_28_');
});

linkedin.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/gagandeepsingh-28/');
});

github.addEventListener('click', () => {
  window.open('https://github.com/gagan-28deep')
})

hashnode.addEventListener('click', () => {
  window.open('https://hashnode.com/@gagan28')
})