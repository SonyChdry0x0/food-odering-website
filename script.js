// Hide loader after page load
window.addEventListener('load', function () {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// Toggle navigation bar on mobile
const menuBars = document.getElementById('menu-bars');
const navbar = document.querySelector('.navbar');

if (menuBars && navbar) {
  menuBars.addEventListener('click', () => {
    menuBars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
}

// Toggle search bar
const searchIcon = document.getElementById('search-icon');
const searchForm = document.getElementById('search-form');
const searchClose = document.getElementById('close1');

if (searchIcon && searchForm) {
  searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    // Focus input on open
    if (searchForm.classList.contains('active')) {
      document.getElementById('search-box').focus();
    }
  });
}

if (searchClose && searchForm) {
  searchClose.addEventListener('click', () => {
    searchForm.classList.remove('active');
  });
}

// Open About section
function openAbout() {
  const about = document.getElementById("about");
  if (about) {
    about.style.width = "100%";
    about.setAttribute('aria-hidden', 'false');
  }
}
window.openAbout = openAbout;

// Close About section
function closeNav() {
  const about = document.getElementById("about");
  if (about) {
    about.style.width = "0%";
    about.setAttribute('aria-hidden', 'true');
  }
}
window.closeNav = closeNav;

// Add to Cart functionality with alert
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    alert("Item added to cart!");
  });
});
