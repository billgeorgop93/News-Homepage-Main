const navbar = document.querySelector("nav")
const openMenu = document.getElementById("menu-open-btn")
const closeMenu = document.getElementById("menu-close-btn")

openMenu.addEventListener("click", () => {
  navbar.classList.add("open")
})

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("open")
})
