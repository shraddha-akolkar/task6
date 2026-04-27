document.querySelectorAll(".slider").forEach(slider => {
  const track = slider.querySelector(".slider-track");
  const slides = slider.querySelectorAll(".tech-card");
  const next = slider.querySelector(".next");
  const prev = slider.querySelector(".prev");

  let index = 0;

  const getVisible = () => {
    const w = window.innerWidth;
    if (w <= 767) return 1;
    if (w <= 992) return 2;
    if (w <= 1024) return 3;
    return 4;
  };

  const update = () => {
    const cardWidth = slides[0].offsetWidth + 20;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  };

  next.onclick = () => {
    if (index < slides.length - getVisible()) {
      index++;
      update();
    }
  };

  prev.onclick = () => {
    if (index > 0) {
      index--;
      update();
    }
  };

  window.onresize = () => {
    index = 0;
    update();
  };
});