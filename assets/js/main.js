// 1. Find the hamburger button and the navigation links
const mobileMenuBtn = document.querySelector(".open-menu");
const navLinks = document.querySelector(".nav-links");

// 2. Listen for a click on the hamburger button
mobileMenuBtn.addEventListener("click", function () {
  // 3. Toggle (add/remove) the 'active' class on the nav-links
  navLinks.classList.toggle("active");
});
