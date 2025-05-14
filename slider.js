document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.cert-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;
  const slideCount = slides.length;
  let autoplayInterval; // Variable to hold the interval ID

  // Function to update the slider position and dots
  function updateSlider() {
  if (slides.length === 0) return;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;


  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}


  // Function to move to the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }

  // Function to move to the previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  // Event listeners for navigation buttons
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
      resetAutoplay(); // Reset autoplay timer on manual navigation
    });
  });

  // Autoplay functionality
  function startAutoplay() {
    stopAutoplay(); // Ensure no multiple intervals are running
    autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Pause autoplay on hover over the slider container
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Handle window resize
  // When the window is resized, the slide width might change,
  // so we need to update the slider's position correctly.
  window.addEventListener('resize', () => {
    // Use a small debounce to avoid excessive recalculations during resize
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
      updateSlider();
    }, 100); // Adjust debounce delay as needed
  });

  // Initialize the slider
  // Set the initial position and start autoplay
  updateSlider();
  startAutoplay();
});