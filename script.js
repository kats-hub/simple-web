// ==========================
// MOBILE MENU FUNCTION
// ==========================

// Select menu button
const menuBtn = document.querySelector(".menu-btn");

// Select navigation links
const navLinks = document.querySelector(".nav-links");

// Add click event
menuBtn.addEventListener("click", () => {

    // Toggle active class
    navLinks.classList.toggle("active");

});
