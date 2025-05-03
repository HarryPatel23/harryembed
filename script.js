// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submission feedback with Formspree
document.querySelector('form').addEventListener('submit', async function(e) {
  e.preventDefault(); // Prevent the default form submission

  const form = e.target;
  const status = document.getElementById("form-status");
  const errorStatus = document.getElementById("form-error");

  const formData = new FormData(form);
  const endpoint = form.getAttribute("action");

  try {
    // Submit the form using fetch API to Formspree
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",

      },
    });

    // If successful, show success message
    if (response.ok) {
      form.reset(); // Reset form fields
      status.style.display = "block"; // Show success message
      status.textContent = "Message sent successfully!";
      errorStatus.style.display = "none"; // Hide error message
    } else {
      // If something goes wrong, show error message
      errorStatus.style.display = "block"; // Show error message
      errorStatus.textContent = "Oops! Something went wrong.";
      status.style.display = "none"; // Hide success message
    }
  } catch (error) {
    // If there's an error, show error message
    errorStatus.style.display = "block"; // Show error message
    errorStatus.textContent = "Error: Could not send message.";
    status.style.display = "none"; // Hide success message
  }
  const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Optional: toggle icon
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

});
