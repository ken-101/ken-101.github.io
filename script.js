const burgerMenuButton = document.getElementById('burger-menu-button');
const navigationMenu = document.querySelector('nav ul');


const button = document.querySelector('#button');
const div = document.querySelector('#div');


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.burger-menu');
const dropdown = document.querySelector('.top-right');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});
const a = 'click'
// menuBtn.addEventListener('click', () => {
//   dropdown.classList.toggle('slide');
// });
// menuBtn.addEventListener('click', () => {
//   dropdown.classList.toggle('top-right');
// });
const menuBtna = document.querySelector('#menuBtn');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');


document.addEventListener('click', event => {
  if (event.target.closest(openBtn)) {
    menuBtna.classList.add('slide');
  } else if (event.target.closest(closeBtn)) {
    menuBtna.classList.remove('slide');
  }
});
