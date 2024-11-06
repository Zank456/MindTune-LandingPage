
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2250,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});


/* Scroll Arrow */
const scrolltotop = document.querySelector('.scroll-top')
window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    scrolltotop.style.display = "grid"
  } else {
    scrolltotop.style.display = "none"
  }
})
/* End Scroll Arrow */


AOS.init({
  duration: 800,
  easing: "ease-in-out"
});


/* Login Form */

document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = document.getElementById('emailinfo').value;
  const password = document.getElementById('password').value;
  
  if (email !== '' && password !== '') {
  // if (email === 'mind@tune.com' && password === 'mindtune') {
    location.href = 'index-2.html';
  } else {
    alert('Incorrect email or password.');
  }
});

/* End Login Form */




