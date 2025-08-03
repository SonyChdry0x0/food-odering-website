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
const boxContainer = document.querySelector('.box-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const scrollStep = 300; // Pixels per click

// Show/hide buttons based on scroll
function updateButtons() {
  const maxScrollLeft = boxContainer.scrollWidth - boxContainer.clientWidth;
  
  if (boxContainer.scrollLeft <= 0) {
    prevBtn.style.display = 'none'; // Hide prev at start
  } else {
    prevBtn.style.display = 'block'; // Show prev when scrolled
  }

  if (boxContainer.scrollLeft >= maxScrollLeft) {
    nextBtn.style.display = 'none'; // Hide next at end
  } else {
    nextBtn.style.display = 'block'; // Show next when not at end
  }
}

// Initial check
updateButtons();

// Scroll events
boxContainer.addEventListener('scroll', updateButtons);

// Button click events
nextBtn.addEventListener('click', () => {
  boxContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  boxContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});


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
