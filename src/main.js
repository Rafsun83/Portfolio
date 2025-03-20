// Form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Smooth scrolling for navigation
document.querySelector('.scroll-indicator').addEventListener('click', function(e) {
    e.preventDefault();
    const aboutSection = document.querySelector('.about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});