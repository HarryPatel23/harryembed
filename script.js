// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Form submission feedback (optional)
  document.querySelector('form').addEventListener('submit', function() {
    alert('Message sent! I’ll get back to you soon.');
  });
