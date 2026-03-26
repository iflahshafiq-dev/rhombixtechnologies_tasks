// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId !== "#") {
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Hire Me Button Action
const hireBtn = document.querySelector(".hero button:first-of-type");

hireBtn.addEventListener("click", () => {
    alert("Thanks for your interest! Contact me at: iflahshafiq452@gmail.com");
});


// View Projects Button
const viewBtn = document.querySelector(".hero button:nth-of-type(2)");

viewBtn.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});


// Card Button Interaction
document.querySelectorAll(".card button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Project details coming soon!");
    });
});


// Scroll Animation (Reveal Sections)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});
