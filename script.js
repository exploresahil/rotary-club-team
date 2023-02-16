let slideIndex = 0;
function showSlides() {
  let e,
    s = document.getElementsByClassName("mySlides"),
    t = document.getElementsByClassName("dot");
  for (e = 0; e < s.length; e++) s[e].style.display = "none";
  for (
    slideIndex++, slideIndex > s.length && (slideIndex = 1), e = 0;
    e < t.length;
    e++
  )
    t[e].className = t[e].className.replace(" active", "");
  (s[slideIndex - 1].style.display = "block"),
    (t[slideIndex - 1].className += " active"),
    setTimeout(showSlides, 5e3);
}
showSlides();
const slideContainer = document.querySelector(".projects-section-container"),
  slide = document.querySelector(".projects-cards"),
  nextBtn = document.getElementById("next-btn"),
  prevBtn = document.getElementById("prev-btn"),
  interval = 2e3;
let slideId,
  slides = document.querySelectorAll(".card-container"),
  index = 1;
const firstClone = slides[0].cloneNode(!0),
  lastClone = slides[slides.length - 1].cloneNode(!0);
(firstClone.id = "first-clone"),
  (lastClone.id = "last-clone"),
  slide.append(firstClone),
  slide.prepend(lastClone);
const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;
const startSlide = () => {
    slideId = setInterval(() => {
      moveToNextSlide();
    }, 2e3);
  },
  getSlides = () => document.querySelectorAll(".card-container");
slide.addEventListener("transitionend", () => {
  (slides = getSlides()),
    slides[index].id === firstClone.id &&
      ((slide.style.transition = "none"),
      (index = 1),
      (slide.style.transform = `translateX(${-slideWidth * index}px)`)),
    slides[index].id === lastClone.id &&
      ((slide.style.transition = "none"),
      (index = slides.length - 2),
      (slide.style.transform = `translateX(${-slideWidth * index}px)`));
});
const moveToNextSlide = () => {
    (slides = getSlides()),
      index >= slides.length - 1 ||
        (index++,
        (slide.style.transition = ".7s ease-out"),
        (slide.style.transform = `translateX(${-slideWidth * index}px)`));
  },
  moveToPreviousSlide = () => {
    index <= 0 ||
      (index--,
      (slide.style.transition = ".7s ease-out"),
      (slide.style.transform = `translateX(${-slideWidth * index}px)`));
  };
slide.addEventListener("mouseenter", () => {
  clearInterval(slideId);
}),
  slide.addEventListener("mouseleave", startSlide),
  nextBtn.addEventListener("click", moveToNextSlide),
  prevBtn.addEventListener("click", moveToPreviousSlide),
  startSlide();
