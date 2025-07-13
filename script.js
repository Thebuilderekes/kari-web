const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");
const navToggleBtn = document.querySelector(".nav-toggler");
const navMobileToggleBtn = document.querySelector("nav ul .close-nav-btn");
const isOpen = navToggleBtn.getAttribute("aria-expanded") === "true";

//toggle nav with nav toggle button
navToggleBtn.addEventListener("click", function() {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    nav.classList.add("hide");
    navToggleBtn.setAttribute("aria-expanded", !isOpen)
    navMobileToggleBtn.setAttribute("aria-expanded", !isOpen)
  } else {
    nav.classList.remove("hide");
    nav.classList.add("show");

    navToggleBtn.setAttribute("aria-expanded", !isOpen)
    navMobileToggleBtn.setAttribute("aria-expanded", !isOpen)
  }
});

// make mobile toggle button hide nav 
navMobileToggleBtn.addEventListener("click", function() {
  nav.classList.remove("show");
  nav.classList.add("hide");
  if (nav.classList.contains("hide")) {
    navToggleBtn.setAttribute("aria-expanded", false)
    navMobileToggleBtn.setAttribute("aria-expanded", false)
  }
})

// make nav hide on click of nav links
if (window.innerWidth < 768) {
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      nav.classList.remove("show");
      nav.classList.add("hide");
      if (nav.classList.contains("hide")) {
        navToggleBtn.setAttribute("aria-expanded", false)
        navMobileToggleBtn.setAttribute("aria-expanded", false)
      }

    })

  });
}
// Image carousel functionality 
document.querySelectorAll('.carousel').forEach(carousel => {
      const mainImage = carousel.querySelector('.main-image');
      const thumbnails = Array.from(carousel.querySelectorAll('.thumbnail'));
      let current = thumbnails.findIndex(t => t.classList.contains('selected'));

      function updateCarousel(index) {
        const thumb = thumbnails[index];
        const img = thumb.querySelector('img');
        const newSrc = img.dataset.full;
        const newAlt = img.alt.replace('Thumbnail of', 'A');

        mainImage.classList.remove('show');
        setTimeout(() => {
          mainImage.src = newSrc;
          mainImage.alt = newAlt;
          mainImage.classList.add('show');
        }, 100);

        thumbnails.forEach((t, i) => {
          const isCurr = i === index;
          t.classList.toggle('selected', isCurr);
          t.setAttribute('tabindex', isCurr ? '0' : '-1');
        });

        thumb.focus();
        current = index;
      }

      thumbnails.forEach((thumb, idx) => {
        thumb.addEventListener('click', () => updateCarousel(idx));

        thumb.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            updateCarousel(idx);
          }
        });
      });

      carousel.addEventListener('keydown', (e) => {
        if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
          e.preventDefault();
          const dir = e.key === 'ArrowRight' ? 1 : -1;
          let next = (current + dir + thumbnails.length) % thumbnails.length;
          updateCarousel(next);
        }
      });
    });
