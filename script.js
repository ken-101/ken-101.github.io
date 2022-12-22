// Get the burger menu element
const burgerMenu = document.querySelector(".burger-menu");

// Get the nav menu element
const navMenu = document.querySelector("nav ul.nav-menu");

// Add a click event listener to the burger menu
burgerMenu.addEventListener("click", () => {
  // Toggle the "open" class on the nav menu
  navMenu.classList.toggle("open");
});
