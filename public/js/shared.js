const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navbar.classList.add("scrollDown");
  } else {
    navbar.classList.remove("scrollDown");
  }
});
