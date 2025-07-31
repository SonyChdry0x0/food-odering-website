// script.js

// Hide loader after page load
window.addEventListener('load', function () {
  document.getElementById("loader").style.display = "none";
});

// Toggle navigation bar on mobile
document.getElementById('menu-bars').addEventListener('click', () => {
  document.getElementById('menu-bars').classList.toggle('fa-times');
  document.querySelector('.navbar').classList.toggle('active');
});

// Toggle search bar
document.getElementById('search-icon').addEventListener('click', () => {
  document.getElementById('search-form').classList.toggle('active');
});

// Close search bar
document.getElementById('close1').addEventListener('click', () => {
  document.getElementById('search-form').classList.remove('active');
});

// Open About section
function openAbout() {
  document.getElementById("about").style.width = "100%";
}
window.openAbout = openAbout;

// Close About section
function closeNav() {
  document.getElementById("about").style.width = "0%";
}
window.closeNav = closeNav;

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    alert("Item added to cart!");
  });
});
