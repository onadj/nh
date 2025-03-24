



// Initialize AOS (Animate On Scroll)
AOS.init();

// Slideshow functionality
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  if (slides[slideIndex]) {
    slides[slideIndex].style.opacity = 0;
  }

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  if (slides[slideIndex]) {
    slides[slideIndex].style.opacity = 1;
  }

  setTimeout(showSlides, 5000);
}

function initializeSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 1; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  if (slides[0]) {
    slides[0].style.opacity = 1;
  }

  setTimeout(showSlides, 5000);
}

// Dark Mode Toggle with mobile menu close functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

darkModeToggle.addEventListener('click', () => {
  // Toggle dark mode class on body
  document.body.classList.toggle('dark-mode');
  
  // Toggle dark mode for all relevant elements
  document.querySelector('.navbar').classList.toggle('dark-mode');
  document.querySelector('.hero-overlay').classList.toggle('dark-mode');
  document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode'));
  document.querySelectorAll('.progress-section').forEach(section => section.classList.toggle('dark-mode'));
  document.querySelectorAll('.testimonials').forEach(section => section.classList.toggle('dark-mode'));
  document.querySelectorAll('.video-section').forEach(section => section.classList.toggle('dark-mode'));
  document.querySelectorAll('.why-choose-us').forEach(section => section.classList.toggle('dark-mode'));
  
  // Close mobile menu when toggling dark mode
  if (window.innerWidth <= 768) {
    navbarCollapse.classList.remove('show');
    navbarToggler.setAttribute('aria-expanded', 'false');
  }
  
  // Toggle icon between moon and sun
  const icon = darkModeToggle.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Custom Carousel Implementation
function initializeCarousel() {
  const carousel = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  let interval;
  
  function showSlide(index) {
    // Wrap around if needed
    if (index >= items.length) index = 0;
    if (index < 0) index = items.length - 1;
    
    // Hide all items
    items.forEach(item => item.classList.remove('active'));
    
    // Show current item
    items[index].classList.add('active');
    currentIndex = index;
  }
  
  function startCarousel() {
    // Clear any existing interval
    clearInterval(interval);
    // Start new interval
    interval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 3000);
  }
  
  // Manual navigation
  window.moveCarousel = function(step) {
    clearInterval(interval);
    showSlide(currentIndex + step);
    startCarousel();
  };
  
  // Initialize - show first slide immediately
  showSlide(0);
  startCarousel();
  
  // Ensure carousel is visible immediately
  if (carousel) {
    carousel.style.opacity = '1';
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeSlides();
  initializeCarousel();
  
  // Close mobile menu when clicking on nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.remove('show');
        document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false');
      }
    });
  });
});