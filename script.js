// --- INTERACTIVE PORTFOLIO ENGINE ---

// 1. Production Success Logging
console.log(
    "%c 🚀 CodeAlpha Internship Portfolio Active! ", 
    "background: #1a1a1a; color: #00ff88; font-weight: bold; font-size: 14px; padding: 8px; border: 1px solid #00ff88; border-radius: 5px;"
);

// 2. Dynamic Viewport Active Navigation Tracker
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Triggers the active highlight when the section takes up the screen view
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});
