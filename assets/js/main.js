// Mobile navigation is present on the main content pages only.
// Keep the script safe on the application and login screens, which do not use it.
const mobileMenuBtn = document.querySelector(".open-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
    mobileMenuBtn.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });
}
