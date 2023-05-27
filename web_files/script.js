// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Show/hide form on button click
const button = document.querySelector('#contact-button');
const form = document.querySelector('#contact-form');

button.addEventListener('click', function() {
  form.classList.toggle('hidden');
});
