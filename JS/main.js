// Styling
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

$(document).ready(function() {
  
  window.scrollTo(0, 0);

  $(".main-container").css("padding-top", $(".nav-bar").height());

  $(".tile-text").css("height", $(".tile").height() / 4);

  $(".nav-bar").addClass('animate');

  $(".tiles-container").addClass('animate');

  $(".welcome-container").addClass('animate');

  $('body').addClass('no-scroll');

  setTimeout(() => {
    $('body').removeClass('no-scroll');
    $(".nav-bar").removeClass('animate');
    $(".nav-bar").css('opacity', '1');
    if (lastScrollY < window.scrollY && window.scrollY > ($(".nav-bar").height() + $(".welcome-container").height())) {
      $(".nav-bar").addClass('hidden');
    }
  }, 1500)
});

// Logo button interaction
  const logoButton = document.getElementById('logo');

  if (logoButton) {
    logoButton.addEventListener('mousedown', (event) => {
      if (event.button === 0) { // Left mouse button
        event.preventDefault();
        window.location.href = 'index.html';
      }
      if (event.button === 1) { // Middle mouse button
        event.preventDefault();
        window.open('index.html', '_blank');
      } 
    });
  } else {
    console.error('Logo button not found.');
  }

// the intersection observer for the welcome text
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      // when element becomes visible
      if (entry.isIntersecting) {
          entry.target.classList.add('animate');
      } else {
          // when element is out of view, remove the class
          entry.target.classList.remove('animate');
      }
  });
}, {
  threshold: 0.1 // trigger when at least 10% of the element is visible
});

const welcomeText = document.querySelector('.welcome-main-text');
observer.observe(welcomeText);




// the navbar interaction
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.nav-bar');
  if (lastScrollY < window.scrollY && window.scrollY > ($(".nav-bar").height() + $(".welcome-container").height())) {
      navbar.classList.add('hidden');
  } else {
      navbar.classList.remove('hidden');
  }

  lastScrollY = window.scrollY;
});