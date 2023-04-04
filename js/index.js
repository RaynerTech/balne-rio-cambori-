swal('Olá!', 'Precione as imagens de bares e restautantes!', 'success');

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    burger.classList.toggle('toggle');
  });
};

navSlide();

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const slideImages = card.querySelectorAll('.card-slide img');
  let currentSlide = 0;

  setInterval(() => {
    slideImages[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slideImages.length;
    slideImages[currentSlide].style.opacity = 1;
  }, 3000);
});

//parallax
$(document).ready(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
// pega a posição do menu em relação ao topo da página
var menuOffsetTop = document.getElementById('menu').offsetTop;

// adiciona um ouvinte para o evento de rolagem da página
window.addEventListener('scroll', function () {
  // pega a posição atual da rolagem da página
  var scrollY = window.pageYOffset;

  // se a posição da rolagem for maior ou igual a posição do menu, adiciona uma classe "fixed" ao menu
  if (scrollY >= menuOffsetTop) {
    document.getElementById('menu').classList.add('fixed');
  } else {
    // caso contrário, remove a classe "fixed"
    document.getElementById('menu').classList.remove('fixed');
  }
});
