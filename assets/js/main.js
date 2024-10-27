const menuBtn = document.querySelector(".menuOpen")
const menuCloseBtn = document.querySelector(".mobNavHeading img")
const mobileMenu = document.querySelector(".mobileNav")

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active")
})
menuCloseBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
})