const prev = document.getElementById("btn-prev"),
  next = document.getElementById("btn-next"),
  slides = document.querySelectorAll(".slide"),
  dots = document.querySelectorAll(".dot");
let index = 0;
//прибираємо активний клас з всіх слайдів, циклом пробігаємо по слайдам
const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active"); // додаємо до поточного слайду
};
const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active"); // додаємо до поточного слайду
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

//перелистування слайдів, якщо ми доходим до останнього, то повернутись на перший і навпаки

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;

    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};
//перелистування слайдів, якщо ми доходим до останнього, то повернутись на перший і навпаки
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};
//при виборі точки вибирається відповідна картинка
dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});
// для відображення дій вішаємо слухача
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

//automatisation
// setInterval(nextSlide, 2500);
