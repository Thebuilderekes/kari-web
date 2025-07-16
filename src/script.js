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





