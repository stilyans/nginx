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

// Services button click event
const servicesButton = document.querySelector('#services-button');
loginButton.addEventListener('click', function() {
  // Perform login functionality here
  console.log("Button selected");
});

// Industries button click event
const industriesButton = document.querySelector('#industries-button');
signupButton.addEventListener('click', function() {
  // Perform signup functionality here
  console.log("Button clicked");
});
