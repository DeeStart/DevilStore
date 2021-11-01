let searchForm = document.querySelector(".search-form");
let menu = document.querySelector(".navbar");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  menu.classList.remove("active");
};

document.querySelector("#menu-btn").onclick = () => {
  menu.classList.toggle("active");
  searchForm.classList.remove("active");
};

//Scroll

let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll(".header .navbar a");

window.onscroll = () => {
  searchForm.classList.remove("active");
  menu.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlide: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".products-slider", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
  loop: true,
  grabCursor: true,
});
