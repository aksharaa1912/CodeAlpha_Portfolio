// --- DAY 5 & 6: INTERACTIVE PORTFOLIO LOGIC ---

// 1. Professional Console Greeting Badge
console.log(
    "%c 🚀 CodeAlpha Internship Portfolio Loaded Successfully! ", 
    "background: #1a1a1a; color: #00ff88; font-weight: bold; font-size: 14px; padding: 8px; border: 1px solid #00ff88; border-radius: 5px;"
);

// 2. Dynamic Input Focus Visual Feedback
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    // Light up console to track user interaction milestones
    input.addEventListener('focus', () => {
        console.log(`User is filling out the form field: ${input.placeholder}`);
    });
});

// 3. Optional: Smooth Navbar Shadow on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        navbar.style.transition = 'box-shadow 0.3s ease';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
