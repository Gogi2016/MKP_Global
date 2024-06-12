

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

// carousel.js
let slideIndex = 0;
const slides = document.querySelector(".carousel-slide");
const container1 = document.querySelector(".container1");

function carousel() {
    slideIndex++;
    if (slideIndex > 2) { // Adjust index for the number of images
        slideIndex = 0; // Reset index when it exceeds the number of slides
    }
    slides.style.transform = `translateX(-${slideIndex * 33.33}%)`; // Adjust based on the number of images
    updateContainerPosition();
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function updateContainerPosition() {
    if (slideIndex === 0) {
        container1.style.opacity = "1"; // Show container on the first slide
    } else {
        container1.style.opacity = "0"; // Hide container on other slides
    }
}

carousel();



//scroll up btn
document.querySelector('.scroll-up-btn').addEventListener('click', () => {
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth'
	});
  });

  //php

  $(document).ready(function () {
    $('.php-email-form').submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var formData = form.serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: formData,
            success: function (response) {
                if (response == 'success') {
                    $(".sent-message").css("display", "block");
                    $(".error-message").css("display", "none");
                    form.trigger("reset");
                } else {
                    $(".error-message").css("display", "block");
                    $(".sent-message").css("display", "none");
                }
            }
        });
    });
});

