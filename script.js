const navList = document.querySelector("nav ul");
const navToggleBtn = document.querySelector(".nav-toggler");

navToggleBtn.addEventListener("click", function () {
  if (navToggleBtn.classList.contains("nav-toggler")) {
    const isOpen = navToggleBtn.getAttribute("aria-expanded") === "true";
    navToggleBtn.setAttribute("aria-expanded", !isOpen);
  }

  if (navList.classList.contains("show")) {
    navList.classList.remove("show");
    navList.classList.add("hide");
  } else {
    navList.classList.remove("hide");
    navList.classList.add("show");
  }
});
