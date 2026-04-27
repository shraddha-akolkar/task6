function simpleSlider(trackId, dotsId, prevBtn, nextBtn) {
  const track = document.getElementById(trackId);
  const slides = track.children;
  const dotsContainer = document.getElementById(dotsId);

  let index = 0;
  const total = slides.length;

  
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");

    dot.onclick = () => showSlide(i);
    dotsContainer.appendChild(dot);
  }

  function showSlide(i) {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;

  
    const dots = dotsContainer.children;
    for (let j = 0; j < dots.length; j++) {
      dots[j].classList.remove("active");
    }
    dots[index].classList.add("active");
  }

 
  document.querySelector(nextBtn).onclick = () => {
    index = (index + 1) % total;
    showSlide(index);
  };

 
  document.querySelector(prevBtn).onclick = () => {
    index = (index - 1 + total) % total;
    showSlide(index);
  };
}


simpleSlider("videoTrack", "videoDots", ".vid-prev", ".vid-next");
simpleSlider("reviewTrack", "reviewDots", ".rev-prev", ".rev-next");