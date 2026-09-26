// ===============================
// TYPING EFFECT
// ===============================

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "Network Enthusiast",
    "IT Student",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typingEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typingEffect, deleting ? 50 : 100);
}

typingEffect();


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.querySelector("i").classList.remove("fa-xmark");
        menuBtn.querySelector("i").classList.add("fa-bars");

    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// NAVBAR ACTIVE LINK
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// BACK TO TOP
// ===============================

const topButton = document.getElementById("top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// CONTACT FORM
// ===============================

const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Pesan berhasil dibuat! Hubungkan form ini dengan backend/email service agar pesan benar-benar terkirim."
    );

    form.reset();

});
