// DOM elements
const burger = document.querySelector("header .burger img")
const ulLinks = document.querySelector("header ul")
const scrollerInner = document.querySelector(".scroller-inner")
// Variables
let isMenuExisted = false


// mobile menu
burger.addEventListener("click", (e) => {
  if (isMenuExisted) {
    ulLinks.style.display = "none"
    // overlay
    document.querySelector(".overlay").remove()
    burger.src = "./images/icon-hamburger.svg"
    isMenuExisted = false
  } else {
    ulLinks.style.display = "flex"
    // overlay
    const overlay = createOverlay()
    burger.src = "./images/icon-close.svg"
    document.body.append(overlay)
    isMenuExisted = true
  }
}) 

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    ulLinks.style.display = "flex"
    if (document.querySelector(".overlay")) {
      document.querySelector(".overlay").remove()
    }
  } else {
    if (!isMenuExisted) {
      ulLinks.style.display = "none"
      // overlay
      if (document.querySelector(".overlay")) {
      document.querySelector(".overlay").remove()
      }
      burger.src = "./images/icon-hamburger.svg"
      isMenuExisted = false
    } else {
      ulLinks.style.display = "flex"
      // overlay
      const overlay = createOverlay()
      burger.src = "./images/icon-close.svg"
      document.body.append(overlay)
      isMenuExisted = true
    }
  }
})


// filling testimonials
fetch("./JSON/testimonials.json").then(res => res.json())
.then(data => {
  data.forEach(testi => {
    const div = document.createElement("div")
    div.className = "testi"
    const img = document.createElement("img")
    img.src = testi.img
    const h5 = document.createElement("h5")
    h5.innerText = testi.name
    const p = document.createElement("p")
    p.innerText = testi.paragraph
    div.append(img)
    div.append(h5)
    div.append(p)
    scrollerInner.append(div)

  });

  // scroll testimonials slider
  if (scrollerInner.offsetWidth > document.documentElement.clientWidth) { // check if scrolling is needed
    scrollTestimonials()
  }
  // window.addEventListener("resize", () => {

  // })
})


// FUNCTIONS

function createOverlay() {
  let overlay = document.createElement("div")
  overlay.className = "overlay"
  return overlay
}

function scrollTestimonials() {

  const items = scrollerInner.querySelectorAll(".testi")
  items.forEach(item => {
    // cloning each item
    const falsyItem = item.cloneNode(true)
    // appending to inner scroller
    scrollerInner.append(falsyItem)
  })

}