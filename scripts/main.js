// Dinamic header
const sections = document.querySelectorAll('section');
const navElements = document.querySelectorAll('a');

window.addEventListener("scroll", () => {
    var current;
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 40) {
            current = index;
        }
    })

    navElements.forEach((anchor) => {
        anchor.classList.remove("active");
        navElements[current].classList.add("active");
    })
})

// Responsive navbar
const navToggleButton = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggleButton.addEventListener("click", () => {
    nav.classList.toggle("navShow");
})

// Showing elements when scrolling
// Creating options for the intersection observer
options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "100px 0px 0px 0px",
    scrollMargin: "0px",
    threshold: 1.0,
};

const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry.target);
            entry.target.classList.add("popIn")
        }
            
    })
}, options)

// Adding the observer to elements
const observedElements = document.querySelectorAll("p, h2, figure");
observedElements.forEach((el) => {
    el.classList.add("observed");
    observer.observe(el);
})