window.addEventListener("load", function () {
  // swiper 만들기 실행
  new Swiper(".sw_ticket", {
    slidesPerView: 7,
    spaceBetween: 20,
    slidesPerGroup: 7,
    // 반응형
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },
    breakpoints: {
      1024: { slidesPerView: 3, slidesPerGroup: 3 },
      1280: { slidesPerView: 4, slidesPerGroup: 4 },
    },
  });
});
