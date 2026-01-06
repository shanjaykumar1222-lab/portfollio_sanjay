// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal with CSS Classes
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        
        // Add visible class when section enters viewport
        if (sectionTop < window.innerHeight - 100 && sectionBottom > 0) {
            section.classList.add('visible');
        }
    });
});

// Trigger on initial load
window.dispatchEvent(new Event('scroll'));