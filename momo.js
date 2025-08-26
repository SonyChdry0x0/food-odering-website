// Typing animation
var typed = new Typed(".typing", {
    strings: ["Web Developer", "UI/UX Designer", "Freelancer", "AI Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Smooth scroll for navigation
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Skill progress bars animation on scroll
window.addEventListener("scroll", () => {
    let skills = document.querySelector(".skills-content");
    let skillsPosition = skills.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (skillsPosition < screenPosition) {
        let progressBars = document.querySelectorAll(".progress-bar");
        progressBars.forEach(bar => {
            let value = bar.getAttribute("data-value");
            bar.style.width = value;
        });
    }
});

// Responsive navbar toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("showing");
});
