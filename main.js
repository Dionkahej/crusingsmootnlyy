// Add your JavaScript code here

// Example: Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Example: Alert on menu card click
document.querySelectorAll('#menu .card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3')?.textContent || 'Menu item';
        alert(`You selected ${title}!`);
    });
});
