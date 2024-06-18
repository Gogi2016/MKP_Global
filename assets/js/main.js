

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }


  /**
   * Scrool links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      select('.nav-menu .active').classList.remove('active')
      this.parentElement.classList.toggle('active')
      toogleNav();
    }
  }, true)

})()

//carousel
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const textContents = document.querySelectorAll(".text-content, .text-content2");
let isCarouselRunning = true; // Flag to track carousel state
let carouselTimeout; // Variable to store the timeout ID

// Function to toggle carousel state
function toggleCarousel() {
    if (isCarouselRunning) {
        // Stop the carousel
        clearTimeout(carouselTimeout); // Clear any scheduled timeout
        document.getElementById('carousel-toggle').innerHTML = '<i class="fas fa-play"></i>'; // Change icon to play
    } else {
        // Resume the carousel
        carousel(); // Start carousel again
        document.getElementById('carousel-toggle').innerHTML = '<i class="fas fa-pause"></i>'; // Change icon to pause
    }
    isCarouselRunning = !isCarouselRunning; // Toggle the flag
}

// Event listener for the toggle button
document.getElementById('carousel-toggle').addEventListener('click', toggleCarousel);

// Function to start the carousel
function carousel() {
    // Determine timeout based on slideIndex
    let timeout = 3000; // Default timeout for slides without text content
    let slowTransitionDuration = "2s"; // Transition duration for slides with text content

    // Hide all slides and corresponding text contents
    slides.forEach((slide, index) => {
        slide.style.width = "0";
        slide.style.opacity = "0";
        if (index === 0 || index === 2) {
            textContents[index / 2].style.opacity = "0";
        }
    });

    // Apply transition durations for the current and previous slides
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            // Current slide: set fast appearance
            slide.style.transition = "opacity 0.5s ease, width 0.5s ease";
        } else if ((slideIndex === 1 && index === 0) || (slideIndex === 3 && index === 2)) {
            // Previous slide with text content: set slow disappearance
            slide.style.transition = `opacity ${slowTransitionDuration}, width 1.0s ease`;
            // Apply the same transition to the corresponding text content
            if (index === 0) {
                textContents[0].style.transition = `opacity ${slowTransitionDuration}`;
            } else if (index === 2) {
                textContents[1].style.transition = `opacity ${slowTransitionDuration}`;
            }
        } else {
            // Other slides: set normal disappearance
            slide.style.transition = "opacity 0.5s ease, width 0.5s ease";
        }
    });

    // Show the current slide and corresponding text content
    slides[slideIndex].style.width = "100%";
    slides[slideIndex].style.opacity = "1";
    if (slideIndex === 0 || slideIndex === 2) {
        textContents[slideIndex / 2].style.opacity = "1";
    }

    if (slideIndex === 0 || slideIndex === 2) {
        timeout = 5000; // Longer timeout for slides with text content
    }

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    carouselTimeout = setTimeout(carousel, timeout); // Change image after specified timeout
}

// Immediately start the carousel on page load
carousel(); // Start carousel without initial delay


//scroll up btn
document.querySelector('.scroll-up-btn').addEventListener('click', () => {
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth'
	});
  });


