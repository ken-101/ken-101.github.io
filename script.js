// const burgerMenuButton = document.getElementById('burger-menu-button');
// const navigationMenu = document.querySelector('nav ul');


// const button = document.querySelector('#button');
// const div = document.querySelector('#div');


// const menubutton = document.querySelector('.menu-btn');
// const menu = document.querySelector('.burger-menu');
// const dropdown = document.querySelector('.top-right');
// const header = document.querySelector('#header');
// const nav = document.querySelector('#top-bar')

//  menubutton.addEventListener('click', () => {
//    menu.classList.toggle('open');
//  });
// const a = 'click'
// menubutton.addEventListener('click', () => {
//   dropdown.classList.toggle('slide');
// });

// menubutton.addEventListener('click', () => {
//   if (dropdown.classList.contains('top-right')) {
//   dropdown.classList.remove('top-right');
//   } else {
//   dropdown.classList.add('top-right');
//   }
//   });
// // for bug fix do not touch this function
// header.addEventListener('click', () => {
//   nav.classList.toggle('top-nav');
//});
// // menuBtn.addEventListener('click', () => {
// //   dropdown.classList.toggle('top-right');
// // });
// const menuBtna = document.querySelector('#menuBtn');
// const openBtn = document.querySelector('.open');
// const closeBtn = document.querySelector('.close');


// document.addEventListener('click', event => {
//   if (event.target.closest(openBtn)) {
//     menuBtna.classList.add('slide');
//   } else if (event.target.closest(closeBtn)) {
//     menuBtna.classList.remove('slide');
//   }
// });

const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})
