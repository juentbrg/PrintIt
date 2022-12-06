const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const arrowLeft = document.querySelector(".arrow.arrow_left");
const arrowRight = document.querySelector(".arrow.arrow_right");
const slideContainer = document.querySelector(".bannerImage");
const slide = document.querySelector(".bannerImageContent");
const dots = document.querySelectorAll(".dot");

arrowRight.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slideContainer.scrollLeft += slideWidth;
  for (let i = 0; i < 1; i++) {
    let dotActived = document.querySelector(".dot.dot_selected");
    if (dotActived == dots[3]) {
      dotActived.classList.remove("dot_selected");
      slideContainer.scrollLeft -= slideWidth * 4;
      dotActived = dots[0];
      dotActived.classList.add("dot_selected");
      break;
    }
    dotActived.classList.remove("dot_selected");
    dotActived = dotActived.nextElementSibling;
    dotActived.classList.add("dot_selected");
  }
});

arrowLeft.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slideContainer.scrollLeft -= slideWidth;
  for (let i = 0; i < 1; i++) {
    let dotActived = document.querySelector(".dot.dot_selected");
    if (dotActived == dots[0]) {
      dotActived.classList.remove("dot_selected");
      slideContainer.scrollLeft += slideWidth * 4;
      dotActived = dots[3];
      dotActived.classList.add("dot_selected");
      break;
    }
    dotActived.classList.remove("dot_selected");
    dotActived = dotActived.previousElementSibling;
    dotActived.classList.add("dot_selected");
  }
});
