const navLinks = document.querySelectorAll("nav ul li");

// remove the active class from all links
function removeActiveClass() {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
}

// event listener for each link
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    removeActiveClass();
    this.classList.add("active");

    const targetId = this.querySelector("a").getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Fix Navbar Top
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// Hero Video
const video = document.getElementById("heroVideo");

const playButton = document.getElementById("playBtn");

playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    video.setAttribute("controls", "controls");
  } else {
    video.pause();
    video.removeAttribute("controls");
  }
});

video.addEventListener("pause", function () {
  video.removeAttribute("controls");
});

video.addEventListener("play", function () {
  video.setAttribute("controls", "controls");
});

//   Counter
function animateCounter(element) {
  const target = +element.getAttribute("data-target");
  let count = 0;
  const increment = target / 200;

  const updateCounter = () => {
    count += increment;
    if (count < target) {
      element.textContent = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  updateCounter();
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => animateCounter(counter));
});

// NAV MENU
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const smMenu = document.getElementById("smMenu");
  const nav = document.getElementById("nav");
  const links = smMenu.querySelectorAll("a");
  const closeMenuIcon = document.querySelector(".closeMenu");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("menuActive");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("menuActive");
    });
  });

  closeMenuIcon.addEventListener("click", () => {
    nav.classList.remove("menuActive");
  });
});
