const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  const track = slider.querySelector(".slider-track");
  const nextBtn = slider.querySelector(".next");
  const prevBtn = slider.querySelector(".prev");

  let index = 0;

  nextBtn.addEventListener("click", () => {
    index++;
    track.style.transform = `translateX(-${index * 25}%)`;
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * 25}%)`;
    }
  });
});