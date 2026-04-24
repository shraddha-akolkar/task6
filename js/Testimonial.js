
function initTestimonialSlider({ trackId, dotsId, prevBtn, nextBtn }) {
  const track = document.getElementById(trackId);
  const dotsContainer = document.getElementById(dotsId);
  const slides = track.querySelectorAll(track.children[0].className ? '.' + track.children[0].className : '*');
  const total = track.children.length;
  let index = 0;


  for (let i = 0; i < total; i++) {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  function goTo(i) {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll('span').forEach((d, j) => {
      d.classList.toggle('active', j === index);
    });
  }

  document.querySelector(nextBtn).addEventListener('click', () => {
    goTo(index < total - 1 ? index + 1 : 0);
  });

  document.querySelector(prevBtn).addEventListener('click', () => {
    goTo(index > 0 ? index - 1 : total - 1);
  });
}

initTestimonialSlider({
  trackId: 'videoTrack',
  dotsId: 'videoDots',
  prevBtn: '.vid-prev',
  nextBtn: '.vid-next'
});

initTestimonialSlider({
  trackId: 'reviewTrack',
  dotsId: 'reviewDots',
  prevBtn: '.rev-prev',
  nextBtn: '.rev-next'
});