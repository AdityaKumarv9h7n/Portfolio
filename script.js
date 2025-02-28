// Lazy Loading Images
document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll("img.lazy");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));

    // Hamburger Menu Toggle
    const navToggle = document.createElement("button");
    navToggle.classList.add("nav-toggle");
    navToggle.textContent = "☰";
    document.querySelector("nav").prepend(navToggle);

    const navList = document.querySelector("nav ul");

    navToggle.addEventListener("click", () => {
        navList.classList.toggle("open");
        navToggle.textContent = navList.classList.contains("open") ? "✕" : "☰";
    });

    // Profile Image Swap after 10 seconds
    const profileImg = document.getElementById("profile-swap");
    setTimeout(() => {
        profileImg.src = "profile2.png"; // Swap to second image
        profileImg.alt = "Aditya - Thumbnail Designer (Alternate)"; // Update alt text
    }, 10000); // 10 seconds = 10,000 milliseconds
});

// Scroll Animation for Sections
const sections = document.querySelectorAll(".fade-in");

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSection);
revealSection(); // Trigger on load
