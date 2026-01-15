/** Scroll Reveal Effect **/
const sr = ScrollReveal({
  reset: true, // 스크롤 시 한번만 실행(false), 계속 실행(true)
});

sr.reveal('.landing-text-box', {
  duration: 1000,
  origin: 'right',
  distance: '80px',
});

sr.reveal('.meet-text-box', {
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
});

sr.reveal('.meet-wrapper img, .feature', {
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
  inteval: 200, // 0.2초 간격으로 차례로 효과 진행
});
